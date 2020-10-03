// Use this helper to set a timeout in promise
// eslint-disable-next-line no-unused-vars

const addAwait = () => { throw new Error('Not implemented yet'); };

function verify(num1, num2) {
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    return true;
  }
  return false;
}


// ----------------------------------- Start of callbacks
function addCallback(number1, number2, cb) {
  setTimeout(() => {
    if (verify(number1, number2)) {
      if (cb && typeof cb === 'function') cb(null, number1 + number2);
      return number1 + number2;
    }
    throw new Error('Something went wrong');
  }, 100);
}
function subtractCallback(number1, number2, cb) {
  setTimeout(() => {
    if (verify(number1, number2)) {
      if (cb && typeof cb === 'function') cb(null, number1 - number2);
      return number1 - number2;
    }
    throw new Error('Something went wrong');
  }, 100);
}
function multiplyCallback(number1, number2, cb) {
  setTimeout(() => {
    if (verify(number1, number2)) {
      if (cb && typeof cb === 'function') cb(null, number1 * number2);
      return number1 * number2;
    }
    throw new Error('Something went wrong');
  }, 100);
}
function divideCallback(number1, number2, cb) {
  setTimeout(() => {
    if (verify(number1, number2)) {
      if (cb && typeof cb === 'function') cb(null, number1 / number2);
      return number1 / number2;
    }
    throw new Error('Something went wrong');
  }, 100);
}

// ----------------------------------- End of callbacks


// ----------------------------------- Start of promises
/* const promisifiedSetTimeout = ms => new Promise(resolve => setTimeout(resolve, ms)); */
function promisifiedSetTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout((res) => {
      resolve("Hello!");
    }, ms)
  })
}

promisifiedSetTimeout(1000).then(res => console.log(res));

function addPromise(num1, num2) {
  return new Promise((res, rej) => {
    
    if (verify(num1, num2)) {
      res(num1 + num2);
    }
    rej(new Error('Woops!...'));
  });
}

addPromise(1, 2)
  .then(res => console.log(res))
  .catch(err => console.log(err));

module.exports = {
  addCallback,
  subtractCallback,
  multiplyCallback,
  divideCallback,
  addPromise,
  addAwait,
};
