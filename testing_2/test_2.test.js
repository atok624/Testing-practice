const reverseString = require('./test-2.js');

test('reverseString reverses a string', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });
  