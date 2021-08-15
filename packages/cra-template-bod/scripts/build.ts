import chalk from 'chalk';
import path from 'path';
import { execSync } from 'child_process';

const exec = (cmd: string) => {
  console.info(`${chalk.bgGreen.black('[exec]')}: ${cmd}`);
  const rootPath = path.join(__dirname, '..');
  return execSync(cmd, {
    shell: '/usr/bin/bash',
    stdio: 'inherit',
    cwd: rootPath,
  });
};

exec('rm -rf template');
exec('mkdir -p template');
exec('cp -fr public template/');
exec('cp -fr src template/');
exec('cp -fr tsconfig.json template/');
exec('cp -fr README.md template/');
exec('cp -fr .gitignore template/gitignore');
