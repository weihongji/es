// iterator

let it = {
	*[Symbol.iterator]() {
		for (let i = 0; i < 5; i++) {
			yield parseInt(10*(i + Math.random()));
		}
	}
};

for (let n of it) {
	console.log(n);
}

console.log('-'.repeat(10));

for (let n of it) {
	console.log(n);
}