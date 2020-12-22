// ! 相等运算符

// * == 会自动作一个隐式转换
console.log( 1 == 1 );
console.log( '1' == 1 );

console.log('result1 ==>', true == '1' );
console.log('result2 ==>', true == '2' );

console.log( null == 0 );  // false

console.log( undefined == null); // true

console.log(NaN == 1); // false
console.log(NaN == NaN); // false

console.log(isNaN(NaN));

// * === 不会自动做隐式转换
console.log(' ===>', 1 === 1 );
console.log(' ====> ', '1' === 1 );
console.log( undefined === null);

// ! != !==
