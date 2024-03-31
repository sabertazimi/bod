import { inquirer, spawn } from '../utils'
import BaseCommand from './BaseCommand'

interface Action {
  name: string
  value: string
  command: string
  args: string[]
  postCommands: {
    command: string
    args: string[]
  }[]
}

class CreateCommand extends BaseCommand {
  static readonly TemplateActions: Action[] = [
    {
      name: 'Simple',
      value: 'simple',
      command: 'git',
      args: ['clone', '--depth=1', 'https://github.com/sabertazimi/bod'],
      postCommands: [
        {
          command: 'mv',
          args: ['appPath', 'appPath.bak'],
        },
        {
          command: 'mv',
          args: ['appPath.bak/packages/webpack-template', 'appPath'],
        },
        {
          command: 'rm',
          args: ['-rf', 'appPath.bak'],
        },
      ],
    },
    {
      name: 'React JSX',
      value: 'jsx',
      command: 'npx',
      args: [
        'create-react-app@latest',
        '--template',
        '@sabertazimi/cra-template@latest',
        '--scripts-version',
        '@sabertazimi/react-scripts@latest',
      ],
      postCommands: [],
    },
    {
      name: 'React TSX',
      value: 'tsx',
      command: 'npx',
      args: [
        'create-react-app@latest',
        '--template',
        '@sabertazimi/cra-template-typescript@latest',
        '--scripts-version',
        '@sabertazimi/react-scripts@latest',
      ],
      postCommands: [],
    },
    {
      name: 'React Framework',
      value: 'framework',
      command: 'npx',
      args: [
        'create-react-app@latest',
        '--template',
        'cra-template-bod@latest',
        '--scripts-version',
        '@sabertazimi/react-scripts@latest',
      ],
      postCommands: [],
    },
  ]

  private command = 'npx'
  private commandArgs: string[] = []
  private postCommands: Action['postCommands'] = []

  constructor() {
    super({
      name: 'create',
      description: 'Create a new project powered by @sabertazimi/react-scripts',
      usage: 'create <appName>',
    })
  }

  public async run(appName: string): Promise<void> {
    await this.processTemplateAction()
    this.resolveAppPath(appName)
    this.execute()
  }

  public getCommand(): string {
    return this.command
  }

  public getCommandArgs(): string[] {
    return this.commandArgs
  }

  private async processTemplateAction(): Promise<void> {
    const { templateName } = await inquirer.prompt<{ [key: string]: string }>([
      {
        name: 'templateName',
        type: 'list',
        message: 'Select template:',
        choices: [...CreateCommand.TemplateActions],
      },
    ])

    const { command, args, postCommands } = CreateCommand.TemplateActions.find(
      ({ value }: Action) => value === templateName,
    ) as Action

    this.command = command
    this.commandArgs = [...args]
    this.postCommands = postCommands
  }

  private resolveAppPath(appName: string): void {
    this.commandArgs.push(appName)

    // Resolve all 'appPath' in postCommands.
    CreateCommand.TemplateActions.forEach(({ postCommands }: Action) => {
      for (const postCommand of postCommands) {
        postCommand.args = postCommand.args.map((arg) => {
          return arg.replace('appPath', appName)
        })
      }
    })
  }

  private execute(): void {
    const proc = spawn.sync(this.command, this.commandArgs, {
      stdio: 'inherit',
    })

    if (proc.status !== 0) {
      throw new Error(
        `\n\`${this.command} ${this.commandArgs.join(' ')}\` exited.`,
      )
    }

    for (const postCommand of this.postCommands) {
      const proc = spawn.sync(postCommand.command, postCommand.args, {
        stdio: 'inherit',
      })

      if (proc.status !== 0) {
        throw new Error(
          `\n\`${postCommand.command} ${postCommand.args.join(' ')}\` exited.`,
        )
      }
    }
  }
}

export type { Action }
export default CreateCommand
