var person = {
    name : 'isen',
    sayName: function (a){
      console.log(this.name);
      console.log('a ===>',a)
    }
}

// var person2 = {
//     name : 'Tom'
// }

// person.sayName.call(person2,'aaaa');
// person.sayName.apply(person2,['bbbbbbb'])

// person.sayName.bind(person2,'aaaaa')();
// person.sayName();

// person.sayName.call(person2);

// person.sayName.apply(person2);


Math.max(1,2,3,4,5,6,7);


// * apply
const max = Math.max.apply(person,[1,2,3,4,5,6,7]);

console.log(max)

