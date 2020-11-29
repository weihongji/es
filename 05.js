// Closure

let uniqueId = (function x () {
	let counter = 0;

	return function() {
		return ++counter;
	}
}) ();

for (let i = 0; i < 5; i++) {
	console.log(uniqueId());
}