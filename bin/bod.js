#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

program
  .version(require('../package').version)
  .usage('<command> [options]');

program
  .command('create <app-name>')
  .description('create a new project powered by Create React App and @sabertazimi/react-scripts')
  .action((name) => {
    require('../lib/create')(name);
  });

program
  .command('info')
  .description('print debugging information about your environment')
  .action((cmd) => {
    console.log(chalk.bold('\nEnvironment Info:'));
    require('envinfo').run(
      {
        System: ['OS', 'CPU'],
        Binaries: ['Node', 'Yarn', 'npm'],
        Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
        npmPackages: '/**/{typescript,*react*,@sabertazimi/*/}',
        npmGlobalPackages: ['@sabertazimi/bod']
      },
      {
        showNotFound: true,
        duplicates: true,
        fullTree: true,
      },
    ).then(console.log);
  });

// output help information on unknown commands
program
  .arguments('<command>')
  .action((cmd) => {
    program.outputHelp();
    console.log(`  ` + chalk.red(`Unknown command ${chalk.yellow(cmd)}.`));
    console.log();
  });

// add some useful info on help
program.on('--help', () => {
  console.log();
  console.log(`  Run ${chalk.cyan(`bod <command> --help`)} for detailed usage of given command.`);
  console.log();
});

program.commands.forEach(c => c.on('--help', () => console.log()));

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
