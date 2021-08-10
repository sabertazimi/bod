import inquirer from 'inquirer';
import PromptUI from 'inquirer/lib/ui/prompt';
import rimraf from 'rimraf';
import CreateCommand from './CreateCommand';

const appPath = 'temp';

describe('Create', () => {
  test('should fetch boilerplate from GitHub when [simple] command)', () => {
    const mockPrompt = jest.spyOn(inquirer, 'prompt').mockImplementation(() => {
      const promise = new Promise((resolve) => {
        resolve({ templateAction: 'simple' });
      });
      return promise as Promise<unknown> & { ui: PromptUI };
    });

    rimraf.sync(appPath);
    const createCommand = new CreateCommand();
    createCommand.run(appPath);

    mockPrompt.mockRestore();
  });

  test.todo('should generate boilerplate via create-react-app');
});
