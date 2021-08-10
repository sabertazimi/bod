import consola from 'consola';
import { CreateCommand } from './commands';

const createCommand = new CreateCommand();

const create = (appName: string): Promise<void> => {
  return createCommand.run(appName).catch((err) => {
    consola.error(err);
    consola.error('\nBod create failed.');
  });
};

export { create };
