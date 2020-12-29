var inputEle = document.getElementsByClassName('main')[0];

// * 变化
inputEle.onchange = function(e){

    var value = e.target.value;

    console.log('onchange ==>',value);
}

inputEle.onfocus = function(e){

    var value = e.target.value;

    console.log('onfocus ==>',e);
}

inputEle.onblur = function (e){

    var value = e.target.value;

    console.log('onblur ==>',value);
}

inputEle.onkeydown = function(e){
    // console.log(e);

    if(e.keyCode === 13 ){

        console.log('Enter');
    }
}

// var containerEle = document.getElementsByClassName('container')[0];

// containerEle.onmouseover = function(){

//     console.log('onmouseover');
// }

// containerEle.onmouseout = function(){

//     console.log('onmouseout');
// }

// containerEle.onmousemove = function(){

//     console.log('onmousemove');
// }


