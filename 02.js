// Usage of arguments.callee.length

function sum(x, y, z) {
	if (arguments.length != arguments.callee.length) {
		console.log(`Count of parameters not match. Expected: ${arguments.callee.length}, Actual: ${arguments.length}`);
		return;
	}

	console.log(`${x} + ${y} + ${z} = ${x + y + z}`);
}

sum(11, 12, 13);
sum(11, 12);
