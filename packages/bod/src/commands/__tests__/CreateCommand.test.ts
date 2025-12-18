import type { SpawnSyncReturns } from 'node:child_process'
import type { Action } from '../CreateCommand.js'
import { isCI } from 'ci-info'
import { sync } from 'rimraf'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import * as utils from '../../utils/index.js'
import CreateCommand from '../CreateCommand.js'

const { spawn } = utils
const appPath = 'bod-unit-tests'

describe('createCommand', () => {
  beforeEach(() => sync(appPath))
  afterEach(() => sync(appPath))

  it('should extends [BaseCommand] fields', () => {
    const createCommand = new CreateCommand()
    expect(createCommand.getName()).toBe('create')
    expect(createCommand.getDescription()).toBe(
      'Create a new project powered by @sabertazimi/react-scripts',
    )
    expect(createCommand.getUsage()).toBe('create <appName>')
    expect(createCommand.getAlias()).toBe('c')
  })

  it.each(CreateCommand.TemplateActions)(
    'should get correct command/args and invoke [select] via template choice [$name]',
    async ({ value }) => {
      const mockSelect = vi
        .spyOn(utils, 'select')
        .mockImplementation(async () => value)
      const mockSpawn = vi.spyOn(spawn, 'sync').mockImplementation(() => {
        return {
          status: 0,
        } as SpawnSyncReturns<NonSharedBuffer>
      })
      const additionalOptions
        = value === 'vue'
          ? ['--default']
          : value === 'vite'
            ? ['--template', 'vue']
            : []

      const createCommand = new CreateCommand()
      await expect(
        createCommand.run(appPath, additionalOptions),
      ).resolves.toBeUndefined()
      const { command, args, postCommands }
        = CreateCommand.TemplateActions.find(
          action => action.value === value,
        ) as Action
      expect(createCommand.getCommand()).toBe(command)
      expect(createCommand.getCommandArgs()).toHaveLength(args.length + 1)
      expect(createCommand.getCommandArgs()).toStrictEqual(args.concat(appPath))
      expect(mockSelect).toHaveBeenCalledTimes(1)
      expect(mockSpawn).toHaveBeenCalledTimes(postCommands.length + 1)

      mockSelect.mockRestore()
      mockSpawn.mockRestore()
    },
  )

  it.each(CreateCommand.TemplateActions)(
    'should throw error when exited with non zero via template choice [$name]',
    async ({ value }) => {
      const mockSelect = vi
        .spyOn(utils, 'select')
        .mockImplementation(async () => value)
      const mockSpawn = vi.spyOn(spawn, 'sync').mockImplementation(() => {
        return {
          status: 1,
        } as SpawnSyncReturns<NonSharedBuffer>
      })
      const additionalOptions
        = value === 'vue'
          ? ['--default']
          : value === 'vite'
            ? ['--template', 'vue']
            : []

      const createCommand = new CreateCommand()
      await expect(createCommand.run(appPath, additionalOptions)).rejects.toThrow()
      expect(mockSelect).toHaveBeenCalledTimes(1)
      expect(mockSpawn).toHaveBeenCalledTimes(1)

      mockSelect.mockRestore()
      mockSpawn.mockRestore()
    },
  )

  it.each(CreateCommand.TemplateActions)(
    'should initialize app directory via template choice [$name]',
    { timeout: 120_000 },
    async ({ value }) => {
      const mockSelect = vi
        .spyOn(utils, 'select')
        .mockImplementation(async () => value)
      const additionalOptions
        = value === 'vue'
          ? ['--default']
          : value === 'vite'
            ? ['--template', 'vue']
            : []
      const createCommand = new CreateCommand()

      if (isCI) {
        await expect(createCommand.run(appPath, additionalOptions)).resolves.toBeUndefined()
        expect(mockSelect).toHaveBeenCalledTimes(1)
      }

      mockSelect.mockRestore()
    },
  )
})
