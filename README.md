# interval-polynomial

Like `setInterval`,
but instead of a constant interval duration,
a polynomical one instead,
specified using coefficients.

Useful for things like retry with back off.

## Install

```bash
npm install --save polynomial-interval # either
yarn add polynomial-interval # or
```

## Usage

Usage is as similar as possible to `setInterval`:
The first argument is the same: a function that needs to get called at an interval.
In `setInterval`, the second argument is a number of milliseconds,
and in `setIntervalPolynomial`, this is replaced by a second *and third* arguments,
which are an array of coefficients for the polynomial,
and an optional safeguard for the maximum time it should run for.

### `setIntervalPolynomial`

```javascript
setIntervalPolynomial(intervalFunction, coefficients, stopTime);
```

**intervalFunction**:

The function that is to be called at an interval.

**coefficients**:

Translate to the mathematical form of `a + bn + cn^2 + dn^3 + ...`,
where `a`, `b`, `c`, `d` are the coefficients.

So `10 + 10n^2` should be specified as `[10, 0, 2]` in Javascript.

**stopTime**:

The interval function will be called as many times before,
and then once after, the specified stop time.
The final call is to allow for any clean up necessary.

This should be specified as milliseconds since epoch,
like the return value of `Date.now()`.

### `clearIntervalPolynomial`

```javascript
clearIntervalPolynomial(intervalId);
```

Use `clearIntervalPolynomial` exactly like you would use `clearInterval`.

**intervalId**:

The return value from `setIntervalPolynomial`.

### Example

The following example illustrates how use this in a retry scenario.

```javascript
const { setIntervalPolynomial, clearIntervalPolynomial } = require('interval-polynomial');
const retryUntil = Date.now() + 300000; // 5m from now
const retryCoefficients = [10000, 0, 10000]; // 10s, 20s, 50s, 100s, ...
const retryIntervalId = setIntervalPolynomial(retryFn, retryCoefficients, retryUntil);
function retryFn() {
  if (Date.now() > retryUntil) {
    // time out detected, handle that situation
    // clearIntervalPolynomial has already been called for you
  } else {
    // perform the retriable action
    if (thereWasAnError) {
        clearIntervalPolynomial(retryIntervalId); // stop retrying
    }
  }
}
```

## Licence

GPLv3

## Author

[Brendan Graetz](http://bguiz.com)
