#!/usr/bin/env node

import chalk from 'chalk';
import consola from 'consola';
import { program } from 'commander';
import envinfo from 'envinfo';
import packageJson from '../package.json';
import { create } from './index';

program.version(packageJson.version).usage('<command> [options]');

program
  .command('create <app-name>')
  .description(
    'create a new project powered by Create React App and @sabertazimi/react-scripts'
  )
  .action((name) => {
    create(name);
  });

program
  .command('info')
  .description('print debugging information about your environment')
  .action(() => {
    consola.info('\nEnvironment Info:');
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
program.arguments('<command>').action((cmd) => {
  program.outputHelp();
  consola.error(`  Unknown command ${chalk.yellow(cmd)}.`);
  consola.log('');
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

program.commands.forEach((c) => c.on('--help', () => consola.log('')));

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
