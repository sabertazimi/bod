const consola = require('consola');
const dotenv = require('dotenv');
const path = require('path');

consola.info('DotEnv setup loaded.');
dotenv.config({
  path: path.resolve(process.cwd(), '.test.env'),
});
