// * 1
// var sum = 0;
// for(var i = 0; i<=100;i++){

//     if(i % 2 !==0){
//        // sum += i;
//        sum = sum + i;
//     }
// }
// console.log("sum ==>",sum);

// * 2
// var str = '1234';

// // console.log(str.charAt(0));
// // console.log(str.length);
// var result = '';
// for(var i = str.length - 1; i>=0; i--){

//     result += str.charAt(i)
// }

// console.log(result)

// * 3
var num = 153;
// console.log(String(num).charAt(2));

console.log(parseInt(153 / 100)); // 百分位
console.log(parseInt(153 % 100 / 10)) // 十分位
console.log(153%10)

for(var i = 100; i<=999 ; i++){
    // 百分位
    var a = parseInt(i / 100);

    // 十分位
    var b = parseInt(i % 100 / 10)

    // 个位
    var c = i % 10;

    if(
        (a*a*a + b*b*b + c*c*c) === 
        (a*100 + b*10 + c)
      )
    {
       console.log(a*100 + b*10 + c); 
    }
}