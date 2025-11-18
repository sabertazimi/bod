import type { Buffer } from 'node:buffer'
import type { SpawnSyncReturns } from 'node:child_process'
import type { Answers } from '../../utils'
import type { Action } from '../CreateCommand'
import { isCI } from 'ci-info'
import { sync } from 'rimraf'
import { inquirer, spawn } from '../../utils'
import CreateCommand from '../CreateCommand'

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
    'should get correct command/args and invoke [inquirer] via template choice [$name]',
    async ({ value }) => {
      const mockPrompt = jest
        .spyOn(inquirer, 'prompt')
        .mockImplementation(async () => {
          const promise = new Promise((resolve) => {
            resolve({ templateName: value })
          })

          return promise as Promise<Answers>
        })
      const mockSpawn = jest.spyOn(spawn, 'sync').mockImplementation(() => {
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
      expect(mockPrompt).toHaveBeenCalledTimes(1)
      expect(mockSpawn).toHaveBeenCalledTimes(postCommands.length + 1)

      mockPrompt.mockRestore()
      mockSpawn.mockRestore()
    },
  )

  it.each(CreateCommand.TemplateActions)(
    'should throw error when exited with non zero via template choice [$name]',
    async ({ value }) => {
      const mockPrompt = jest
        .spyOn(inquirer, 'prompt')
        .mockImplementation(async () => {
          const promise = new Promise((resolve) => {
            resolve({ templateName: value })
          })

          return promise as Promise<Answers>
        })
      const mockSpawn = jest.spyOn(spawn, 'sync').mockImplementation(() => {
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
      expect(mockPrompt).toHaveBeenCalledTimes(1)
      expect(mockSpawn).toHaveBeenCalledTimes(1)

      mockPrompt.mockRestore()
      mockSpawn.mockRestore()
    },
  )

  it.each(CreateCommand.TemplateActions)(
    'should initialize app directory via template choice [$name]',
    async ({ value }) => {
      const mockPrompt = jest
        .spyOn(inquirer, 'prompt')
        .mockImplementation(async () => {
          const promise = new Promise((resolve) => {
            resolve({ templateName: value })
          })

          return promise as Promise<Answers>
        })
      const additionalOptions
        = value === 'vue'
          ? ['--default']
          : value === 'vite'
            ? ['--template', 'vue']
            : []
      const createCommand = new CreateCommand()

      if (isCI) {
        await expect(createCommand.run(appPath, additionalOptions)).resolves.toBeUndefined()
        expect(mockPrompt).toHaveBeenCalledTimes(1)
      }

      mockPrompt.mockRestore()
    },
  )
})
