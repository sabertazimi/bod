#!/usr/bin/env node

import cp from 'child_process';
import consola from 'consola';
import fs from 'fs';
import path from 'path';

class Test {
  appName: string;
  rootPath: string;
  packagesPath: string;
  cwd: string;
  localRegistry: string;
  originalRegistry: string;
  localRegistryConfigPath: string;
  localRegistryLogPath: string;

  constructor(appName: string) {
    this.appName = appName;
    this.rootPath = '';
    this.packagesPath = '';
    this.cwd = '';
    this.localRegistry = '';
    this.originalRegistry = '';
    this.localRegistryConfigPath = '';
    this.localRegistryLogPath = '';
  }

  startLocalRegistry() {
    cp.execSync(
      `nohup npx verdaccio -c ${this.localRegistryConfigPath} &>${this.localRegistryLogPath} &`
    );
    cp.execSync(
      `grep -q 'http address' <(tail -f ${this.localRegistryLogPath})`
    );
    cp.execSync(`npm set registry "${this.localRegistry}"`);
  }

  stopLocalRegistry() {
    cp.execSync(`npm set registry ${this.originalRegistry}`);
  }

  publishToLocalRegistry() {
    // cp.execSync('git clean -df');
    cp.execSync('npm run publish');
  }

  cleanUp() {
    consola.info('Cleaning up.');
    // cp.execSync('git checkout -- packages/*/package.json');
    this.stopLocalRegistry();
  }

  handleSetup() {
    process.on('SIGINT', this.handleExit.bind(this));
    process.on('uncaughtException', this.handleError.bind(this));
  }

  handleExit() {
    this.cleanUp();
    consola.info('Exiting without error.');
    process.exit(0);
  }

  handleError(error: Error) {
    consola.error('ERROR! An error was encountered while executing');
    consola.error(error);
    this.cleanUp();
    consola.info('Exiting with error.');
    process.exit(1);
  }

  checkGitStatus() {
    const gitStatus = cp.execSync('git status --porcelain').toString();

    if (gitStatus.trim() !== '') {
      consola.info('Please commit your changes before running this script!');
      consola.info('Exiting because `git status` is not empty:');
      consola.log('');
      consola.info(gitStatus);
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
      .execSync(`npm pack`, { cwd: path.join(packagesPath, 'react-scripts') })
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
    cp.execSync(
      `npx create-react-app ${this.appName} --scripts-version ${scriptsPath}`,
      {
        cwd: this.rootPath,
        stdio: 'inherit',
      }
    );
  }

  init() {
    this.cwd = process.cwd();
    consola.info(`Working in directory ${this.cwd}`);

    this.rootPath = path.join(__dirname, '..');
    this.packagesPath = path.join(this.rootPath, 'packages');
    this.originalRegistry = cp.execSync('npm get registry').toString();
    this.localRegistry = 'http://localhost:4873';
    this.localRegistryConfigPath = path.join(
      this.rootPath,
      'scripts/verdaccio.yaml'
    );
    this.localRegistryLogPath = path.join(this.rootPath, 'registry.log');
  }

  run() {
    this.handleSetup();
    this.checkGitStatus();
    this.init();
    this.startLocalRegistry();
    // this.publishToLocalRegistry();
    this.handleExit();
  }
}

const main = () => {
  const appName = 'temp';
  const test = new Test(appName);
  test.run();
};

main();
