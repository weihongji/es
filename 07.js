// JavaScript 编程思想: 从 ES5 到 ES9 / 柯霖廷编著. ——北京: 清华大学出版社, 2019
// ISBN 978-7-302-52661-2
// 3.8 练习题 (Page: 88)

let map = new Map();

map.set(1, () => {
	let x = 25.75;
	console.log(`Binary: ${x.toString(2)}, Octal: ${x.toString(8)}, Hex: ${x.toString(16)}`);
}).set(2, () => {
	let x = 0b110111011;
	console.log(`Binary: ${x.toString(2)}, Hex: ${x.toString(16)}`)
}).set(3, () => {
	let x = 0b101100011100, y = 0o1275, z = 0x51cf
	console.log(`Sum of B:${x.toString(2)}, O:${y.toString(8)}, X:${z.toString(16)}: ${x + y + z}`);
}).set(4, () => {
	let x = 2, y = 3
	console.log(`3x^2 + 2(x-1)^2y + 2xy^2 + 5y^3 = ${3 * x ** 2 + 2 * (x - 1) ** 2 * y + 2 * x * y ** 2 + 5 * y ** 3}`);
}).set(5, () => {
	let product = { item01: ['fruit_set', 100], item02: ['sticker_set', 250], item03: ['magnet_set', 350], item04: ['drink_set', 150], item05: ['pizza_set', 300] };
	let result = 0;
	for (let item in product) {
		result += product[item][1];
	}
	console.log('Total Price: ' + result);
}).set(6, () => {
	console.log('NaN, Infinity, undefined');
}).set(7, () => {
	let num01 = 28.56, num02 = 32.47;
	let result;
	result = parseInt(num01) + Math.trunc(num01) + Math.floor(num01) + Math.round(num01) + Math.ceil(num01);
	console.log(`num01: ${result}`);
	result = parseInt(num02) + Math.trunc(num02) + Math.floor(num02) + Math.round(num02) + Math.ceil(num02);
	console.log(`num02: ${result}`);
}).set(8, () => {
	console.log('Money...');
}).set(9, () => {
	let x = 768
	console.log(`x^(1/3): ${x ** (1 / 3)}, ${Math.pow(x, 1 / 3)}`);
}).set(10, () => {
	console.log('#1: if(price>=300 && amunt < 10){...}');
	console.log('#1: if(price>=300) {if(amunt < 10){...}}');
}).set(11, () => {
	let arr = [[[2, 10], [15, 20]], [[25, 30], [35, 40]], [[45, 50], [55, 60]]];
	console.log(`25, 40, 60:\n${arr[1][0][0]}, ${arr[1][1][1]}, ${arr[2][1][1]}`);
}).set(12, () => {
	let o = { product: { en: 'browser', cn: '浏览器' }, developer: { en: 'Google', cn: '谷歌' }, price: { en: 'free', cn: '免费' } };
	console.log(`browser, 谷歌, free:\n${o.product.en}, ${o.developer.cn}, ${o.price.en}`);
}).set(13, () => {
	let profile = { name: 'Jesse Wei', planet: 'Mars' };
	let message = profile.name + ' now leves on ' + profile.planet + '.';
	console.log(message);
	console.log(`${profile.name} now leves on ${profile.planet}.`);

}).set(14, () => {
	console.log('Apple: 11\nBanana: 15\nGuava: 23');
}).set(15, () => {
	console.log(Date());
}).set(16, () => {
	let components = new Set();
	components.add('window').add('pane').add('dialogue').add('button').add('scrollbar');
	console.log(components);
}).set(17, () => {
	let device = new Map();
	device.set('mobile phone', 10).set('tablet PC', 7).set('notebook PC', 3).set('desktop PC', 20);
	console.log(device);
}).set(18, () => {
	let num = 201314;
	console.log(`变量num的：\n\t十进制数值 = ${num.toString()}\n\t二进制数值 = ${num.toString(2)}\n\t八进制数值 = ${num.toString(8)}\n\t十六进制数值 = ${num.toString(16)}`);

})

for (const [key, f] of map) {
	console.log(`--${key}--`);
	f();
}
