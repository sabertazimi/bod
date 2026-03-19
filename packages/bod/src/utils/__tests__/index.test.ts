import process from 'node:process'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { color, findPackageManager, program } from '../index.js'

describe('utils', () => {
  const originalUserAgent = process.env.npm_config_user_agent

  afterEach(() => {
    process.env.npm_config_user_agent = originalUserAgent
  })

  it('should execute chalk correctly', () => {
    expect(color('raw text')).toStrictEqual('raw text')
  })

  it('should execute program correctly', () => {
    const mockParse = vi.spyOn(program, 'parse').mockImplementation(vi.fn())
    expect(process.env.__BOD__).toStrictEqual('__BOD__')
    mockParse.mockRestore()
  })

  it.each([
    ['pnpm/8.15.0', 'pnpm'],
    ['yarn/1.22.22', 'yarn'],
    ['yarn/4.2.0', 'yarn'],
    ['bun/0.1.0', 'bun'],
    ['npm/10.0.0', 'npm'],
    [undefined, 'npm'],
  ])('should return %s for user agent %s', (userAgent, packageManager) => {
    process.env.npm_config_user_agent = userAgent
    expect(findPackageManager()).toStrictEqual(packageManager)
  })
})
