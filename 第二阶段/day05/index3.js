// * 工厂化创建创建对象

var obj1 = {
    name : 'isen'
}

var obj2 = {
    name : 'lucy'
}

function createPerson(v){

    return {
        name : v
    }
}

console.log(createPerson('isen'))

console.log(createPerson('lucy'));