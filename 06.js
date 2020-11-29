// Class

function Rectangle(width, height) {
	this.width = width;
	this.height = height;
	Rectangle.prototype.area = () => this.width * this.height;
	Rectangle.prototype.toString = () => `Rectangle: ${this.width} x ${this.height}`;
}

let r = new Rectangle(4, 6);
console.log(`${r}, area: ${r.area()}`);