// ! 作用域

// ! 全局作用域

// var a = 'a';
// console.log(a);
// console.log('window.a ==>',window.a);
// console.log(c);

// ! 局部作用域  函数作用域
// function main(){

//     var b = 'b';
//     console.log(b);

//     console.log(a);

//     function inner(){

//         console.log('inner ===>',a);
//     }

//     inner();
// }

// main();

// console.log(b);

// ! 就近原则
// var a = 'outter a';

// function main(){
    
//     var a = 'inner a';
//     console.log(a);
// }

// main();

// ! 声明提前

// * 变量声明提前
// var a;
// console.log(a);
// a = 1;

// * 函数声明提前
// function main(){
//     console.log('invoked ====>',1);
// }

// var main;
// main();
// var main = function(){
    
//     console.log('invoked ====>',1);
// }

// var a = 10;
// function main(){

//     console.log('a ===>',a); 
//     var a = 1;
// }

// var a = 10;
// function main(){
  
//   console.log('a',a); 
  
//   a = 1;
// }

// main();
// console.log(a);

// * 练习

// var a = 123;
// function main(){
//     console.log(a);
// }

// var a = 123;
// function main(){

//     console.log(a);
//     var a = 1234;
// }

// var a = 123;
// function main(){

//     console.log(a);

//     a = 1234;
// }

// var a = 123;

// function main(a){

//     console.log(a);

//     a = 1234;
// }

// var a = 123;
// function main(a){

//     console.log(a);

//     a = 1234;
// }

// main(1233);

// main();
// console.log(a);