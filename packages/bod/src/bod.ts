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

for (const command of CommandFactory.values()) {
  program
    .command(command.getUsage())
    .alias(command.getAlias())
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
