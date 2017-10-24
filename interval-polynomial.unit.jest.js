'use strict';

describe('[polynomial]', () => {
  const { polynomial } = require('./interval-polynomial.js');

  [
      { n: 0, coeffs: [10], result: 10 },
      { n: 1, coeffs: [10], result: 10 },
      { n: 2, coeffs: [10], result: 10 },
      { n: 0, coeffs: [0, 10], result: 0 },
      { n: 1, coeffs: [0, 10], result: 10 },
      { n: 2, coeffs: [0, 10], result: 20 },
      { n: 3, coeffs: [0, 10], result: 30 },
      { n: 0, coeffs: [10, 10], result: 10 },
      { n: 1, coeffs: [10, 10], result: 20 },
      { n: 2, coeffs: [10, 10], result: 30 },
      { n: 3, coeffs: [10, 10], result: 40 },
      { n: 0, coeffs: [0, 0, 1], result: 0 },
      { n: 1, coeffs: [0, 0, 1], result: 1 },
      { n: 2, coeffs: [0, 0, 1], result: 4 },
      { n: 3, coeffs: [0, 0, 1], result: 9 },
      { n: 0, coeffs: [10, 0, 10], result: 10 },
      { n: 1, coeffs: [10, 0, 10], result: 20 },
      { n: 2, coeffs: [10, 0, 10], result: 50 },
      { n: 3, coeffs: [10, 0, 10], result: 100 },
  ].forEach((info) => {
      const { n, coeffs, result } = info;
      it(`coefficients=${coeffs} n=${n}`, () => {
          expect(polynomial(n, coeffs)).toEqual(result);
      });
  });
});