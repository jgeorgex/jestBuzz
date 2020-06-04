const fizzBuzz = require('./fizzBuzz');

test('returns 1 if input is 1', () => {
  expect(fizzBuzz(1)).toBe(1);
});

test('returns 2 if input is 2', () => {
  expect(fizzBuzz(2)).toBe(2);
});
