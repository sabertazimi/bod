import * as utils from './utils';

const main = () => {
  const commitCount = utils
    .execPipe('git rev-list --count HEAD')
    .toString()
    .replace('\n', '');
  const commitHash = utils
    .execPipe('git rev-parse --short HEAD')
    .toString()
    .replace('\n', '');
  const canaryVersion = `0.0.0-${commitCount}-${commitHash}`;
  utils.exec(`npx lerna version ${canaryVersion} --exact --no-push --yes`);
  utils.exec(
    'npx lerna publish from-package --dist-tag canary --no-verify-access --ignore-scripts --yes'
  );
};

main();
