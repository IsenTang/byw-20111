// * let/const/var

// var a = 1;
// * block(块)作用域
// {
//     // var a = 1;
//     let a = 1;
// }

// console.log('a ===>',a);

let array = [];
for(let i =0;i<10;i++){

    array[i] = function(){

        console.log(i);
    }
}
array[7]();

// {
//     let i = 0;
//     // let i = 0;
//     i++;
//     if(i<10){
//        array[i] = function(){

//         console.log(i);
//         } 
//     }
// }
// {
//     i++;
//     if(i<10){
//        array[i] = function(){

//         console.log(i);
//         } 
//     }
// }
//     i++;
//     if(i<10){
//        array[i] = function(){

//         console.log(i);
//         } 
//     }
// // }

// * 禁止声明提前
// var a;
// console.log(a);
// a = 1;

// console.log(a);
// let a = 1;

// * 暂时性死区
// var tmp = 123;

// if (true) {
//   tmp = 'abc'; // ReferenceError
//   let tmp;
// }

// * 不允许重复声明
// let a = 1;
// let a = 2; 
// console.log(a);


const a = 1;
// a = 2;

const obj = {
    a : 1,
    b : 2
}

obj.a = 'a';
console.log(obj);



