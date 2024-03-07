import { printer } from '../../utils'
import InfoCommand from '../InfoCommand'

describe('InfoCommand', () => {
  jest.setTimeout(20000)

  test('should extends [BaseCommand] fields', () => {
    const infoCommand = new InfoCommand()
    expect(infoCommand.getName()).toBe('info')
    expect(infoCommand.getDescription()).toBe(
      'Print debugging information about your environment'
    )
    expect(infoCommand.getUsage()).toBe('info')
    expect(infoCommand.getAlias()).toBe('i')
  })

  test('should print environment variables', async () => {
    const mockConsoleInfo = jest
      .spyOn(printer, 'info')
      .mockImplementation(jest.fn())

    const infoCommand = new InfoCommand()
    await expect(infoCommand.run()).resolves.toBeUndefined()
    expect(mockConsoleInfo).toHaveBeenCalledTimes(2)

    mockConsoleInfo.mockRestore()
  })
})
