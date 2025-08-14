import type { Buffer } from 'node:buffer'
import cp from 'node:child_process'
import process from 'node:process'
import chalk from 'chalk'
import { isCI } from 'ci-info'
import consola from 'consola'
import semver from 'semver'
import { fetch } from 'undici'

function log(log: string): void {
  consola.log(log)
}

function info(info: string): void {
  consola.info(chalk.blue(info))
}

function success(success: string): void {
  consola.success(chalk.green(success))
}

function error(error: string | Error): void {
  consola.error(error)
}

function cmd(cmd: string): void {
  console.info(`    ${chalk.bgGreen.black('[exec]')}: ${cmd}`)
}

function exec(command: string, cwd?: string): Buffer {
  cmd(command)
  return cp.execSync(command, {
    stdio: 'inherit',
    cwd: cwd ?? process.cwd(),
  })
}

function execPipe(command: string, cwd?: string): Buffer {
  cmd(command)
  return cp.execSync(command, {
    stdio: 'pipe',
    cwd: cwd ?? process.cwd(),
  })
}

function checkGitStatus(): void {
  info('Check git status ...')
  const gitStatus = execPipe('git status --porcelain').toString()

  if (gitStatus.trim() !== '') {
    info('Please commit your changes before running this script!')
    info('Exiting because `git status` is not empty:')
    log('')
    log(gitStatus)
    log('')
    process.exit(1)
  }
}

export {
  checkGitStatus,
  cmd,
  chalk as color,
  error,
  exec,
  execPipe,
  fetch,
  info,
  isCI,
  log,
  semver,
  success,
}
