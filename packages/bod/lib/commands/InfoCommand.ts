import consola from 'consola';
import envinfo from 'envinfo';
import BaseCommand from './BaseCommand';

class InfoCommand extends BaseCommand {
  constructor() {
    super({
      name: 'info',
      description: 'Print debugging information about your environment',
      usage: 'info',
    });
  }

  public async run(): Promise<void> {
    consola.info('Environment Info:');
    const envInfo = await envinfo.run(
      {
        System: ['OS', 'CPU'],
        Binaries: ['Node', 'Yarn', 'npm'],
        Browsers: ['Chrome', 'Edge', 'Firefox', 'Safari'],
        npmPackages: '/**/{typescript,*react*,@sabertazimi/*/}',
        npmGlobalPackages: ['@sabertazimi/bod'],
      },
      {
        showNotFound: true,
        duplicates: true,
        fullTree: true,
      }
    );
    consola.info(envInfo);
  }
}

export default InfoCommand;
