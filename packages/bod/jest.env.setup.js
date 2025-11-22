import path from 'node:path'
import process from 'node:process'
import dotenv from 'dotenv'

dotenv.config({
  path: path.resolve(process.cwd(), '.test.env'),
})
