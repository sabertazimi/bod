interface BaseCommandOptions {
  name: string;
  description: string;
  usage: string;
  alias?: string;
}

class BaseCommand {
  private readonly name: string;
  private readonly description: string;
  private readonly usage: string;
  private readonly alias: string;

  constructor(options: BaseCommandOptions) {
    const { name, description, usage, alias } = options;
    this.name = name;
    this.description = description;
    this.usage = usage;
    this.alias = alias ?? this.name[0];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async run(_appName?: string): Promise<void> {
    return;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getUsage(): string {
    return this.usage;
  }

  public getAlias(): string {
    return this.alias;
  }
}

export default BaseCommand;
