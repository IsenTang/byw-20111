// function a(){
//     b();
//     console.log('a run');
// }

// function b(){
//     c();
//     console.log('b run');
// }   

// function c(){
//     console.log('run');
// }

// a();

// setTimeout(function () {
//     console.log(1);
// },0);

// new Promise(function(resolve,reject){
//     console.log(2)
//     resolve(3)
// }).then(function(val){
//     console.log(val);
// })

// console.log(4);

// function main(){
//     console.log('main');
//     a();
// }
// function a(){
//     console.log('a');
//     b();
// }
// function b(){
//     console.log('b');
//     setTimeout(function(){
        
//         console.log(' timeout ');
//     },0)
//     console.log(' b done !');
// }

// main()

// console.log(1)

// setTimeout(() => {
//   console.log(2)
// }, 0)

// Promise.resolve().then(() => {
// 	console.log(3)
// }).then(() => {
// 	console.log(4)
// }).catch((error)=>{
  
//   console.log(error);
// })

// console.log(5)

async function async1(){
    console.log('async1 start')
  	try{
      await async2();
  	  console.log('async1 end');
    }catch(e){
      
    }   
}

async function async2(){
    console.log('async2')
}

console.log('script start')

setTimeout(function(){
    console.log('setTimeout') 
},0)  

async1();

new Promise(function(resolve){
    console.log('promise1')
    resolve();
}).then(function(){
    console.log('promise2')
})
console.log('script end')



