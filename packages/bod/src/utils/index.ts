import process from 'node:process'
import { color, printer } from './console.js'
import { program, select } from './core.js'
import { envinfo, spawn } from './os.js'

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

export { color, envinfo, findPackageManager, printer, program, select, spawn }
