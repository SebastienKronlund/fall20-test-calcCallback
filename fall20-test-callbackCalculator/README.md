# salt-jsfs-testCallbackCalculator

We want you to make an asynchronous calculator, to do calculations using callbacks and async/await - each calculation should be done after a delay of 100 ms.

The calculators should support basic calculations with integers:

* add - adding two integers, 2 + 2 should be 4 for example
* subtract - subtracting one integer from another, 2 - 2 should be 0 for example
* multiply - multiplying two integers, 2 * 2 should be 4 for example
* divide - dividing two integers, 2 / 2 should be 1 for example

In order for the function to be asynchronous we want you to wait for 100 ms in each function. This can be accomplished using `setTimeout` and for promises and async/await we have supplied a promise version `promisifiedSetTimeout`.

We want you to solve the exercise in 3 ways.

1. Using callback functions
1. Using promises
1. Using `async/await`

In other words, you need to write functions with the following names (12 functions all in all):

* Callback version `addCallback, subtractCallback, multiplyCallback, divideCallback`
* Promises version `addPromise, subtractPromise, multiplyPromise, dividePromise`
* Await version `addAwait, subtractAwait, multiplyAwait, divideAwait`

## Testing

We've set up a mocha test file for you to use.

We have supplied some starter tests for the `add`-functions of each type of asynchronous style. You are encourage to write more tests for other cases.

You will need to properly handle error that would break your program, for example passing in a string as an argument.

Since our testing code will call into your functions, ensure that:

* For callbacks, errors are returned as first parameter of the callback `callback(err, result)`
* For promises ensure that we end up in our test's `.catch` handler
* For async/await our tests will use structured error handling (`try/catch`).
  * Our testing code will assert that errors ends up in the tests' `catch`-block.
  * Only use the generic `Error` class, since that is what our checking code will be looking for.

As normal we will run another suite of tests against your code to correct it.

We have also supplied some tests that verfies that you have exported the correct functions, so that you can check the spelling when you are done.

And the linting. Don't forget the linting.

## Handing in the solution

Upload the `index.js` in a folder called `callbackCalculator`.

# FAQ

Should the functions only accept numbers?
> Yes. Your code should check that only numbers are passed in and handle the other cases as errors, as described above.   

Are we allowed to write helper functions?
> Yes.

Do we need to throw an error if there are more than 2 arguments passed into the function - and what should we do with the error if there is no callback passed to the function?
> For this test, you can safely assume that we are sending the correct number of arguments.
