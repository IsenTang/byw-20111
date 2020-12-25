// ! this

// function main(){

//     console.log(this);
// }


// main();
// var name = 'window name';
// console.log(window.name);

// function sayName(){

//     console.log(this);
//     console.log(this.name);
// }

// var obj1 = {
//     name : 'obj1 name',
//     say : sayName
// }

// var obj2 = {
//     name : 'obj2 name',
//     say : sayName
// }

// obj1.say();
// obj2.say();

// window.sayName();

// var a = 1;

// console.log(a)
// console.log(window.a);


var a = 'aaaaaaa';

// (function (){
// 	console.log(this.a);
// })()

// var obj = {

// 	func : function(){
            
//         console.log(this);
// 		(function(){

// 			console.log(this.a);
// 		})()
//     },
//     value : 1	
// }

// obj.func();

// function foo() { 
//     console.log(this.bar); 
// } 

// var bar = "bar1";
// console.log(window.bar); 
// var o2 = {bar: "bar2", foo: foo}; 
// var o3 = {bar: "bar3", foo: foo}; 

// window.foo();  // ===>  bar1        
// o2.foo();   // ===> bar2      
// o3.foo();   // ===> bar3

// var foo = 'foo'
// // console.log(window.foo);

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this; // ===> {}
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };

// var func1 = myObject.func;
// myObject.func(); // ===> bar, bar , foo, bar

// window.func1(); // ===> foo, foo , foo , foo