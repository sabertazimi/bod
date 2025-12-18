import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { BaseCommand, CreateCommand, InfoCommand } from '../index.js'

describe('commands', () => {
  let commands: Set<BaseCommand>
  let counts: Map<string, number>

  beforeEach(() => {
    commands = new Set<BaseCommand>([
      new BaseCommand({
        name: 'base',
        description: 'Base command description',
        usage: 'base',
      }),
      new CreateCommand(),
      new InfoCommand(),
    ])
    counts = new Map<string, number>()
  })

  afterEach(() => {
    commands.clear()
    counts.clear()
  })

  it('should has unique name', () => {
    for (const command of commands) {
      const name = command.getName()
      if (counts.has(name))
        counts.set(name, (counts.get(name) as number) + 1)
      else counts.set(name, 1)
      expect(command).toBeDefined()
    }

    for (const [name, count] of counts) {
      expect(name).toBeTruthy()
      expect(count).toBe(1)
    }
  })

  it('should has unique usage', () => {
    for (const command of commands) {
      const usage = command.getUsage()
      if (counts.has(usage))
        counts.set(usage, (counts.get(usage) as number) + 1)
      else counts.set(usage, 1)
      expect(command).toBeDefined()
    }

    for (const [usage, count] of counts) {
      expect(usage).toBeTruthy()
      expect(count).toBe(1)
    }
  })

  it('should has unique alias', () => {
    for (const command of commands) {
      const alias = command.getAlias()
      if (counts.has(alias))
        counts.set(alias, (counts.get(alias) as number) + 1)
      else counts.set(alias, 1)
      expect(command).toBeDefined()
    }

    for (const [alias, count] of counts) {
      expect(alias).toBeTruthy()
      expect(count).toBe(1)
    }
  })
})
