import chalk from 'chalk';
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
    Test.info(`Working in directory ${process.cwd()}.`);
    this.appName = appName;
    this.cwd = process.cwd();
    this.rootPath = path.join(__dirname, '..');
    this.packagesPath = path.join(this.rootPath, 'packages');
    this.originalRegistry = Test.execPipe('npm config get registry')
      .toString()
      .replace(/\n$/, '');
    this.localPort = 4873;
    this.localRegistry = `http://localhost:${this.localPort}`;
    this.localRegistryConfigPath = path.join(
      this.rootPath,
      'scripts/verdaccio.yaml'
    );
    this.localRegistryLogPath = path.join(this.rootPath, 'registry.log');
  }

  static exec(command: string, cwd?: string) {
    Test.cmd(command);
    return cp.execSync(command, {
      shell: '/usr/bin/bash',
      stdio: 'inherit',
      cwd: cwd ?? process.cwd(),
    });
  }

  static execPipe(command: string, cwd?: string) {
    Test.cmd(command);
    return cp.execSync(command, {
      shell: '/usr/bin/bash',
      stdio: 'pipe',
      cwd: cwd ?? process.cwd(),
    });
  }

  static log(log: string) {
    consola.log(log);
  }

  static info(info: string) {
    consola.info(chalk.green(info));
  }

  static success(success: string) {
    consola.success(chalk.green(success));
  }

  static error(error: string | Error) {
    consola.error(error);
  }

  static cmd(cmd: string) {
    consola.info(`  ${chalk.black.bgGreen('[exec]')}: ${cmd}`);
  }

  startLocalRegistry() {
    Test.info('Start verdaccio server ...');
    Test.exec(
      `nohup npx verdaccio -c ${this.localRegistryConfigPath} &>${this.localRegistryLogPath} &`
    );
    Test.exec(`grep -q 'http address' <(tail -f ${this.localRegistryLogPath})`);
    Test.exec(`npm config set registry "${this.localRegistry}"`);
  }

  stopLocalRegistry() {
    const localRegistryNpmrcPath = path.join(this.rootPath, '.npmrc');
    const localRegistryAuthStorage = path.join(
      this.rootPath,
      'scripts/htpasswd'
    );
    const localRegistryBundleStorage = path.join(
      this.rootPath,
      'scripts/storage'
    );
    const localRegistryMetaStorage = path.join(this.rootPath, 'storage');

    Test.info('Clear local registry ...');
    Test.exec(`npm config set registry "${this.originalRegistry}"`);
    Test.exec(`kill -9 $(lsof -t -i:${this.localPort})`);
    Test.exec(`rm -fr ${localRegistryNpmrcPath}`);
    Test.exec(`rm -fr ${localRegistryAuthStorage}`);
    Test.exec(`rm -fr ${localRegistryBundleStorage}`);
    Test.exec(`rm -fr ${localRegistryMetaStorage}`);
  }

  publishToLocalRegistry() {
    Test.info(`Publish packages to ${this.localRegistry} ...`);
    Test.exec('git clean -df');
    Test.exec(
      `npx npm-auth-to-token -u test -p test -e test@test.com -r ${this.localRegistry}`
    );
    Test.exec('npx standard-version --skip.changelog --skip.commit --skip.tag');
    Test.execPipe(`npm publish -ws`);
  }

  cleanUp() {
    Test.info('Cleaning up ...');
    this.stopLocalRegistry();
    Test.exec(
      'git restore package.json package-lock.json packages/*/package.json'
    );
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
    Test.success('E2E testing completed.');
    process.exit(0);
  }

  handleError(error: Error) {
    Test.error('An error was encountered while executing');
    Test.error(error);
    this.cleanUp();
    Test.error('Exiting with error.');
    process.exit(1);
  }

  checkGitStatus() {
    const gitStatus = Test.execPipe('git status --porcelain').toString();

    if (gitStatus.trim() !== '') {
      Test.info('Please commit your changes before running this script!');
      Test.info('Exiting because `git status` is not empty:');
      Test.log('');
      Test.log(gitStatus);
      Test.log('');
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
    const scriptsFileName = Test.execPipe(
      'npm pack',
      path.join(packagesPath, 'react-scripts')
    )
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
  const appName = 'app';
  const test = new Test(appName);
  test.run();
};

main();
