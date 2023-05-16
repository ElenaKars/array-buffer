import ArrayBufferConverter, { getBuffer } from '../ArrayBufferConverter';

describe('ArrayBufferConverter', () => {
  test('should convert ArrayBuffer to string', () => {
    const arrayBufferConverter = new ArrayBufferConverter();
    const buffer = getBuffer();
    arrayBufferConverter.load(buffer);
    const result = arrayBufferConverter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  test('should throw an error when no data is loaded', () => {
    const arrayBufferConverter = new ArrayBufferConverter();
    expect(() => arrayBufferConverter.toString()).toThrow('No data loaded');
  });
});