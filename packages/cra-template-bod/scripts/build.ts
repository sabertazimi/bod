import chalk from 'chalk';
import cp from 'child_process';
import fs from 'fs';
import path from 'path';

const rootPath = path.join(__dirname, '..');

const exec = (cmd: string) => {
  console.info(`    ${chalk.bgGreen.black('[exec]')}: ${cmd}`);
  return cp.execSync(cmd, {
    shell: '/usr/bin/bash',
    stdio: 'inherit',
    cwd: rootPath,
  });
};

const buildTemplate = () => {
  exec('rm -rf template');
  exec('mkdir -p template');
  exec('cp -fr public template/');
  exec('cp -fr src template/');
  exec('cp -fr tsconfig.json template/');
  exec('cp -fr README.md template/');
  exec('cp -fr .gitignore template/gitignore');
};

const buildJson = () => {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(rootPath, 'package.json'), 'utf8')
  );
  const appPackageJson = JSON.parse(
    fs.readFileSync(path.join(rootPath, 'template.json'), 'utf8')
  );

  const ignoreDeps = [
    '@sabertazimi/react-scripts',
    'react-scripts',
    'react',
    'react-dom',
  ];
  const appScripts = { ...appPackageJson.package.scripts };

  // Merge package.json
  appPackageJson.package = {
    ...appPackageJson.package,
    ...packageJson,
  };

  // Remove ignored deps
  appPackageJson.package.dependencies = Object.keys(
    appPackageJson.package.dependencies
  )
    .filter((dep: string) => !ignoreDeps.includes(dep))
    .reduce((deps: { [key: string]: string }, dep: string) => {
      deps[dep] = appPackageJson.package.dependencies[dep];
      return deps;
    }, {});

  // Keep app scripts
  appPackageJson.package.scripts = appScripts;

  // Write updated package.json
  fs.writeFileSync(
    path.join(rootPath, 'template.json'),
    JSON.stringify(appPackageJson, null, 2)
  );
};

buildTemplate();
buildJson();
