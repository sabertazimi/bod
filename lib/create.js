const chalk = require('chalk');
const spawn = require('cross-spawn');
const inquirer = require('inquirer');

async function create(name, useTypeScript) {
  const command = 'npx';
  const commandArgs = ['create-react-app', name, '--scripts-version', '@sabertazimi/react-scripts'];

  ['SIGINT', 'SIGTERM'].forEach(function (sig) {
    process.on(sig, function () {
      console.log(chalk.cyan('\nGracefully shutting down. Please wait...'));
      devServer.close();
      process.exit();
    });
  });

  if (useTypeScript) {
    const proc = spawn.sync(command, commandArgs.concat('--typescript'), { stdio: 'inherit' });

    if (proc.status !== 0) {
      console.error(chalk.red(`\n\`${command} ${commandArgs.join(' ')}\` exited.`));
    }

    return;
  }

  const { action } = await inquirer.prompt([{
      name: 'action',
      type: 'list',
      message: `Use ${chalk.cyan('TypeScript')}:`,
      choices: [
        { name: 'Yes', value: 'yes' },
        { name: 'No', value: 'no' },
      ]
  }]);

  if (!action) {
    return;
  } else if (action === 'yes') {
    commandArgs.push('--typescript');
  }

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
