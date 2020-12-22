var flag = false;

// ! 非
console.log(!flag);

var value1 = 10;

console.log(!value1);
console.log(!Boolean(value1));

var value2 = 10;
// * 取反两次，非会促使隐式转换，
// * 取两次非，获取该值本身的boolean值
console.log('value2 ===>',!!value2);
console.log('value2 ===>',Boolean(value2));


// ! 与
var value3 =  true && false;
console.log('value3: ', value3);

// * 短路原则
true && console.log(1);
false && console.log(2);

// false & console.log(3);

// ! 或
var value4 = true || false;
console.log('value4: ', value4);
var value5 = false || false;
console.log('value5: ', value5);

// * 短路原则
true || console.log(4);
false || console.log(5);


// ! 与或运算
var value6 = 1 && 2;
console.log('value6: ', value6);
var value7 = 1 && '';
console.log('value7: ', value7);
var value8 = 0 && '123';
console.log('value8: ', value8);







