import spawn from 'cross-spawn';
import inquirer from 'inquirer';
import BaseCommand from './BaseCommand';

class CreateCommand extends BaseCommand {
  private static SimpleBoilerplate =
    'https://github.com/sabertazimi/boilerplate';
  private static ReactScripts = '@sabertazimi/react-scripts';

  static readonly TemplateActions = [
    {
      name: 'Simple',
      value: 'simple',
      command: 'git',
      args: ['clone', '--depth=1', CreateCommand.SimpleBoilerplate],
    },
    {
      name: 'React Only',
      value: 'only',
      command: 'npx',
      args: [
        'create-react-app',
        '--template',
        'typescript',
        '--scripts-version',
        'react-scripts',
      ],
    },
    {
      name: 'React Framework',
      value: 'framework',
      command: 'npx',
      args: [
        'create-react-app',
        '--template',
        'typescript',
        '--scripts-version',
        CreateCommand.ReactScripts,
      ],
    },
  ];

  private command = 'npx';
  private commandArgs: string[] = [];

  constructor() {
    super({
      name: 'create',
      description: 'Create a new project',
      usage: 'create <appName>',
    });
  }

  public async run(appName: string): Promise<void> {
    await this.processTemplateAction();
    this.processAppPath(appName);
    this.execute();
  }

  private async processTemplateAction() {
    const { templateName } = await inquirer.prompt([
      {
        name: 'templateName',
        type: 'list',
        message: 'Select template:',
        choices: [...CreateCommand.TemplateActions],
      },
    ]);

    const templateAction = CreateCommand.TemplateActions.filter(
      ({ value }) => value === templateName
    )[0];

    this.command = templateAction.command;
    this.commandArgs = [...templateAction.args];
  }

  private processAppPath(appName: string) {
    this.commandArgs.push(appName);
  }

  private execute() {
    const proc = spawn.sync(this.command, this.commandArgs, {
      stdio: 'inherit',
    });

    if (proc.status !== 0) {
      throw Error(
        `\n\`${this.command} ${this.commandArgs.join(' ')}\` exited.`
      );
    }
  }
}

export default CreateCommand;
