import path from 'path';
import dotenv from 'dotenv';
import consola from 'consola';

consola.info('DotEnv setup loaded.');
dotenv.config({
  path: path.resolve(process.cwd(), '.test.env'),
});
