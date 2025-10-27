const capitalize = require('./capitalize');

test('capitalizes first letter of string input', () => {
  expect(capitalize('cat')).toBe('Cat');
  expect(capitalize('broccoli')).toBe('Broccoli');
  expect(capitalize('chocolate')).toBe('Chocolate');
});