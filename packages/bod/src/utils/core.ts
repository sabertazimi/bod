import process from 'node:process'
import { select } from '@inquirer/prompts'
import { Command } from 'commander'

const program = new Command()
process.env.__BOD__ = '__BOD__'

export { program, select }
