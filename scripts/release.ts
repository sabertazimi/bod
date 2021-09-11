import * as utils from './utils';

const main = () => {
  utils.checkGitStatus();
  utils.info(`Working in directory ${process.cwd()}.`);
  const isPush = process.argv.includes('-p') || process.argv.includes('--push');
  const versionMatch = utils
    .execPipe(
      'npx lerna version --force-publish --no-commit-hooks --no-git-tag-version --no-push --yes'
    )
    .toString()
    .split('\n')
    .join('')
    .match(/=>\s\d+\.\d+\.\d+/i);

  if (versionMatch) {
    const version = utils.semver.clean(versionMatch[0].replace('=> ', ''));
    utils.exec('npm i');
    utils.exec('git add .');
    utils.exec(`git commit -a -m "chore(release): ${version}"`);
    utils.exec(`git tag v${version} -s -m "v${version}"`);

    if (isPush) {
      utils.exec('git push --follow-tags');
    } else {
      utils.info('Run `git push --follow-tags origin main` to publish.');
    }
  }
};

main();
