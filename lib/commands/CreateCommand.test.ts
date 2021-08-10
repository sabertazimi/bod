import inquirer from 'inquirer';
import PromptUI from 'inquirer/lib/ui/prompt';
import rimraf from 'rimraf';
import CreateCommand from './CreateCommand';

const appPath = 'temp';

describe('Create', () => {
  test.each(CreateCommand.TemplateActions)(
    'should initialize app directory according to template choice [$name]',
    ({ value }) => {
      const mockPrompt = jest
        .spyOn(inquirer, 'prompt')
        .mockImplementation(() => {
          const promise = new Promise((resolve) => {
            resolve({ templateAction: value });
          });
          return promise as Promise<unknown> & { ui: PromptUI };
        });

      rimraf.sync(appPath);
      const createCommand = new CreateCommand();
      createCommand.run(appPath);

      mockPrompt.mockRestore();
    }
  );
});
