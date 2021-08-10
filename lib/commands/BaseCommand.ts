interface BaseCommandOptions {
  name: string;
  description: string;
  usage: string;
}

class BaseCommand {
  readonly name: string;
  readonly description: string;
  readonly usage: string;

  constructor(options: BaseCommandOptions) {
    const { name, description, usage } = options;
    this.name = name;
    this.description = description;
    this.usage = usage;
  }
}

export default BaseCommand;
