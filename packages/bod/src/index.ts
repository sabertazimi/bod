import type { BaseCommand } from './commands';
import { CreateCommand, InfoCommand } from './commands';

const CommandFactory = new Map<string, BaseCommand>();

const createCommand = new CreateCommand();
const infoCommand = new InfoCommand();

CommandFactory.set(createCommand.getName(), createCommand);
CommandFactory.set(infoCommand.getName(), infoCommand);

export { CommandFactory };
