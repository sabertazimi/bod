import { color, printer } from './console';
import { Command, inquirer, program } from './core';
import { isCI, rimraf } from './dev';
import { envinfo, spawn } from './os';

export {
  color,
  printer,
  Command,
  program,
  inquirer,
  envinfo,
  spawn,
  isCI,
  rimraf,
};
