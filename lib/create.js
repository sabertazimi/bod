const chalk = require('chalk');
const spawn = require('cross-spawn');
const inquirer = require('inquirer');

async function create(name, useTypeScript) {
  const command = 'npx';
  const commandArgs = ['create-react-app', name];

  // Exit Signal
  ['SIGINT', 'SIGTERM'].forEach(function (sig) {
    process.on(sig, function () {
      console.log(chalk.cyan('\nGracefully shutting down. Please wait...'));
      devServer.close();
      process.exit();
    });
  });

  // Template choice
  const { templateAction } = await inquirer.prompt([{
      name: 'templateAction',
      type: 'list',
      message: `Use ${chalk.cyan('React Only')} template or ${chalk.cyan('React Framework')} template:`,
      choices: [
        { name: 'Only', value: 'only' },
        { name: 'Framework', value: 'framework' },
      ]
  }]);

  if (!templateAction) {
    return;
  } else if (templateAction === 'framework') {
    commandArgs.push('--scripts-version', '@sabertazimi/react-scripts');
  }

  // TypeScript choice
  if (useTypeScript) {
    const proc = spawn.sync(command, commandArgs.concat('--typescript'), { stdio: 'inherit' });

    if (proc.status !== 0) {
      console.error(chalk.red(`\n\`${command} ${commandArgs.join(' ')}\` exited.`));
    }

    return;
  }

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

  // Start to install boilerplate
  const proc = spawn.sync(command, commandArgs, { stdio: 'inherit' });

  if (proc.status !== 0) {
    console.error(chalk.red(`\n\`${command} ${commandArgs.join(' ')}\` exited.`));
  }
}

module.exports = (name, useTypeScript) => {
  return create(name, useTypeScript).catch((err) => {
    console.error(err);
    console.error(chalk.red('\nBod create failed.'));
  });
};
