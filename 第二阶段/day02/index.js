// * 隐式转换

// * 当对非Number类型的值就行运算时，会将其转化为Number类型
var value1 = false + 1;
console.log(value1);

// * 任何值和NaN做运算都为NaN
var value2 = NaN + 1;
console.log(value2);

// * 对字符串做加法，返回字符串
var value3 = 123 + '223';
console.log(value3);
console.log(typeof value3);

var value4 = 'str1' + 'str2';
console.log(value4);

var value5 =  1 + 'str1' + false;
console.log(value5);

console.log(String(false));

