import process from 'node:process'
import { color, printer } from './console.js'
import { program, select } from './core.js'
import { envinfo, spawn } from './os.js'

const PNPM_USER_AGENT_RE = /pnpm/
const YARN_USER_AGENT_RE = /yarn/
const BUN_USER_AGENT_RE = /bun/

function findPackageManager(): string {
  const userAgent = process.env.npm_config_user_agent ?? ''
  const packageManager = PNPM_USER_AGENT_RE.test(userAgent)
    ? 'pnpm'
    : YARN_USER_AGENT_RE.test(userAgent)
      ? 'yarn'
      : BUN_USER_AGENT_RE.test(userAgent)
        ? 'bun'
        : 'npm'
  return packageManager
}

export { color, envinfo, findPackageManager, printer, program, select, spawn }
