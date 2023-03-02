const capitalize = require('./task-4.js');


describe('capitalize', () => {
    test('capitalizes the first character of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('jOHN')).toBe('JOHN');
      expect(() => capitalize(42)).toThrow('Argument must be a string.');
    });
  });