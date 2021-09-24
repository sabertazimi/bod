import { inquirer, spawn } from '../utils';
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
      value: 'jsx',
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
      value: 'tsx',
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
      description: 'Create a new project powered by @sabertazimi/react-scripts',
      usage: 'create <appName>',
    });
  }

  public async run(appName: string): Promise<void> {
    await this.processTemplateAction();
    this.resolveAppPath(appName);
    this.execute();
  }

  public getCommand(): string {
    return this.command;
  }

  public getCommandArgs(): string[] {
    return this.commandArgs;
  }

  private async processTemplateAction(): Promise<void> {
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

  private resolveAppPath(appName: string): void {
    this.commandArgs.push(appName);
  }

  private execute(): void {
    const proc = spawn.sync(this.command, this.commandArgs, {
      stdio: 'inherit',
    });

    if (proc.status !== 0) {
      throw new Error(
        `\n\`${this.command} ${this.commandArgs.join(' ')}\` exited.`
      );
    }
  }
}

export type { Action };
export default CreateCommand;
