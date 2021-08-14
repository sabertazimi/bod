interface BaseCommandOptions {
  name: string;
  description: string;
  usage: string;
}

class BaseCommand {
  private readonly name: string;
  private readonly description: string;
  private readonly usage: string;

  constructor(options: BaseCommandOptions) {
    const { name, description, usage } = options;
    this.name = name;
    this.description = description;
    this.usage = usage;
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
}

export default BaseCommand;
