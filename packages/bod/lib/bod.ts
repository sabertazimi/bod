#!/usr/bin/env node

import chalk from 'chalk';
import { Command, program } from 'commander';
import consola from 'consola';
import envinfo from 'envinfo';
import fs from 'fs';
import path from 'path';
import { create } from './index';

const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(
  fs.readFileSync(packageJsonPath, { encoding: 'utf-8' })
);

program.version(packageJson.version, '-v, --version');
program.usage('<command> [options]');

program
  .command('create <appName>')
  .description(
    'create a new project powered by Create React App and @sabertazimi/react-scripts'
  )
  .action((appName: string) => {
    create(appName);
  });

program
  .command('info')
  .description('print debugging information about your environment')
  .action(() => {
    consola.info('Environment Info:');
    envinfo
      .run(
        {
          System: ['OS', 'CPU'],
          Binaries: ['Node', 'Yarn', 'npm'],
          Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
          npmPackages: '/**/{typescript,*react*,@sabertazimi/*/}',
          npmGlobalPackages: ['@sabertazimi/bod'],
        },
        {
          showNotFound: true,
          duplicates: true,
          fullTree: true,
        }
      )
      .then(consola.info);
  });

// output help information on unknown commands
program.arguments('<command> [options]').action((command: string) => {
  consola.error(`  Unknown command ${chalk.yellow(command)}.`);
  consola.log('');
  program.outputHelp();
});

// add some useful info on help
program.on('--help', () => {
  consola.log('');
  consola.info(
    `  Run ${chalk.cyan(
      `bod <command> --help`
    )} for detailed usage of given command.`
  );
  consola.log('');
});

program.commands.forEach((c: Command) => c.on('--help', () => consola.log('')));
program.showHelpAfterError();
program.parse(process.argv);
