// * 原生的方法
var ele = document.getElementById('test');

document.getElementsByClassName('test');

// * 类选择器
$('.test')

// * id选择器
$('#test');

// * 元素选择器
$('div')
document.getElementsByTagName('div');

// * 层级选择器
$('.test > div');
// console.log('===>', $('.test > div'));

$(".test div");
// console.log('===>', $('.test div'));

// * 过滤
// console.log($('div:empty'));

// console.log($("div:contains('123')"));

// * 属性操作
var inputEle = document.getElementById('input');
inputEle.getAttribute('value');

// inputEle.value;
$('#input').attr('value');
console.log('value ==>',$('#input').attr('value'));

inputEle.setAttribute('value','.....');
$('#input').attr('value',function(){
    return 'after-set';
});

$('#input').removeAttr('value');

// * 事件
// var btnEle = document.getElementById('btn');
// btnEle.onclick = function(){
    
// }
// $('#btn').click(function(){

//     console.log(11);
// })

// * html注入
// var parentEle = document.getElementById('parent');
// parentEle.innerText = '<div>123</div>';
// parentEle.innerHTML = '<div>123</div>';
// $('#parent').html('<div>123</div>');
$('#parent').text('<div>123</div>');

// var inputEle = document.getElementById('input');
// inputEle.onkeydown = function(){

//     console.log('onkeydown');
// }

// inputEle.onkeypress = function(){

//     console.log('onkeypress');
// }

// inputEle.onkeyup = function(){

//     console.log('onkeyup');
// }

// inputEle.onchange = function(e){

//     console.log('value ===>',e.target.value)
// }


