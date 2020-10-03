const assert = require('assert');
const calculator = require('.');

describe('validating', () => {
  it('exported functions', () => {
    assert.equal(typeof calculator.addCallback, 'function', 'addCallback is not exported');
    assert.equal(typeof calculator.subtractCallback, 'function', 'subtractCallback is not exported');
    assert.equal(typeof calculator.multiplyCallback, 'function', 'multiplyCallback is not exported');
    assert.equal(typeof calculator.divideCallback, 'function', 'divideCallback is not exported');

    /*  assert.equal(typeof calculator.addPromise, 'function', 'addPromise is not exported');
    assert.equal(typeof calculator.subtractPromise, 'function', 'subtractPromise is not exported');
    assert.equal(typeof calculator.multiplyPromise, 'function', 'multiplyPromise is not exported');
    assert.equal(typeof calculator.dividePromise, 'function', 'dividePromise is not exported');

    assert.equal(typeof calculator.addAwait, 'function', 'addAwait is not exported');
    assert.equal(typeof calculator.subtractAwait, 'function', 'subtractAwait is not exported');
    assert.equal(typeof calculator.multiplyAwait, 'function', 'multiplyAwait is not exported');
    assert.equal(typeof calculator.divideAwait, 'function', 'divideAwait is not exported'); */
  });
});

describe('callback calculator', () => {
  it.only('add is not working correctly', done => {
    calculator.addCallback(1, 2, (err, result) => {
      assert.equal(3, result);
      assert.strictEqual(err, null);
      done();
    });
  });
  it.only('subtract is not working correctly', done => {
    calculator.subtractCallback(3, 2, (err, result) => {
      assert.equal(1, result);
      assert.strictEqual(err, null);
      done();
    });
  });
  it.only('multiply is not working correctly', done => {
    calculator.multiplyCallback(2, 2, (err, result) => {
      assert.equal(4, result);
      assert.strictEqual(err, null);
      done();
    });
  });
  it.only('divide is not working correctly', done => {
    calculator.divideCallback(2, 2, (err, result) => {
      assert.equal(1, result);
      assert.strictEqual(err, null);
      done();
    });
  });
});


describe('promise calculator', () => {
  it.only('add works fine', done => {
    calculator.addPromise(1, 2).then(result => {
      assert.equal(3, result);
      done();
    });
  });
});

describe('await calculator', () => {
  it('add works fine', async () => {
    const result = await calculator.addAwait(1, 2);
    assert.equal(3, result);
  });
});
