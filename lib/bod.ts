#!/usr/bin/env node

import chalk from 'chalk';
import { Command, program } from 'commander';
import consola from 'consola';
import envinfo from 'envinfo';
import packageJson from '../package.json';
import { create } from './index';

program.version(packageJson.version).usage('<command> [options]');

program
  .command('create <app-name>')
  .description(
    'create a new project powered by Create React App and @sabertazimi/react-scripts'
  )
  .action((name: string) => {
    create(name);
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
program.arguments('<cmd> [env]').action((cmd: string) => {
  consola.error(`  Unknown command ${chalk.yellow(cmd)}.`);
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

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
