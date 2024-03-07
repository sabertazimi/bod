import fs from 'fs'
import path from 'path'
import { buildJson, chokidar, printer, rootPath } from './utils'

chokidar
  .watch([
    path.join(rootPath, 'public'),
    path.join(rootPath, 'src'),
    path.join(rootPath, '.env'),
    path.join(rootPath, 'tailwind.config.js'),
    path.join(rootPath, 'tsconfig.json'),
    path.join(rootPath, 'README.md'),
    path.join(rootPath, '.gitignore'),
    path.join(rootPath, 'package.json'),
  ])
  .on('change', file => {
    try {
      printer.info(`Rebuild ${file} ...`)

      if (path.resolve(file) === path.join(rootPath, '.gitignore')) {
        fs.copyFileSync(
          path.join(rootPath, '.gitignore'),
          path.join(rootPath, 'template/gitignore')
        )
      } else if (path.resolve(file) === path.join(rootPath, 'package.json')) {
        buildJson()
      } else {
        fs.copyFileSync(
          path.resolve(file),
          path.join('template', path.relative(rootPath, path.resolve(file)))
        )
      }
    } catch (err) {
      if (err instanceof Error) printer.error(err.message)
    }
  })
