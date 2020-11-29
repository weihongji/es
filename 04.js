// Fundtion properites

function uniqueId() {
	return uniqueId.counter++;
}

uniqueId.counter = 0;

for (let i = 0; i < 5; i++) {
	console.log(uniqueId());
}