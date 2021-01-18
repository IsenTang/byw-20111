let usernameELe = document.getElementsByClassName('username')[0]
let passwordELe = document.getElementsByClassName('password')[0]
let rePasswordELe = document.getElementsByClassName('re-password')[0]
let ageELe = document.getElementsByClassName('age')[0]
let genderELe = document.getElementsByClassName('gender')[0]
let btnELe = document.getElementsByClassName('btn')[0]

let userNameChecked = false;
let passwordChecked = false;
let rePasswordChecked = false;
let ageChecked = false;

usernameELe.onblur = function(){

    if(this.value){

        $.ajax({
            type:'get',
            url:'http://localhost:3000/user/checkName',
            data:{
                username:this.value
            },
            success:(result)=>{

                userNameChecked = (result.status === 'success')
                if(!userNameChecked){
                    alert(result.message);
                }

                controlBtnDisabled();
            }
        })
    }
}

passwordELe.onblur = function(){

    if(this.value){

        passwordChecked = checkPassword(this.value);
        if(!passwordChecked){

            alert('密码格式不对');
        }

        controlBtnDisabled();
    }
}

rePasswordELe.onblur = function(){

    rePasswordChecked = (this.value === passwordELe.value)

    if(!rePasswordChecked){
        alert('两次密码不一致');
    }

    controlBtnDisabled();
}

ageELe.onblur = function(){

    ageChecked = !(this.value > 120 || this.value < 0)

    if(!ageChecked){
        alert('年龄不合法');
    }

    controlBtnDisabled();
}

btnELe.onclick = ()=>{

    $.ajax({

        type:'post',
        url:'http://localhost:3000/user/userRegist',
        data:{
            username:usernameELe.value,
            password:passwordELe.value,
            age: ageELe.value,
            gender:genderELe.value
        },
        success:(result)=>{

            if(result.status === 'success'){
                location.href = '/user/login'
            }else{
                alert(result.message);
            }


        }
    })
}

function controlBtnDisabled(){

    btnELe.disabled = !(userNameChecked&&passwordChecked&&rePasswordChecked&&ageChecked)
}

