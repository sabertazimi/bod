#!/usr/bin/env node

import chalk from 'chalk';
import { Command, program } from 'commander';
import consola from 'consola';
import fs from 'fs';
import path from 'path';
import { CommandFactory } from './index';

const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(
  fs.readFileSync(packageJsonPath, { encoding: 'utf-8' })
);

program.version(packageJson.version, '-v, --version');
program.usage('<command> [options]');

for (const command of CommandFactory.values()) {
  program
    .command(command.getUsage())
    .description(command.getDescription())
    .action(async (appName: string) => {
      try {
        await command.run(appName);
      } catch (error) {
        consola.error(error);
        program.outputHelp();
      }
    });
}

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
