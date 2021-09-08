import { SpawnSyncReturns } from 'child_process';
import path from 'path';
import { inquirer, isCI, rimraf, spawn } from '../../utils';
import CreateCommand, { Action } from '../CreateCommand';

const appPath = path.join(process.cwd(), 'temp');

describe('CreateCommand', () => {
  beforeEach(() => rimraf.sync(appPath));
  afterEach(() => rimraf.sync(appPath));

  test('should extends [BaseCommand] fields', () => {
    const createCommand = new CreateCommand();
    expect(createCommand.getName()).toBe('create');
    expect(createCommand.getDescription()).toBe(
      'Create a new project powered by @sabertazimi/react-scripts'
    );
    expect(createCommand.getUsage()).toBe('create <appName>');
    expect(createCommand.getAlias()).toBe('c');
  });

  test.each(CreateCommand.TemplateActions)(
    'should get correct command/args and invoke [inquirer] via template choice [$name]',
    async ({ value }) => {
      const mockPrompt = jest
        .spyOn(inquirer, 'prompt')
        .mockImplementation(() => {
          const promise = new Promise(resolve => {
            resolve({ templateName: value });
          });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return promise as Promise<unknown> & { ui: any };
        });
      const mockSpawn = jest.spyOn(spawn, 'sync').mockImplementation(() => {
        return {
          status: 0,
        } as SpawnSyncReturns<Buffer>;
      });

      const createCommand = new CreateCommand();
      await expect(createCommand.run(appPath)).resolves.toBeUndefined();
      const { command, args } = CreateCommand.TemplateActions.find(
        action => action.value === value
      ) as Action;
      expect(createCommand.getCommand()).toBe(command);
      expect(createCommand.getCommandArgs()).toHaveLength(args.length + 1);
      expect(createCommand.getCommandArgs()).toStrictEqual(
        args.concat(appPath)
      );
      expect(mockPrompt).toBeCalledTimes(1);
      expect(mockSpawn).toBeCalledTimes(1);

      mockPrompt.mockRestore();
      mockSpawn.mockRestore();
    }
  );

  test.each(CreateCommand.TemplateActions)(
    'should throw error when exited with non zero via template choice [$name]',
    async ({ value }) => {
      const mockPrompt = jest
        .spyOn(inquirer, 'prompt')
        .mockImplementation(() => {
          const promise = new Promise(resolve => {
            resolve({ templateName: value });
          });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return promise as Promise<unknown> & { ui: any };
        });
      const mockSpawn = jest.spyOn(spawn, 'sync').mockImplementation(() => {
        return {
          status: 1,
        } as SpawnSyncReturns<Buffer>;
      });

      const createCommand = new CreateCommand();
      await expect(createCommand.run(appPath)).rejects.toThrowError();
      expect(mockPrompt).toBeCalledTimes(1);
      expect(mockSpawn).toBeCalledTimes(1);

      mockPrompt.mockRestore();
      mockSpawn.mockRestore();
    }
  );

  test.each(CreateCommand.TemplateActions)(
    'should initialize app directory via template choice [$name]',
    async ({ value }) => {
      const mockPrompt = jest
        .spyOn(inquirer, 'prompt')
        .mockImplementation(() => {
          const promise = new Promise(resolve => {
            resolve({ templateName: value });
          });
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return promise as Promise<unknown> & { ui: any };
        });

      const createCommand = new CreateCommand();

      if (isCI) {
        await expect(createCommand.run(appPath)).resolves.toBeUndefined();
        expect(mockPrompt).toBeCalledTimes(1);
      }

      mockPrompt.mockRestore();
    }
  );
});
