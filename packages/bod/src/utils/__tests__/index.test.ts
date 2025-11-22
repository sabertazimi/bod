import process from 'node:process'
import { color, findPackageManager, program } from '../index.js'

describe('utils', () => {
  it('should execute chalk correctly', () => {
    expect(color('raw text')).toStrictEqual('raw text')
  })

  it('should execute program correctly', () => {
    const mockParse = jest.spyOn(program, 'parse').mockImplementation(jest.fn())
    expect(process.env.__BOD__).toStrictEqual('__BOD__')
    mockParse.mockRestore()
  })

  it('should return correct package manager', () => {
    process.env.npm_config_user_agent = 'pnpm/8.15.0'
    expect(findPackageManager()).toStrictEqual('pnpm')

    process.env.npm_config_user_agent = 'yarn/1.22.22'
    expect(findPackageManager()).toStrictEqual('yarn')

    process.env.npm_config_user_agent = 'yarn/4.2.0'
    expect(findPackageManager()).toStrictEqual('yarn')

    process.env.npm_config_user_agent = 'bun/0.1.0'
    expect(findPackageManager()).toStrictEqual('bun')

    process.env.npm_config_user_agent = 'npm/10.0.0'
    expect(findPackageManager()).toStrictEqual('npm')
  })
})
