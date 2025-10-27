let analyze = require('./analyze');

let examp = analyze([0, 2, 2, 4, 5, 7, 1, 2, 4]);

test('provides an object with analyzed values of a given array', () => {
  expect(examp.length).toBe(9);
  expect(examp.average).toBe(3);
  expect(examp.min).toBe(0);
  expect(examp.max).toBe(7);
});