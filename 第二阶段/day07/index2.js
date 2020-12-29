// var ele = document.getElementById('test-wirte');

// console.log(ele);

// var eles = document.getElementsByClassName('main');

// var eles = document.getElementsByTagName('div')
// console.log(eles);

// * 嵌套

// var ele = document.getElementById('test');

// var eles = document.getElementsByClassName('test');

// var ele = eles[0];

// console.log(ele);

// var inputEle = ele.getElementsByTagName('input')
// console.log(inputEle);

// * class 为 test 下面的 class为 main的下面的所有div
// var eles = document.getElementsByClassName('test');

// var ele = eles[0];

// var mainELe = ele.getElementsByClassName('main')[0];
// var divEles = mainELe.getElementsByTagName('div');
// console.log(divEles);


// * css选择器方式
// var elementByCssId = document.querySelector('#test')

// console.log('elementByCssId ==>',elementByCssId)

// var elementByCssClass = document.querySelector('.test')
// console.log('elementByCssClass ==>',elementByCssClass);

// var allElementByCssClass = document.querySelectorAll('.test')
// console.log('allElementByCssClass ==>',allElementByCssClass);


var mainEle = document.getElementById('main');
var childrenNodes = mainEle.childNodes;

console.log(childrenNodes)
for(var i = 0; i< childrenNodes.length;i++){

    if(childrenNodes[i].nodeType === 1 && childrenNodes[i].className.includes('red')){

      childrenNodes[i].style.backgroundColor = 'yellow';
    }
    // console.log(childrenNodes[i]);
}

var eles = document.getElementsByClassName('content red');
console.log(eles);

for(var i = 0; i< eles.length ; i++){

    eles[i].style.backgroundColor = 'green'
}