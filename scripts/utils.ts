import cp from 'child_process';
import chalk from 'chalk';
import { isCI } from 'ci-info';
import consola from 'consola';
import fetch from 'node-fetch';
import semver from 'semver';

const log = (log: string): void => {
  consola.log(log);
};

const info = (info: string): void => {
  consola.info(chalk.blue(info));
};

const success = (success: string): void => {
  consola.success(chalk.green(success));
};

const error = (error: string | Error): void => {
  consola.error(error);
};

const cmd = (cmd: string): void => {
  console.info(`    ${chalk.bgGreen.black('[exec]')}: ${cmd}`);
};

const checkGitStatus = (): void => {
  info('Check git status ...');
  const gitStatus = execPipe('git status --porcelain').toString();

  if (gitStatus.trim() !== '') {
    info('Please commit your changes before running this script!');
    info('Exiting because `git status` is not empty:');
    log('');
    log(gitStatus);
    log('');
    process.exit(1);
  }
};

const exec = (command: string, cwd?: string): Buffer => {
  cmd(command);
  return cp.execSync(command, {
    shell: '/usr/bin/bash',
    stdio: 'inherit',
    cwd: cwd ?? process.cwd(),
  });
};

const execPipe = (command: string, cwd?: string): Buffer => {
  cmd(command);
  return cp.execSync(command, {
    shell: '/usr/bin/bash',
    stdio: 'pipe',
    cwd: cwd ?? process.cwd(),
  });
};

export {
  chalk as color,
  fetch,
  isCI,
  semver,
  log,
  info,
  success,
  error,
  cmd,
  checkGitStatus,
  exec,
  execPipe,
};
