function test(){

    var containerEle = document.getElementsByClassName('practice-container')[0];
    containerEle.style.width = '300px';

    containerEle.innerHTML =    "<div class=\"test\">" +
                                    "<span>用户名：</span><input/>"+
                                "</div>"+
                                "<div class=\"test\">"+
                                    "<span>密码：</span><input type=\"password\"/>"+
                                "</div>"
}

// function onclick(){
//     console.log('点击');
// }

// function click(){

//     console.log('点击');
// }

// * ===> 假设一个window对象

// var window = {
//     document:{
//         button : {

//             onclick:function(){

//             }
//         }
//     },
//     onclick:function(){

//     }
// }
// * 元素上直接写

// * 2
// var btnEle = document.getElementsByClassName('btn')[0]

// btnEle.onclick = test;

// * 3 addEventListener 
var ele =  document.getElementsByClassName('btn')[0];
ele.addEventListener('click',test)
