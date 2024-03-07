const path = require('node:path')
const dotenv = require('dotenv')

dotenv.config({
  path: path.resolve(process.cwd(), '.test.env'),
})
