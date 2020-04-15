function sum(a, b) {
  if (typeof(a) !== 'number' || typeof(a) !== 'number') {
    throw new TypeError('a or b is not a number');
  }

  return a + b;
}

module.exports = sum;
