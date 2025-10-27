const reverse = require('./reverse');

test('reverses the given string', () => {
  expect(reverse('cat')).toBe('tac');
  expect(reverse('broccoli')).toBe('iloccorb');
  expect(reverse('chocolate')).toBe('etalocohc');
});