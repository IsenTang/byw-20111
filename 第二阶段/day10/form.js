var usernameFlag = false;
var passwordFlag = false;

$('.username').blur(checkUsername);
$('.password').blur(checkPassword);

$('.btn').click(function(){

    alert('提交');
}); 

function checkUsername(e){

    var value = e.target.value;

    var reg = /^[0-9a-zA-Z_-]{4,16}$/

    usernameFlag = reg.test(value);
    if(reg.test(value)){

        $('.username-warning').css('display','none');

    }else{
        $('.username-warning').css('display','flex');
        $('.username-warning').text('用户名出错');
    }

    controlBtnDisabled();
}

function checkPassword(e){
    
    var value = e.target.value;

    var reg = /^[0-9a-zA-Z_]{8,15}$/

    passwordFlag = reg.test(value);

    if(reg.test(value)){

        $('.password-warning').css('display','none');
    }else{
        $('.password-warning').css('display','flex');
        $('.password-warning').text('密码出错');
    }
    
    controlBtnDisabled();
}

function controlBtnDisabled(){

    // btnEle.disabled = !(usernameFlag && passwordFlag)
    $('.btn').attr('disabled',!(usernameFlag && passwordFlag))
}