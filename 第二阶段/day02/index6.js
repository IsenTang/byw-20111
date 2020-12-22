true ? console.log(111) : console.log(2);

1 > 2 ? console.log('1大') : console.log('2大');


var a = 300;
var b = 200;
var c = 100;
var max = a > b ? (a > c ? a : c ) 
                :  (b > c ? b : c );

console.log(max);