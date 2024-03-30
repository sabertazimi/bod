import cp from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import chalk from 'chalk'
import chokidar from 'chokidar'
import consola from 'consola'

const rootPath = path.join(__dirname, '..')

function exec(cmd: string) {
  console.info(`    ${chalk.bgGreen.black('[exec]')}: ${cmd}`)
  return cp.execSync(cmd, {
    shell: '/usr/bin/bash',
    stdio: 'inherit',
    cwd: rootPath,
  })
}

function buildTemplate() {
  exec('rm -rf template')
  exec('mkdir -p template')
  exec('cp -fr public template/')
  exec('cp -fr src template/')
  exec('cp -fr .env template/')
  exec('cp -fr eslint.config.mjs template/')
  exec('cp -fr tailwind.config.js template/')
  exec('cp -fr tsconfig.json template/')
  exec('cp -fr README.md template/')
  exec('cp -fr .gitignore template/gitignore')
}

function buildJson() {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(rootPath, 'package.json'), 'utf8'),
  )

  const ignoreDeps = [
    '@sabertazimi/react-scripts',
    'eslint-config-bod',
    'react-scripts',
    'react',
    'react-dom',
    'stylelint-config-bod',
  ]

  // Remove ignored dependencies
  const appDeps = Object.keys(packageJson.dependencies)
    .filter((dep: string) => !ignoreDeps.includes(dep))
    .reduce((deps: { [key: string]: string }, dep: string) => {
      deps[dep] = packageJson.dependencies[dep]
      return deps
    }, {})

  // Remove ignored devDependencies
  const appDevDeps = Object.keys(packageJson.devDependencies)
    .filter((dep: string) => !ignoreDeps.includes(dep))
    .reduce((deps: { [key: string]: string }, dep: string) => {
      deps[dep] = packageJson.devDependencies[dep]
      return deps
    }, {})

  // Keep 'template:xxx' scripts
  const appScripts = Object.keys(packageJson.scripts)
    .filter((script: string) => script.startsWith('template:'))
    .reduce((scripts: { [key: string]: string }, script: string) => {
      const scriptName = script.slice(script.indexOf(':') + 1)
      scripts[scriptName] = packageJson.scripts[script]
      return scripts
    }, {})

  const appPackageJson = {
    package: {
      ...packageJson,
      dependencies: { ...appDeps },
      devDependencies: { ...appDevDeps },
      scripts: { ...appScripts },
    },
  }

  // Write updated package.json
  fs.writeFileSync(
    path.join(rootPath, 'template.json'),
    JSON.stringify(appPackageJson, null, 2),
  )
}

export { chokidar, consola as printer, rootPath, buildTemplate, buildJson }
