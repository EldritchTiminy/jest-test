const calculator = require('./calculator');

test('The calculator is an object', () => {
  expect(typeof calculator).toBe('object');
});

test('The "add" method returns the sum of two inputs', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('The "sub" method returns the difference of two inputs', () => {
  expect(calculator.sub(3, 2)).toBe(1);
});

test('The "mul" method returns the product of two inputs', () => {
  expect(calculator.mul(2, 3)).toBe(6);
});

test('The "div" method returns the quotient of two inputs', () => {
  expect(calculator.div(6, 3)).toBe(2);
});