var obj1 = {};

var obj2 = new Object();

// ! 构造函数
// * 1. 创建了一个新对象
// * 2. this ---> 新对象
// * 3. 执行构造函数里面剩下的代码
// * 4. 返回this
function Person(name,age){
    // this ===> {}
    console.log('this ===>',this);
    this.name = name;
    this.age = age;
    this.val = 1;
}

Person();
var p1 = new Person('isen',28);

console.log('p1 ===>',p1);
console.log(p1 instanceof Person);

// person();

// new person();
