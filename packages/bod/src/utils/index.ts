import type { Answers } from './core'
import process from 'node:process'
import { color, printer } from './console'
import { inquirer, program } from './core'
import { envinfo, spawn } from './os'

function findPackageManager(): string {
  const userAgent = process.env.npm_config_user_agent ?? ''
  const packageManager = /pnpm/.test(userAgent)
    ? 'pnpm'
    : /yarn/.test(userAgent)
      ? 'yarn'
      : /bun/.test(userAgent)
        ? 'bun'
        : 'npm'
  return packageManager
}

export { color, envinfo, findPackageManager, inquirer, printer, program, spawn }
export type { Answers }
