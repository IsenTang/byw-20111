// * 控制台打印
console.log('hello world');

// * 字面量
// * 字符串
'hello';

// * 数字
123;

console.log(123);

// * 单双引号嵌套
console.log('isen 说:"大家好"')

// * 转义字符
console.log('isen 说:\'大家好\'');


// * 变量
var pi = 3.1415926;
pi * 10 * 10;

pi * 20 * 20;

// * 驼峰命名
var getTeacherName;

var getteachername;

// ===============
// * 基本数据类型

// * 字符串 string
var str = `反引号`;

var str1 = 'str1 字符串';
console.log('str1: ', str1);
var str2 = 'str2 字符串';
console.log('str2: ', str2);

// * 连接字符串
console.log(str1 + str2);

// * vscode 插件： better comments
// ! warning
// ? question
// todo todo
// * normal

// * vscode 插件：javascript console utils
var a = 'a';
console.log('a: ', a);

// * 数字 number
var n1 = 123;
var n2 = 123.123;

// * 超过最大值
var infinityNum = Infinity;

// * 不是数字
var notNumber = NaN;

console.log("a" * "b");

// * 精度丢失
var result = 0.1 + 0.2;
console.log('result ===>',result);

result = (1 + 2)/10;
console.log('result ===>',result);

// * 布尔值
var flag = true;
console.log('flag: ', flag);
flag = false;
console.log('flag: ', flag);

// * undefined
var value;
console.log('value: ', value);

// * null
var nullValue = null;
console.log('nullValue: ', nullValue);

// * typeof 类型检查
console.log('typeof flag ===>',typeof flag);
console.log('typeof n1 ===>',typeof n1);

var aNum = 'a'
var bNum = 'b'

if(typeof aNum === 'number' 
&& typeof bNum === 'number'){
    
    console.log(aNum * bNum);
}

// * 强制类型转换
// * 转字符串（string）

var numToStr = 1;
var nullToStr = undefined;

// * number ---> string
console.log('numToStr ==>',
numToStr.toString());

console.log('numToStr ==>',
String(numToStr));

// * null || undefined --> string
// console.log('nullToStr ==>',
// nullToStr.toString());

console.log('nullToStr ==>',
String(nullToStr));

// * 转数字
var strToNum = '1a';
console.log('Number===> ',Number(strToNum));
var emptyStrToNum = '';
console.log('Number===> ',Number(emptyStrToNum));

var height = '100px';
console.log(Number(height) * Number(height));
console.log(parseInt(height) * parseInt(height));

// * parseInt parseFloat
var str12 = '110';
console.log('str12 ==>',parseInt(str12));

var str22 = '1a';
console.log('str22 ==>',parseFloat(str22));


// * 转换布尔值

// * number ---> boolean
var numToBoolean =  NaN;

console.log('numToBoolean ==>',
Boolean(numToBoolean));

// * string ----> boolean
var strToBoolean = '1';
console.log('strToBoolean ==>',
Boolean(strToBoolean));

// * null & undefinded
console.log(Boolean(null));
console.log(Boolean(undefined));
