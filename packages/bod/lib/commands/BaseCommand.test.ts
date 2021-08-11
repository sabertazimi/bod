import BaseCommand from './BaseCommand';

const options = {
  name: 'base',
  description: 'Base command description',
  usage: 'base',
};

describe('BaseCommand', () => {
  test('should have [description] field', () => {
    const baseCommand = new BaseCommand(options);
    expect(baseCommand.getDescription()).toBe(options.description);
  });

  test('should have [usage] field', () => {
    const baseCommand = new BaseCommand(options);
    expect(baseCommand.getUsage()).toBe(options.usage);
  });
});
