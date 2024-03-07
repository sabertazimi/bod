import { Command } from 'commander'
import inquirer from 'inquirer'

const program = new Command()
process.env.__BOD__ = '__BOD__'

export { inquirer, program }
