#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const consola = require('consola');

const startLocalRegistry = () => {};
const stopLocalRegistry = (pid) => {};
const publishToLocalRegistry = () => {};

const cleanup = () => {
  consola.info('Cleaning up.');
  // cp.execSync(`git checkout -- packages/*/package.json`);
  stopLocalRegistry();
};

const handleSetup = () => {
  process.on('SIGINT', handleExit);
  process.on('uncaughtException', handleError);
};

const handleExit = () => {
  cleanup();
  consola.info('Exiting without error.');
  process.exit(0);
};

const handleError = (e) => {
  consola.error('ERROR! An error was encountered while executing');
  consola.error(e);
  cleanup();
  consola.info('Exiting with error.');
  process.exit(1);
};

const checkGitStatus = () => {
  const gitStatus = cp.execSync(`git status --porcelain`).toString();

  if (gitStatus.trim() !== '') {
    consola.info('Please commit your changes before running this script!');
    consola.info('Exiting because `git status` is not empty:');
    consola.log();
    consola.info(gitStatus);
    consola.log();
    process.exit(1);
  }
};

const getPackages = () => {
  const packagePathsByName = {};

  fs.readdirSync(packagesDir).forEach((name) => {
    const packageDir = path.join(packagesDir, name);
    const packageJson = path.join(packageDir, 'package.json');
    if (fs.existsSync(packageJson)) {
      packagePathsByName[name] = packageDir;
    }
  });

  return packagePathsByName;
};

const packReactScripts = () => {
  const scriptsFileName = cp
    .execSync(`npm pack`, { cwd: path.join(packagesDir, 'react-scripts') })
    .toString()
    .trim();
  const scriptsPath = path.join(packagesDir, 'react-scripts', scriptsFileName);
  return scriptsPath;
};

const runCRA = () => {
  const craScriptPath = path.join(packagesDir, 'create-react-app', 'index.js');

  cp.execSync(
    `node ${craScriptPath} ${args.join(
      ' '
    )} --scripts-version="${scriptsPath}"`,
    {
      cwd: rootDir,
      stdio: 'inherit',
    }
  );
};

const main = () => {
  handleSetup();

  const rootDir = path.join(__dirname, '..');
  const packagesDir = path.join(rootDir, 'packages');
  const cwd = process.cwd();
  consola.info(`Working in directory ${cwd}`);

  handleExit();
};

main();
