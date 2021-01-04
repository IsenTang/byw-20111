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