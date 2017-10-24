'use strict';

const intervals = new Set();
let intervalIdCounter = 0;

function clearIntervalPolynomial(intervalId) {
  intervals.delete(intervalId);
}

function setIntervalPolynomial(fn, coefficients, stopTime) {
  const intervalId = intervalIdCounter;
  intervalIdCounter += 1;
  intervals.add(intervalId);
  intervalPolynomial(intervalId, 0, fn, coefficients, stopTime);
  return intervalId;
}

function intervalPolynomial(intervalId, count, fn, coefficients, stopTime) {
  const waitDuration = polynomial(count, coefficients);
  if (waitDuration > 0 &&
      (typeof stopTime !== 'number' || Date.now() <=  stopTime)) {
    setTimeout(() => {
      if (intervals.has(intervalId)) {
        fn();
        intervalPolynomial(intervalId, count + 1, fn, coefficients, stopTime);
      }
    }, waitDuration);
  } else {
    clearIntervalPolynomial(intervalId);
    fn(); // Final call
  }
}

function polynomial(n, coefficients) {
  return coefficients.reduce(
    (acc, coeff, idx) => acc + coeff * Math.pow(n, idx),
    0);
}

module.exports = {
  clearIntervalPolynomial,
  setIntervalPolynomial,
  polynomial,
};
