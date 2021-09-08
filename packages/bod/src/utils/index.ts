import { color, printer } from './console';
import { inquirer, program } from './core';
import { isCI, rimraf } from './dev';
import { envinfo, spawn } from './os';

export { color, printer, inquirer, program, envinfo, spawn, isCI, rimraf };
