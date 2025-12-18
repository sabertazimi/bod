import { describe, expect, it } from 'vitest'
import BaseCommand from '../BaseCommand.js'

const options = {
  name: 'base',
  description: 'Base command description',
  usage: 'base',
  alias: 'c',
}

describe('baseCommand', () => {
  it('should have [name] field', () => {
    const baseCommand = new BaseCommand(options)
    expect(baseCommand.getName()).toBe(options.name)
  })

  it('should have [description] field', () => {
    const baseCommand = new BaseCommand(options)
    expect(baseCommand.getDescription()).toBe(options.description)
  })

  it('should have [usage] field', () => {
    const baseCommand = new BaseCommand(options)
    expect(baseCommand.getUsage()).toBe(options.usage)
  })

  it('should have [alias] field', () => {
    const baseCommand = new BaseCommand(options)
    expect(baseCommand.getAlias()).toBe(options.alias)
  })

  it('should set [alias] field to first character of [name] field by default', () => {
    const baseCommand = new BaseCommand({ ...options, alias: undefined })
    expect(baseCommand.getAlias()).toBe(options.name[0])
  })

  it('should have [run] method', async () => {
    const baseCommand = new BaseCommand(options)
    await expect(baseCommand.run()).resolves.toBeUndefined()
  })
})
