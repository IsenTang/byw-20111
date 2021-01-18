let usernameELe = document.getElementsByClassName('username')[0]
let passwordELe = document.getElementsByClassName('password')[0]
let btnELe = document.getElementsByClassName('btn')[0]


btnELe.onclick = ()=>{

    let username = usernameELe.value;

    let password = passwordELe.value;

    if(!checkUsername(username)){

        alert('用户名不符合要求');
    }else if(!checkPassword(password)){
        alert('密码不符合要求');
    }else{

        $.ajax({
            type:'get',
            url:'http://localhost:3000/user/userLogin',
            data:{
                username,
                password
            },
            success: (result)=>{

                if(result.status === 'success'){
                    location.href = `/user/info?id=${result.id}`
                }else{
                    alert(result.message);
                }
            }
        })
    }
}