import spawn from 'cross-spawn';
import inquirer from 'inquirer';
import BaseCommand from './BaseCommand';

interface Action {
  name: string;
  value: string;
  command: string;
  args: string[];
}

class CreateCommand extends BaseCommand {
  static readonly TemplateActions: Action[] = [
    {
      name: 'Simple',
      value: 'simple',
      command: 'git',
      args: [
        'clone',
        '--depth=1',
        'https://github.com/sabertazimi/boilerplate',
      ],
    },
    {
      name: 'React JSX',
      value: 'only',
      command: 'npx',
      args: [
        'create-react-app',
        '--template',
        '@sabertazimi',
        '--scripts-version',
        '@sabertazimi/react-scripts',
      ],
    },
    {
      name: 'React TSX',
      value: 'only',
      command: 'npx',
      args: [
        'create-react-app',
        '--template',
        '@sabertazimi/typescript',
        '--scripts-version',
        '@sabertazimi/react-scripts',
      ],
    },
    {
      name: 'React Framework',
      value: 'framework',
      command: 'npx',
      args: [
        'create-react-app',
        '--template',
        'bod',
        '--scripts-version',
        '@sabertazimi/react-scripts',
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

  public getCommand(): string {
    return this.command;
  }

  public getCommandArgs(): string[] {
    return this.commandArgs;
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

    const { command, args } = CreateCommand.TemplateActions.find(
      ({ value }) => value === templateName
    ) as Action;

    this.command = command;
    this.commandArgs = [...args];
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

export type { Action };
export default CreateCommand;
