// ! 正则表达式

// * ^ $
// var reg = /^s$/;

// var target = 'str1';

// console.log(reg.test(target));


// var reg = /^[a-z]{2,4}$/;

// var target = 'Aaaa';

// console.log(reg.test(target));

// * 修饰符
// var str = '123123';
// var pattern = /123/g;

// console.log(str.replace(pattern,'after'))


// * 简写
// var reg = /^[a-z]+[1-3]?$/;

// var target = 'aaa33';

// console.log(reg.test(target));

// var reg = /^[a-z]+$/;

// var target = 'aaa~';

// console.log(reg.test(target));
// var reg = /^\w+$/;

// var target = 'aaaA123_';

// console.log(reg.test(target));



// * 转义
// var reg = /^[a-z]{1,3}\+$/;

// var target = 'aaa+';

// console.log(reg.test(target));

// var str = "isen 说\"1231312\"";
// console.log(str);

// * 或
// var reg = /^1|a$/;

// var target = 's';

// console.log(reg.test(target));

// ? 匹配 第一位是数字1-9，紧接着4到10位的数字
// var pattern = /[1-9][0-9]{4,10}/;

// console.log(pattern.test(112345678999999999))

// ? 国内电话号码
// var str = '025-81234567'
// * 数字0 1个，数字0～9 2个， - 1个 ， 1～9 1个 ， 0～9 7个
// var pattern = /^0[0-9]{2}-[1-9]{1}[0-9]{7}$/

// var reg = /^0[0-9]{2}-[1-9]{1}[0-9]{7}$/;

// console.log(pattern.test(str))

// ? 匹配16进制颜色
// * #ffbbad  0-9a-fA-F
// * #ffE
// * #Fc01DF
var str = '#ffE';

var pattern = /^(#[0-9a-fA-f]{6})|(#[0-9a-fA-f]{3})$/

var reg1 = /^#[0-9a-fA-F]{6}$/
var reg2 = /^#[0-9a-fA-F]{3}$/

var reg = /^(#[0-9a-fA-F]{6})|(#[0-9a-fA-F]{3})$/

console.log('reg1 ===>',reg1.test('#ffbbad'))
console.log('reg2 ===>',reg2.test('#ffE'))

console.log(pattern.test(str))