#!/usr/bin/env node

import cp from 'child_process';
import consola from 'consola';
import fs from 'fs';
import path from 'path';

class Test {
  appName: string;
  cwd: string;
  rootPath: string;
  packagesPath: string;
  originalRegistry: string;
  localPort: number;
  localRegistry: string;
  localRegistryConfigPath: string;
  localRegistryLogPath: string;

  constructor(appName: string) {
    this.appName = appName;
    this.cwd = process.cwd();
    consola.info(`Working in directory ${this.cwd}.`);
    this.rootPath = path.join(__dirname, '..');
    this.packagesPath = path.join(this.rootPath, 'packages');
    this.originalRegistry = Test.exec(
      'npm config get registry',
      true
    ).toString();
    this.localPort = 4873;
    this.localRegistry = `http://localhost:${this.localPort}`;
    this.localRegistryConfigPath = path.join(
      this.rootPath,
      'scripts/verdaccio.yaml'
    );
    this.localRegistryLogPath = path.join(this.rootPath, 'registry.log');
  }

  static exec(command: string, pipe?: boolean, cwd?: string) {
    return cp.execSync(command, {
      shell: '/usr/bin/bash',
      stdio: pipe ? 'pipe' : 'inherit',
      cwd: cwd ?? process.cwd(),
    });
  }

  startLocalRegistry() {
    consola.info('Start verdaccio server ...');
    Test.exec(
      `nohup npx verdaccio -c ${this.localRegistryConfigPath} &>${this.localRegistryLogPath} &`
    );
    Test.exec(`grep -q 'http address' <(tail -f ${this.localRegistryLogPath})`);
    Test.exec(`npm config set registry "${this.localRegistry}"`);
  }

  stopLocalRegistry() {
    const localRegistryAuthStorage = path.join(
      this.rootPath,
      'scripts/htpasswd'
    );
    const localRegistryBundleStorage = path.join(
      this.rootPath,
      'scripts/storage'
    );
    const localRegistryMetaStorage = path.join(this.rootPath, 'storage');
    Test.exec(`npm config set registry "${this.originalRegistry}"`);
    consola.info('Reset npm registry.');
    Test.exec(`kill -9 $(lsof -t -i:${this.localPort})`);
    Test.exec(`rm -fr ${localRegistryAuthStorage}`);
    Test.exec(`rm -fr ${localRegistryBundleStorage}`);
    Test.exec(`rm -fr ${localRegistryMetaStorage}`);
    consola.info('Clear all local registry storage files.');
  }

  publishToLocalRegistry() {
    Test.exec('git clean -df');
    Test.exec(
      `npx npm-auth-to-token -u test -p test -e test@test.com -r ${this.localRegistry}`
    );
    Test.exec('npx standard-version --skip.changelog --skip.commit --skip.tag');
    consola.info(`Publish packages to ${this.localRegistry} ...`);
    Test.exec(`npm publish -ws`, true);
  }

  cleanUp() {
    consola.info('Cleaning up ...');
    Test.exec(
      'git checkout -- package.json package-lock.json packages/*/package.json'
    );
    this.stopLocalRegistry();
  }

  handleSetup() {
    process.on('SIGHUP', this.handleExit.bind(this));
    process.on('SIGINT', this.handleExit.bind(this));
    process.on('SIGQUIT', this.handleExit.bind(this));
    process.on('SIGTERM', this.handleExit.bind(this));
    process.on('uncaughtException', this.handleError.bind(this));
  }

  handleExit() {
    this.cleanUp();
    consola.info('Exiting without error.');
    process.exit(0);
  }

  handleError(error: Error) {
    consola.error('An error was encountered while executing');
    consola.error(error);
    this.cleanUp();
    consola.info('Exiting with error.');
    process.exit(1);
  }

  checkGitStatus() {
    const gitStatus = Test.exec('git status --porcelain', true).toString();

    if (gitStatus.trim() !== '') {
      consola.info('Please commit your changes before running this script!');
      consola.info('Exiting because `git status` is not empty:');
      consola.log('');
      consola.log(gitStatus);
      consola.log('');
      process.exit(1);
    }
  }

  getPackages(packagesPath: string) {
    const packagePathsByName: { [key: string]: string } = {};

    fs.readdirSync(packagesPath).forEach((name) => {
      const packagePath = path.join(packagesPath, name);
      const packageJson = path.join(packagePath, 'package.json');
      if (fs.existsSync(packageJson)) {
        packagePathsByName[name] = packagePath;
      }
    });

    return packagePathsByName;
  }

  packReactScripts(packagesPath: string) {
    const scriptsFileName = cp
      .execSync('npm pack', { cwd: path.join(packagesPath, 'react-scripts') })
      .toString()
      .trim();
    const scriptsPath = path.join(
      packagesPath,
      'react-scripts',
      scriptsFileName
    );
    return scriptsPath;
  }

  runCRA(scriptsPath: string) {
    // npx create-react-app appName --template @sabertazimi/typescript --scripts-version @sabertazimi/react-scripts
    Test.exec(
      `npx create-react-app ${this.appName} --scripts-version ${scriptsPath}`,
      false,
      this.rootPath
    );
  }

  run() {
    this.handleSetup();
    this.checkGitStatus();
    this.startLocalRegistry();
    this.publishToLocalRegistry();
    this.handleExit();
  }
}

const main = () => {
  const appName = 'temp';
  const test = new Test(appName);
  test.run();
};

main();
