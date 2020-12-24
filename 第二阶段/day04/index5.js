// function main(){

//     console.log('main');
// }

// main();
// var a = 1;

// (function(){

//     console.log(a)
//     var b = 'b'
//     console.log('立即执行 main');
// })()

// console.log(b)

// var arr = [];

// for(var i=0; i<6; i++){

//     arr[i] = function(){
//         console.log(i); 
//     }
// }

// arr[0]();

// var i = 0;
// arr[i] = function(){
//     console.log(i);
// }

// arr[i]();
// i++;
// // if(i<6)
// arr[i] = function(){

//     console.log(i);
// }

// arr[i]();
// i++;

// arr[i] = function(){

//     console.log(i);
// }
// i++;
// if(i<6)
// console.log('i===>',i);

// var arr = [];

// for(var i=0; i<6; i++){

//     (function(ii){

//         arr[ii] = function(){
//             console.log(ii) 
//         }
//     })(i)
// }

// console.log(' global i ====>', i);
// arr[2]();
// function setFunction(v){

//     arr[v] = function(){

//         console.log(v);
//     }
// }
// var i = 0;
// setFunction(i);

// i++;
// setFunction(i);

// i++;
// setFunction(i);

// arr[0]();
// arr[1]();


var array = [];
// 为什么？
for(var i=0; i<6; i++){
  array[i] = function(){
    console.log(i) 
  }

  array[i]();
}

array[0]();
array[1]();