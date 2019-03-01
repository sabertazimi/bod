const chalk = require('chalk');
const spawn = require('cross-spawn');
const inquirer = require('inquirer');

async function create(name) {
  const command = 'npx';
  const commandArgs = ['create-react-app', name];

  // exit signal
  ['SIGINT', 'SIGTERM'].forEach(function (sig) {
    process.on(sig, function () {
      console.log(chalk.cyan('\nGracefully shutting down. Please wait...'));
      devServer.close();
      process.exit();
    });
  });

  // template choice
  const { templateAction } = await inquirer.prompt([{
      name: 'templateAction',
      type: 'list',
      message: `Use ${chalk.cyan('Simple')} template or ${chalk.cyan('React Only')} template or ${chalk.cyan('React Framework')} template:`,
      choices: [
        { name: 'Simple', value: 'simple' },
        { name: 'React Only', value: 'only' },
        { name: 'React Framework', value: 'framework' },
      ]
  }]);

  if (!templateAction) {
    return;
  } else if (templateAction === 'simple') {
    // git clone simple boilerplate from GitHub
    const gitCommand = 'git';
    const gitArgs = ['clone', 'https://github.com/sabertazimi/boilerplate', name];
    const proc = spawn.sync(gitCommand, gitArgs, { stdio: 'inherit' });

    if (proc.status !== 0) {
      console.error(chalk.red(`\n\`${command} ${commandArgs.join(' ')}\` exited.`));
    }

    // no need for other processing
    return;
  } else if (templateAction === 'framework') {
    commandArgs.push('--scripts-version', '@sabertazimi/react-scripts');
  }

  // TypeScript choice
  const { tsAction } = await inquirer.prompt([{
      name: 'tsAction',
      type: 'list',
      message: `Use ${chalk.cyan('TypeScript')}:`,
      choices: [
        { name: 'Yes', value: 'yes' },
        { name: 'No', value: 'no' },
      ]
  }]);

  if (!tsAction) {
    return;
  } else if (tsAction === 'yes') {
    commandArgs.push('--typescript');
  }

  // start to install boilerplate
  const proc = spawn.sync(command, commandArgs, { stdio: 'inherit' });

  if (proc.status !== 0) {
    console.error(chalk.red(`\n\`${command} ${commandArgs.join(' ')}\` exited.`));
  }
}

module.exports = (name) => {
  return create(name).catch((err) => {
    console.error(err);
    console.error(chalk.red('\nBod create failed.'));
  });
};
