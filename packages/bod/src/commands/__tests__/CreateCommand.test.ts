import type { SpawnSyncReturns } from 'node:child_process';
import path from 'node:path';
import { isCI } from 'ci-info';
import { sync } from 'rimraf';
import { inquirer, spawn } from '../../utils';
import type { Action } from '../CreateCommand';
import CreateCommand from '../CreateCommand';

const appPath = path.join(process.cwd(), '..', 'bod-unit-tests');

describe('CreateCommand', () => {
  beforeEach(() => sync(appPath));
  afterEach(() => sync(appPath));

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

          return promise as Promise<any> & { ui: any };
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

          return promise as Promise<any> & { ui: any };
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

          return promise as Promise<any> & { ui: any };
        });

      const createCommand = new CreateCommand();

      if (isCI) {
        // eslint-disable-next-line jest/no-conditional-expect
        await expect(createCommand.run(appPath)).resolves.toBeUndefined();
        // eslint-disable-next-line jest/no-conditional-expect
        expect(mockPrompt).toBeCalledTimes(1);
      }

      mockPrompt.mockRestore();
    }
  );
});
