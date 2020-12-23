
// * 自增
var i = 1;
console.log('i: ', i);

// i+=1;

// i = i + 1;

// i++;
// i++;
// var value = i++;
// console.log('i++ ====>', value );

// var value = ++i;
// console.log('++i ====>', value );

// // ++i;
// console.log('i: ', i);

// * 原理

// var i = 1;
// var temp = i;
// console.log('temp ====>',temp);
// var a = i++;
// i = i + 1;
// a = temp;


// console.log('a ===>',a);
// a = temp;
// console.log('a: ', a);

// var a = ++i;
// i = i + 1;
// a = i;

var  n1 = 10;
var  n2 = 20;

var n = n1++;

console.log("n="+n);
console.log("n1="+n1);


n=++n1;
console.log("n="+n);
console.log("n1="+n1);

n = n2--;
console.log("n="+n);
console.log("n2="+n2);

n=--n2;
console.log("n="+n);


