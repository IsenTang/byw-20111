// function a(){

//     function b(){

//         console.log('b');
//         function c(){

//             console.log('cccc');
//         }

//         c();
//     }

//     b();
// }

// a();

// function Stack(){

//     this.data = [];

//     this.push = function(ele){

//         this.data.push(ele);
//     }

//     // * 弹出
//     this.pop = function(){

//         this.data.pop();
//     }

//     this.top = function(){

//         return this.data[this.data.length - 1];
//     }

//     this.isEmpty = function(){

//         return this.data.length === 0;
//     }

//     this.size = function(){

//         return this.data.length
//     }

//     this.clear = function(){

//         this.data = [];
//     }
// }

// var s = new Stack();

// s.push(1);
// s.push(2);
// // s.pop();
// console.log(s.data);
// console.log(s.top());

function a(){

    var aValue = 'aaaa';

    function b(){

        console.log(aValue);
    }

    // var b = function(){
    //     console.log(aValue);
    // }

    return b;
}

var bFunc = a();
bFunc();

