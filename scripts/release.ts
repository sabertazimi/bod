import * as utils from './utils';

const main = () => {
  utils.info(`Working in directory ${process.cwd()}.`);
  const version = utils
    .execPipe('npm run release:dry-run')
    .toString()
    .replace('/[^=].*\n', '');
  console.info(version);
};

main();
