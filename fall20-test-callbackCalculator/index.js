// eslint-disable-next-line no-unused-vars

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
			if (cb && typeof cb === "function") cb(null, number1 + number2);
			return number1 + number2;
		}
		throw new Error("Something went wrong");
	}, 100);
}
function subtractCallback(number1, number2, cb) {
	setTimeout(() => {
		if (verify(number1, number2)) {
			if (cb && typeof cb === "function") cb(null, number1 - number2);
			return number1 - number2;
		}
		throw new Error("Something went wrong");
	}, 100);
}
function multiplyCallback(number1, number2, cb) {
	setTimeout(() => {
		if (verify(number1, number2)) {
			if (cb && typeof cb === "function") cb(null, number1 * number2);
			return number1 * number2;
		}
		throw new Error("Something went wrong");
	}, 100);
}
function divideCallback(number1, number2, cb) {
	setTimeout(() => {
		if (verify(number1, number2)) {
			if (cb && typeof cb === "function") cb(null, number1 / number2);
			return number1 / number2;
		}
		throw new Error("Something went wrong");
	}, 100);
}

// ----------------------------------- End of callbacks

// ----------------------------------- Start of promises
const promisifiedSetTimeout = (ms) =>
	new Promise((resolve) => setTimeout(resolve, ms));

function addPromise(num1, num2) {
	return new Promise((res, rej) => {
		promisifiedSetTimeout(100).then(() => {
			if (verify(num1, num2)) {
				res(num1 + num2);
			}
			rej(new Error("Woops!..."));
		});
	});
}

function subtractPromise(num1, num2) {
	return new Promise((res, rej) => {
		promisifiedSetTimeout(100).then(() => {
			if (verify(num1, num2)) {
				res(num1 - num2);
			}
			rej(new Error("Woops!..."));
		});
	});
}

function multiplyPromise(num1, num2) {
	return new Promise((res, rej) => {
		promisifiedSetTimeout(100).then(() => {
			if (verify(num1, num2)) {
				res(num1 * num2);
			}
			rej(new Error("Woops!..."));
		});
	});
}

function dividePromise(num1, num2) {
	return new Promise((res, rej) => {
		promisifiedSetTimeout(100).then(() => {
			if (verify(num1, num2)) {
				res(num1 / num2);
			}
			rej(new Error("Woops!..."));
		});
	});
}

// ----------------------------------- End of promises

// ----------------------------------- Start of async

const addAwait = async (num1, num2) => {
	await promisifiedSetTimeout(100);
	if (verify(num1, num2)) return num1 + num2;
	return new Error("Woops!...");
};

const subtractAwait = async (num1, num2) => {
	await promisifiedSetTimeout(100);
	if (verify(num1, num2)) return num1 - num2;
	return new Error("Woops!...");
};

const multiplyAwait = async (num1, num2) => {
	await promisifiedSetTimeout(100);
	if (verify(num1, num2)) return num1 * num2;
	return new Error("Woops!...");
};

const divideAwait = async (num1, num2) => {
	await promisifiedSetTimeout(100);
	if (verify(num1, num2)) return num1 / num2;
	return new Error("Woops!...");
};

module.exports = {
	addCallback,
	subtractCallback,
	multiplyCallback,
	divideCallback,
	addPromise,
	subtractPromise,
	multiplyPromise,
	dividePromise,
	addAwait,
	subtractAwait,
	multiplyAwait,
	divideAwait,
};
