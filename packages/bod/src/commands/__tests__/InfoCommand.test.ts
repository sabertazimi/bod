import { describe, expect, it, vi } from 'vitest'
import { printer } from '../../utils/index.js'
import InfoCommand from '../InfoCommand.js'

describe('infoCommand', () => {
  it('should extends [BaseCommand] fields', () => {
    const infoCommand = new InfoCommand()
    expect(infoCommand.getName()).toBe('info')
    expect(infoCommand.getDescription()).toBe(
      'Print debugging information about your environment',
    )
    expect(infoCommand.getUsage()).toBe('info')
    expect(infoCommand.getAlias()).toBe('i')
  })

  it('should print environment variables', { timeout: 20000 }, async () => {
    const mockConsoleInfo = vi
      .spyOn(printer, 'info')
      .mockImplementation(vi.fn())

    const infoCommand = new InfoCommand()
    await expect(infoCommand.run()).resolves.toBeUndefined()
    expect(mockConsoleInfo).toHaveBeenCalledTimes(2)

    mockConsoleInfo.mockRestore()
  })
})
