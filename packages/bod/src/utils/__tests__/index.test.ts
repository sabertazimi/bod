import { color, program } from '../index';

describe('Utils', () => {
  test('should execute chalk correctly', () => {
    expect(color('raw text')).toStrictEqual('raw text');
  });

  test('should execute program correctly', () => {
    const mockParse = jest
      .spyOn(program, 'parse')
      .mockImplementation(jest.fn());
    expect(process.env.__BOD__).toStrictEqual('__BOD__');
    mockParse.mockRestore();
  });
});
