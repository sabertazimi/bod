#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import cp from 'child_process';
import consola from 'consola';

class Test {
  pid: number;

  constructor() {
    this.pid = -1;
  }

  startLocalRegistry(configPath: string) {
    const { pid } = cp.exec(`npx verdaccio -c ${configPath}`);

    if (pid) {
      this.pid = pid;
    }
  }

  stopLocalRegistry() {
    return;
  }

  publishToLocalRegistry() {
    return;
  }

  cleanUp() {
    consola.info('Cleaning up.');
    // cp.execSync('git checkout -- packages/*/package.json');
    this.stopLocalRegistry();
  }

  handleSetup() {
    process.on('SIGINT', this.handleExit);
    process.on('uncaughtException', this.handleError);
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
    const gitStatus = cp.execSync(`git status --porcelain`).toString();

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

  runCRA(appPath: string, rootPath: string, scriptsPath: string) {
    cp.execSync(
      `npx create-react-app ${appPath} --scripts-version ${scriptsPath}`,
      {
        cwd: rootPath,
        stdio: 'inherit',
      }
    );
  }

  run() {
    this.handleSetup();

    const rootPath = path.join(__dirname, '..');
    const packagesPath = path.join(rootPath, 'packages');
    const cwd = process.cwd();
    consola.info(`Working in directory ${cwd}`);

    const localRegistry = 'http://localhost:4873';
    const originalRegistry = cp.execSync('npm get registry').toString();
    const localRegistryConfigPath = path.join(
      rootPath,
      '/scripts/verdaccio.yaml'
    );

    this.handleExit();
  }
}

const main = () => {
  const test = new Test();
  test.run();
};

main();
