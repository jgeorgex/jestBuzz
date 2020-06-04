function fizzBuzz(number) {
  if (number === 3) {
    return 'fizz';
  } else if (number === 5) {
    return 'buzz';
  } else {
    return number;
  }
}

module.exports = fizzBuzz;
