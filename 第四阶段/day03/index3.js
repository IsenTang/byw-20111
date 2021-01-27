const _ = require('lodash')
// * 浅拷贝
// let obj1 = {
//     name:'isen',
//     age:28,
//     obj:{
//         a : 1
//     }
// }
// let obj2 = Object.assign({},obj1);
// // let obj2 = obj1;

// obj1.name = 'tom';
// obj1.obj.a = 2;
// console.log(obj1);
// console.log(obj2);
// console.log(obj1 === obj2);

// * 深拷贝
let obj1 = {
    name : 'zhangsan',
    age :  '18',
    language : [1,[2,3],[4,5]],
    obj:{
        a:1
    },
    a : function(){

        console.log('123');
    }
};

// // let obj2 = obj1;
// console.log('obj1: ', obj1);
// let obj2 = JSON.parse(JSON.stringify(obj1));
// console.log(obj2);
let obj2 = _.cloneDeep(obj1);
console.log(obj2);

