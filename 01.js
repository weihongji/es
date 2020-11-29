// f.call()

function add(a, b) {
	if (this && typeof this.value == 'number') {
		return this.value += this.value < 13 ? a : 0;
	} else {
		return a + b;
	}
}

let o1 = {value: 0};
let o2 = {value: 2};

for(let i = 0; i<10; i++) {
	console.log(`${i}: ${add.call(o1, i, i+1)}, ${add.call(o2, i, i+1)}`);
}

