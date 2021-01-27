function f1(){
　　　　let n = 999;

　　　　return function f2(){
　　　　　　console.log(n);
　　　　}
　　　　
}

// let func = f1();

// func();

// console.log(n);


// function main(){

//     let a = 1;
//     console.log(a);
// }

// main();

// function main(){
  
//     let obj1 = { t:1};  
//     let obj2 = { t:2};
    
//     obj1.a = obj2;
//     obj2.a = obj1;
    
//     console.log(obj1);
//     console.log(obj2);
// }

// main();

// let array = [];
// for(var i=0;i<10;i++){

//     array[i] = setFunction(i)

    // array[i] = function(){

    //     console.log(i);
    // }

    // array[i] = (function(ii){

    //     return function(){

    //         console.log(ii);
    //     }
    // })(i)

// }
// array[2]();

// function setFunction(ii){

//     return function(){

//         console.log(ii);
//     }
// }

// function main(){

//     arguments;
// }

// main(1,2,3)

// function fn1() {
// 	var name = 'iceman';
// 	function fn2() {
// 		console.log(name);
// 	}
// 	return fn2;
// }
// var fn3 = fn1();
// fn3();

// function aaModule() {

//     let aGlobal = 1;

//     function aa(){

//         console.log(aGlobal);
//     }

//     return {
//         aa
//     };
// }

// let m = aaModule();
// m.aa();

// function module() {
//     let inner = 1;
//     let increaseInner = function() {
//         inner = 3333;
//     }
//     let decreaseInner = function() {
//         inner--;
//     }
//     let getInner = function() {
//         return inner;
//     }
//     return {
//         increaseInner,
//         decreaseInner,
//         getInner
//     }
// }
// let api = module();
// console.log(api.getInner());
// api.increaseInner();
// console.log(api.getInner());
// api.decreaseInner();
// console.log(api.getInner());

// function Person(name) {
//     this.name = name
//     this.getName = function() {
//        console.log(this.name);
//     }
// }

// const p = new Person('isen');

// p.getName();

function Queue() {
    this.data = [];
    this.push = push; //添一个或多个元素到栈顶
    this.shift = shift; //移除队头的元素，同时返回被移除的元素
    this.front = front; //返回top元素
    this.isEmpty = isEmpty; //判断栈是否为空，空返回true，否则返回false
    this.clear = clear; //移除栈里的所有元素
    this.size = size;

    function push(ele) {
        this.data.push(ele);
    }

    function shift() {
        return this.data.shift(); //利用数组的shift()方法来达到移除队头的元素，同时返回被移除的元素
    }

    function front() {
        return this.data[0];
    }

    function isEmpty() {
        return this.data.length === 0;
    }

    function size() {
        return this.data.length;
    }

    function clear() {
        this.data = [];
    }
}


const q1 = new Queue();

console.log(q1);