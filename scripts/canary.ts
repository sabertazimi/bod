import * as utils from './utils'

function main() {
  utils.checkGitStatus()
  const commitCount = utils
    .execPipe('git rev-list --count HEAD')
    .toString()
    .replace('\n', '')
  const canaryVersion = `0.0.0-${commitCount}`
  utils.exec(`pnpm lerna version ${canaryVersion} --exact --no-push --yes`)
  utils.exec(
    'pnpm lerna publish from-package --dist-tag canary --no-verify-access --ignore-scripts --yes',
  )
}

main()
