
// * 和数组做比较，隐式转换成数字
var value1 = '10' > 2;
console.log('value1: ', value1);

var value2 = 10 < 'hello';
console.log('value2: ', value2);

// ! unicode
var code1 = '\u0031'
console.log('code1: ', code1);

var code3 = '\u0035'
console.log('code3: ', code3);

var code2 = '\u231B'
console.log('code2: ', code2);

// * 字符串之间做比较
console.log('1'>'5');

console.log('11'>'5');

console.log('abc' < 'b');

console.log('bbc' < 'b');

// console.log('result ===>','A' > 'B');

// * 比较数字的tick
console.log('result ===>','123'< Number('3'));

console.log('123'< +'3');


