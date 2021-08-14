import InfoCommand from './InfoCommand';
import consola from 'consola';

describe('InfoCommand', () => {
  test('should extends [BaseCommand] fields', () => {
    const infoCommand = new InfoCommand();
    expect(infoCommand.getName()).toBe('info');
    expect(infoCommand.getDescription()).toBe(
      'Print debugging information about your environment'
    );
    expect(infoCommand.getUsage()).toBe('info');
  });

  test('should print environment variables', async () => {
    const mockConsolaInfo = jest
      .spyOn(consola, 'info')
      .mockImplementation(() => {
        return;
      });

    const infoCommand = new InfoCommand();
    await expect(infoCommand.run()).resolves.toBeUndefined();
    expect(mockConsolaInfo).toHaveBeenCalledTimes(2);

    mockConsolaInfo.mockRestore();
  });
});
