import type { PackageJson } from 'type-fest'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { CommandFactory } from './index'
import { color, printer, program } from './utils'

const packageJsonPath = path.join(__dirname, '../package.json')
const packageJson = JSON.parse(
  fs.readFileSync(packageJsonPath, { encoding: 'utf-8' }),
) as PackageJson

program.version(packageJson.version ?? '0.0.1', '-v, --version')

for (const command of CommandFactory.values()) {
  program
    .command(command.getUsage())
    .alias(command.getAlias())
    .description(command.getDescription())
    .action(async (appName: string) => {
      try {
        await command.run(appName)
      } catch (error) {
        printer.error(error)
        program.outputHelp()
      }
    })
}

// add some useful info on help
program.on('--help', () => {
  printer.log('')
  printer.info(
    `  Run ${color.cyan(
      `bod <command> --help`,
    )} for detailed usage of given command.`,
  )
  printer.log('')
})

program.showHelpAfterError()
program.parse(process.argv)
