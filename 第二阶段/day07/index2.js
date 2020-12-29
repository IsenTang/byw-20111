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


// var mainEle = document.getElementById('main');
// var childrenNodes = mainEle.childNodes;

// console.log(childrenNodes)
// for(var i = 0; i< childrenNodes.length;i++){

//     if(childrenNodes[i].nodeType === 1 && childrenNodes[i].className.includes('red')){

//       childrenNodes[i].style.backgroundColor = 'yellow';
//     }
//     // console.log(childrenNodes[i]);
// }

// var eles = document.getElementsByClassName('content red');

// for(var i = 0; i< eles.length ; i++){

//     eles[i].style.backgroundColor = 'green'
// }

// * 获取属性 (attribute)
// var ele = document.getElementById('input');
// // ===> { value:'123',type:'text'...... }
// // * get set  
// console.log(ele.getAttribute('type'));

// setTimeout(function(){

//     ele.setAttribute('value','after-set')
//     ele.value = '直接修改'
// },2000)

// console.log('value ===>',ele.value);
// ! 只要DOM树发生变化，就会触发rerender（重新渲染）

// * 写入元素
// var ele = document.getElementById('test-wirte');

// // var ele = document.getElementById('test');

// setTimeout(function(){
//     // ele.innerHTML = '<div>123</div>';
//     console.log(ele.innerText);
//     ele.innerText = '<div>123</div>';
// },2000)

// var para = document.createElement('p');

var parent = document.getElementById('parent');

// parent.appendChild(para);

// para.innerText = 'hello'

parent.innerHTML = '<p>hello</p>';

parent.innerHTML += '<p>world</p>';

console.log(parent.innerHTML);

// var txt = document.createTextNode('hello world');

// para.appendChild(txt);
