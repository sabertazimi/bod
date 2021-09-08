import { color, printer } from './console';
import { Command, inquirer, program, PromptUI } from './core';
import { isCI, rimraf } from './dev';
import { envinfo, spawn } from './os';

export {
  color,
  printer,
  Command,
  program,
  PromptUI,
  inquirer,
  envinfo,
  spawn,
  isCI,
  rimraf,
};
