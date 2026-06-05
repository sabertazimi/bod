import type { BaseCommand } from './commands/index.ts'
import { CreateCommand, InfoCommand } from './commands/index.ts'

const CommandFactory = new Map<string, BaseCommand>()

const createCommand = new CreateCommand()
const infoCommand = new InfoCommand()

CommandFactory.set(createCommand.getName(), createCommand)
CommandFactory.set(infoCommand.getName(), infoCommand)

export { CommandFactory }
