// Unnamed functions

// Type 1:
(function() {
	console.log(arguments);
})(10, 11, 12, 13);


// Type 2:
void function() {
	let s = "";
	for (const arg of arguments) {
		s += (s.length > 0 ? ", " : "") + arg;
	}
	console.log(`Arguments(${arguments.length}): ${s}`);
} (10, 11, 12, 13);

