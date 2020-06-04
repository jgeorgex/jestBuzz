const fizzBuzz = require('./fizzBuzz');

test('returns 1 if input is 1', () => {
  expect(fizzBuzz(1)).toBe(1);
});

test('returns 2 if input is 2', () => {
  expect(fizzBuzz(2)).toBe(2);
});

test('returns fizz if input is 3', () => {
  expect(fizzBuzz(3)).toBe('fizz');
});

test('returns 4 if input is 4', () => {
  expect(fizzBuzz(4)).toBe(4);
});

test('returns buzz if input is 5', () => {
  expect(fizzBuzz(5)).toBe('buzz');
});

test('returns 6 if input is 6', () => {
  expect(fizzBuzz(6)).toBe('fizz');
});
