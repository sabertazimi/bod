import { SpawnSyncReturns } from 'child_process';
import spawn from 'cross-spawn';
import inquirer from 'inquirer';
import PromptUI from 'inquirer/lib/ui/prompt';
import path from 'path';
import rimraf from 'rimraf';
import CreateCommand, { Action } from './CreateCommand';

const appPath = path.join(process.cwd(), 'app');

describe('Create', () => {
  beforeEach(() => rimraf.sync(appPath));
  afterEach(() => rimraf.sync(appPath));

  test.each(CreateCommand.TemplateActions)(
    'should initialize app directory via template choice [$name]',
    async ({ value }) => {
      const mockPrompt = jest
        .spyOn(inquirer, 'prompt')
        .mockImplementation(() => {
          const promise = new Promise((resolve) => {
            resolve({ templateName: value });
          });
          return promise as Promise<unknown> & { ui: PromptUI };
        });
      const mockSpawn = jest.spyOn(spawn, 'sync').mockImplementation(() => {
        return {
          status: 0,
        } as SpawnSyncReturns<Buffer>;
      });

      const createCommand = new CreateCommand();
      await createCommand.run(appPath);
      const { command, args } = CreateCommand.TemplateActions.find(
        (action) => action.value === value
      ) as Action;
      expect(createCommand.getCommand()).toBe(command);
      expect(createCommand.getCommandArgs()).toHaveLength(args.length + 1);
      expect(createCommand.getCommandArgs()).toStrictEqual(
        args.concat(appPath)
      );

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
          const promise = new Promise((resolve) => {
            resolve({ templateName: value });
          });
          return promise as Promise<unknown> & { ui: PromptUI };
        });
      const mockSpawn = jest.spyOn(spawn, 'sync').mockImplementation(() => {
        return {
          status: 1,
        } as SpawnSyncReturns<Buffer>;
      });

      const createCommand = new CreateCommand();
      await expect(createCommand.run(appPath)).rejects.toThrowError();

      mockPrompt.mockRestore();
      mockSpawn.mockRestore();
    }
  );
});
