import type { BaseCommand } from './commands/index.js'
import { CreateCommand, InfoCommand } from './commands/index.js'

const CommandFactory = new Map<string, BaseCommand>()

const createCommand = new CreateCommand()
const infoCommand = new InfoCommand()

CommandFactory.set(createCommand.getName(), createCommand)
CommandFactory.set(infoCommand.getName(), infoCommand)

export { CommandFactory }
