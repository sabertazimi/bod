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

  const ignoreDeps = [
    '@sabertazimi/react-scripts',
    'react-scripts',
    'react',
    'react-dom',
  ];

  // Remove ignored dependencies
  const appDeps = Object.keys(packageJson.dependencies)
    .filter((dep: string) => !ignoreDeps.includes(dep))
    .reduce((deps: { [key: string]: string }, dep: string) => {
      deps[dep] = packageJson.dependencies[dep];
      return deps;
    }, {});

  // Remove ignored devDependencies
  const appDevDeps = Object.keys(packageJson.devDependencies)
    .filter((dep: string) => !ignoreDeps.includes(dep))
    .reduce((deps: { [key: string]: string }, dep: string) => {
      deps[dep] = packageJson.devDependencies[dep];
      return deps;
    }, {});

  // Keep 'template:xxx' scripts
  const appScripts = Object.keys(packageJson.scripts)
    .filter((script: string) => script.startsWith('template:'))
    .reduce((scripts: { [key: string]: string }, script: string) => {
      const scriptName = script.slice(script.indexOf(':') + 1);
      scripts[scriptName] = packageJson.scripts[script];
      return scripts;
    }, {});

  const appPackageJson = {
    package: {
      ...packageJson,
      dependencies: { ...appDeps },
      devDependencies: { ...appDevDeps },
      scripts: { ...appScripts },
    },
  };

  // Write updated package.json
  fs.writeFileSync(
    path.join(rootPath, 'template.json'),
    JSON.stringify(appPackageJson, null, 2)
  );
};

const main = () => {
  buildTemplate();
  buildJson();
};

main();
