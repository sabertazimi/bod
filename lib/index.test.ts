import { CreateCommand } from './index';
import inquirer from 'inquirer';
import PromptUI from 'inquirer/lib/ui/prompt';

const appName = '.temp';

describe('Create', () => {
  test('should fetch boilerplate from GitHub when [simple] command)', () => {
    const mockPrompt = jest.spyOn(inquirer, 'prompt').mockImplementation(() => {
      const promise = new Promise((resolve) => {
        resolve({ templateAction: 'simple' });
      });
      return promise as Promise<unknown> & { ui: PromptUI };
    });

    const createCommand = new CreateCommand();
    createCommand.run(appName);

    mockPrompt.mockRestore();
  });

  test.todo('should generate boilerplate via create-react-app');
});
