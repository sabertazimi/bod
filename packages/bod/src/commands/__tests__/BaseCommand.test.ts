import BaseCommand from '../BaseCommand';

const options = {
  name: 'base',
  description: 'Base command description',
  usage: 'base',
  alias: 'c',
};

describe('BaseCommand', () => {
  test('should have [name] field', () => {
    const baseCommand = new BaseCommand(options);
    expect(baseCommand.getName()).toBe(options.name);
  });

  test('should have [description] field', () => {
    const baseCommand = new BaseCommand(options);
    expect(baseCommand.getDescription()).toBe(options.description);
  });

  test('should have [usage] field', () => {
    const baseCommand = new BaseCommand(options);
    expect(baseCommand.getUsage()).toBe(options.usage);
  });

  test('should have [alias] field', () => {
    const baseCommand = new BaseCommand(options);
    expect(baseCommand.getAlias()).toBe(options.alias);
  });

  test('should set [alias] field to first character of [name] field by default', () => {
    const baseCommand = new BaseCommand({ ...options, alias: undefined });
    expect(baseCommand.getAlias()).toBe(options.name[0]);
  });

  test('should have [run] method', async () => {
    const baseCommand = new BaseCommand(options);
    await expect(baseCommand.run()).resolves.toBeUndefined();
  });
});
