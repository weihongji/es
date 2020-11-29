// yield
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

function* foo() {
	yield 1;
	yield 2;
	yield 3;
	return 10;
}

// let f = foo();
// console.log(f);
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());

for	(let n of foo()) {
	console.log(n);
}
