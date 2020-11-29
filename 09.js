// generator function

function* iterator() {
	for (let i = 0; i < 5; i++) {
		yield parseInt(10*(i + Math.random()));
	}
}

for (let n of iterator()) {
	console.log(n);
}

console.log('-'.repeat(10));

let numbers = [...iterator()];
console.log(numbers);

console.log('-'.repeat(10));

let [a, b, c, ...others] = iterator();
console.log(`a, b, c = ${a}, ${b}, ${c}`);
console.log(others);