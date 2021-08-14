import chalk from 'chalk';
import cp from 'child_process';
import consola from 'consola';
import fs from 'fs';
import path from 'path';

class Test {
  appName: string;
  cwd: string;
  rootPath: string;
  appPath: string;
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
    this.appPath = path.join(this.rootPath, this.appName);
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
    consola.info(chalk.blue(info));
  }

  static success(success: string) {
    consola.success(chalk.green(success));
  }

  static error(error: string | Error) {
    consola.error(error);
  }

  static cmd(cmd: string) {
    console.info(`    ${chalk.bgGreen.black('[exec]')}: ${cmd}`);
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
    Test.exec('npm run build');
    const packages = Test.execPipe(`npm publish -ws`)
      .toString()
      .replace('/^[^+].*\n', '') // only keep packages version output
      .replace(/\+/g, chalk.bgBlue.black('[+]'))
      .replace(/\n$/, ''); // remove tailing empty line
    console.info(packages);
  }

  cleanUp() {
    Test.info('Cleaning up ...');
    this.stopLocalRegistry();
    Test.exec(`rm -fr ${this.appPath}`);
    Test.exec('git restore package.json package-lock.json packages/*');
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

  runCRA(templatePath: string, scriptsPath: string) {
    Test.info('Run create-react-app to generate project ...');
    Test.exec(`rm -fr ${this.appPath}`);
    Test.exec(
      `npx create-react-app ${this.appName} --template ${templatePath} --scripts-version ${scriptsPath}`,
      this.rootPath
    );
  }

  exists(filePath: string) {
    return fs.existsSync(path.join(this.appPath, filePath));
  }

  checkJsxTemplateIntegrity() {
    Test.info('Checking template integrity ...');

    const templateAssets =
      this.exists('node_modules/@sabertazimi/react-scripts') &&
      this.exists('src/index.js') &&
      this.exists('public/index.html');

    if (!templateAssets) {
      this.handleError(Error('CRA template not installed correctly.'));
    }
  }

  checkTsxTemplateIntegrity() {
    Test.info('Checking template integrity ...');

    const templateAssets =
      this.exists('node_modules/@sabertazimi/react-scripts') &&
      this.exists('node_modules/typescript') &&
      this.exists('tsconfig.json') &&
      this.exists('src/index.tsx') &&
      this.exists('public/index.html') &&
      this.exists('src/react-app-env.d.ts');

    if (!templateAssets) {
      this.handleError(Error('CRA template not installed correctly.'));
    }
  }

  runBuildScript() {
    Test.info('Start testing for `react-scripts build` ...');
    Test.exec('npm run build', this.appPath);

    const buildAssets = this.exists('build');

    if (!buildAssets) {
      this.handleError(Error('CRA `react-scripts build` failed.'));
    }
  }

  runTestScript() {
    Test.info('Start testing for `react-scripts test` ...');
    Test.exec('CI=true npm run test', this.appPath);
  }

  runStartScript() {
    Test.info('Start testing for `react-scripts start` ...');
    Test.exec('npm start -- --smoke-test', this.appPath);
  }

  runTest(
    templatePath: string,
    scriptsPath: string,
    checkTemplateIntegrity: () => void
  ) {
    this.runCRA(templatePath, scriptsPath);
    checkTemplateIntegrity();
    this.runBuildScript();
    this.runTestScript();
    this.runStartScript();
  }

  run() {
    this.handleSetup();
    this.checkGitStatus();
    this.startLocalRegistry();
    this.publishToLocalRegistry();
    this.runTest(
      '@sabertazimi',
      '@sabertazimi/react-scripts',
      this.checkJsxTemplateIntegrity.bind(this)
    );
    this.runTest(
      '@sabertazimi/typescript',
      '@sabertazimi/react-scripts',
      this.checkTsxTemplateIntegrity.bind(this)
    );
    this.runTest(
      'bod',
      '@sabertazimi/react-scripts',
      this.checkTsxTemplateIntegrity.bind(this)
    );
    this.handleExit();
  }
}

const main = () => {
  const appName = 'app';
  const test = new Test(appName);
  test.run();
};

main();
