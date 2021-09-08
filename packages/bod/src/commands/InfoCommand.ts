import { envinfo, printer } from '../utils';
import BaseCommand from './BaseCommand';

class InfoCommand extends BaseCommand {
  constructor() {
    super({
      name: 'info',
      description: 'Print debugging information about your environment',
      usage: 'info',
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async run(_appName?: string): Promise<void> {
    printer.info(`Environment information:`);
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
    printer.info(envInfo);
  }
}

export default InfoCommand;
