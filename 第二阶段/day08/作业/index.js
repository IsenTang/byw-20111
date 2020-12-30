var usernameEle = document.getElementsByClassName('username')[0];
var passwordEle = document.getElementsByClassName('password')[0];
var usernameWarnEle = document.getElementsByClassName('username-warning')[0];
var passwordWarnEle = document.getElementsByClassName('password-warning')[0];
var btnEle = document.getElementsByClassName('btn')[0];

var usernameFlag = false;
var passwordFlag = false;

usernameEle.onblur = checkUsername;
passwordEle.onblur = checkPassword;
btnEle.onclick = function(){

    alert('提交');
}

function checkUsername(e){

    var value = e.target.value;

    var reg = /^[0-9a-zA-Z_-]{4,16}$/

    usernameFlag = reg.test(value);
    if(reg.test(value)){

        usernameWarnEle.style.display = 'none'
    }else{
        usernameWarnEle.style.display = 'flex'
        usernameWarnEle.innerText = '用户名出错'
    }

    controlBtnDisabled();
}

function checkPassword(e){
    
    var value = e.target.value;

    var reg = /^[0-9a-zA-Z_]{8,15}$/

    passwordFlag = reg.test(value);

    console.log('passwordFlag ==>',passwordFlag);
    if(reg.test(value)){

        passwordWarnEle.style.display = 'none'
    }else{
        passwordWarnEle.style.display = 'flex'
        passwordWarnEle.innerText = '密码出错'
    }
    
    controlBtnDisabled();
}

function controlBtnDisabled(){

    console.log('usernameFlag',usernameFlag)
    console.log('passwordFlag',passwordFlag);
    console.log(!usernameFlag && !passwordFlag);
    btnEle.disabled = !(usernameFlag && passwordFlag)

}