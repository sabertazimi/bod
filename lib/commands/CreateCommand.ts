import chalk from 'chalk';
import consola from 'consola';
import spawn from 'cross-spawn';
import inquirer from 'inquirer';
import BaseCommand from './BaseCommand';

class CreateCommand extends BaseCommand {
  name: string;
  description: string;
  usage: string;

  constructor() {
    super();
    this.name = 'create';
    this.description = 'Create a new project';
    this.usage = 'create <app-name>';
  }

  async run(appName: string): Promise<void> {
    const command = 'npx';
    const commandArgs = ['create-react-app', appName];

    // exit signal
    ['SIGINT', 'SIGTERM'].forEach(function (sig) {
      process.on(sig, function () {
        consola.info('\nGracefully shutting down. Please wait...');
        process.exit();
      });
    });

    // template choice
    const { templateAction } = await inquirer.prompt([
      {
        name: 'templateAction',
        type: 'list',
        message: `Use ${chalk.cyan('Simple')} template or ${chalk.cyan(
          'React Only'
        )} template or ${chalk.cyan('React Framework')} template:`,
        choices: [
          { name: 'Simple', value: 'simple' },
          { name: 'React Only', value: 'only' },
          { name: 'React Framework', value: 'framework' },
        ],
      },
    ]);

    if (!templateAction) {
      return;
    } else if (templateAction === 'simple') {
      // git clone simple boilerplate from GitHub
      const gitCommand = 'git';
      // TODO: Perf: only clone latest commit for simple boilerplate
      const gitArgs = [
        'clone',
        'https://github.com/sabertazimi/boilerplate',
        appName,
      ];
      const proc = spawn.sync(gitCommand, gitArgs, { stdio: 'inherit' });

      if (proc.status !== 0) {
        consola.error(`\n\`${command} ${commandArgs.join(' ')}\` exited.`);
      }

      // no need for other processing
      return;
    } else if (templateAction === 'framework') {
      commandArgs.push('--scripts-version', '@sabertazimi/react-scripts');
    }

    // TODO: Feat: add NPM or Yarn choice action

    // TypeScript choice
    const { tsAction } = await inquirer.prompt([
      {
        name: 'tsAction',
        type: 'list',
        message: `Use ${chalk.cyan('TypeScript')}:`,
        choices: [
          { name: 'Yes', value: 'yes' },
          { name: 'No', value: 'no' },
        ],
      },
    ]);

    if (!tsAction) {
      return;
    } else if (tsAction === 'yes') {
      commandArgs.push('--typescript');
    }

    // start to install boilerplate
    const proc = spawn.sync(command, commandArgs, { stdio: 'inherit' });

    if (proc.status !== 0) {
      consola.error(`\n\`${command} ${commandArgs.join(' ')}\` exited.`);
    }
  }
}

export default CreateCommand;
