const _ = require('lodash');

// let array = [1,3,4,5]
// console.log(_.indexOf(array,3))

// var array = [1, 2, 3, 4];
// var evens = _.remove(array, function(n) {
//   return n % 2 == 0;
// });

// console.log(evens)

// _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
//     console.log('key',key);
//     console.log('value: ', value);
// });

// var users = [
//     { 'user': 'barney', 'age': 36, 'active': true },
//     { 'user': 'fred',   'age': 40, 'active': false }
// ];

// console.log(_.filter(users, function(o) { return o.age === 40; }))

// users.filter(function(item){

//     return item.age === 40 ;
// })

// console.log(_.filter(users, { 'age': 36, 'active': true }));

// users.filter(function(item){

//     return item.age === 36 && item.active === true ;
// })

// const users = [
//        { 'user': 'barney', 'age': 36, 'active': true },
//        { 'user': 'fred',   'age': 40, 'active': false },
//        { 'user': 'isen',   'age': 36, 'active': false }
// ];

// console.log(_.groupBy(users,'active'))

// function square(n) {
//      return n * n;
// }

// console.log(_.map([4, 8], square));

// var users = [
//     { 'user': 'barney' },
//     { 'user': 'fred' }
// ];

// console.log(_.map(users, 'user'));
// _.map(users,(item)=>{

//     return item.user
// })

// var users = [
//     { 'user': 'fred',   'age': 48 },
//     { 'user': 'barney', 'age': 36 },
//     { 'user': 'fred',   'age': 40 },
//     { 'user': 'barney', 'age': 34 }
// ];
   
// // console.log(_.sortBy(users, [function(o) { return o.age; }]))

// console.log(_.sortBy(users, ['user', 'age']));

// var users = [
//     { 'user': 'fred',   'age': 48 },
//     { 'user': 'barney', 'age': 34 },
//     { 'user': 'fred',   'age': 40 },
//     { 'user': 'barney', 'age': 36 }
// ];


// console.log(_.orderBy(users, ['user', 'age'], ['asc', 'desc']));

var users = [
    { 'user': 'barney',  'age': 36 },
    { 'user': 'fred',    'age': 40 },
    { 'user': 'pebbles', 'age': 1 }
];

var youngest = _
.chain(users)
.sortBy('age')
.map(function(o) {
    return o.user + ' is ' + o.age;
})
.head()
// .value();

console.log(youngest);
// console.log(_.chain(users).sortBy('age').map((item)=>{
//     return item.user + ' is ~~~~' + item.age; 
// }).head().value())

// let users = [
//        {
//            name:'tom',
//            score:80,
//            class:'A'
//        },
//        {
//            name:'lucy',
//            score:90,
//            class:'A'
//        },
//        {
//            name:'nacy',
//            score:83,
//            class:'B'
//        },
//        {
//            name:'jack',
//            score:84,
//            class:'A'
//        },{
//            name:'lily',
//            score:91,
//            class:'A'
//        }
// ]

// let result = _.orderBy(users,['score'],['desc']);

// result = result.map((item)=>{

//     return _.omit(item,['class']);
// })

// let result = _.chain(users)
// .orderBy(['score'],['desc'])
// .map((item)=>{
//     return _.omit(item,['class']);
// })

// console.log(result);


// * 链式调用原理
function Chain(data){
 this.data = data;
 this.push = function(v){

   this.data.push(v)
   return this;
 }
 this.pull = function(v){

   this.data.unshift(v)
   return this;
 }
 this.value = function(){
   return this.data;
 }
}
let chain = new Chain([]);

console.log(chain.push(1).push(2).push(3).value());