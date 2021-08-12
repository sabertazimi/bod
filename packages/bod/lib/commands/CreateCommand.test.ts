import { SpawnSyncReturns } from 'child_process';
import { isCI } from 'ci-info';
import spawn from 'cross-spawn';
import inquirer from 'inquirer';
import path from 'path';
import PromptUI from 'inquirer/lib/ui/prompt';
import rimraf from 'rimraf';
import CreateCommand from './CreateCommand';

const appPath = path.join(process.cwd(), 'temp');

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

      const createCommand = new CreateCommand();
      if (isCI) {
        await createCommand.run(appPath);
      }

      mockPrompt.mockRestore();
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
