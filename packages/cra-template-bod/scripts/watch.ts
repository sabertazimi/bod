import chokidar from 'chokidar';
import consola from 'consola';
import path from 'path';
import { buildJson, exec, rootPath } from './utils';

chokidar
  .watch([
    path.join(rootPath, 'public'),
    path.join(rootPath, 'src'),
    path.join(rootPath, 'tsconfig.json'),
    path.join(rootPath, 'README.md'),
    path.join(rootPath, '.gitignore'),
    path.join(rootPath, 'package.json'),
  ])
  .on('change', file => {
    try {
      if (path.resolve(file) === path.join(rootPath, '.gitignore')) {
        exec('cp -fr .gitignore template/gitignore');
      } else if (path.resolve(file) === path.join(rootPath, 'package.json')) {
        buildJson();
      } else {
        exec(
          `cp -fr ${path.resolve(file)} ${path.join(
            'template',
            path.relative(rootPath, path.resolve(file))
          )}`
        );
      }
    } catch (err) {
      if (err instanceof Error) consola.error(err.message);
    }
  });
