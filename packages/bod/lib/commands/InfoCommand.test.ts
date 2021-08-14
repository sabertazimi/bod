import InfoCommand from './InfoCommand';
import consola from 'consola';

describe('InfoCommand', () => {
  test('should print environment variables', async () => {
    const mockConsolaInfo = jest
      .spyOn(consola, 'info')
      .mockImplementation(() => {
        return;
      });

    const infoCommand = new InfoCommand();
    await expect(infoCommand.run()).resolves.toBeUndefined();

    mockConsolaInfo.mockRestore();
  });
});
