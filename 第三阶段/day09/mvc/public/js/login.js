let usernameELe = document.getElementsByClassName('username')[0]
let passwordELe = document.getElementsByClassName('password')[0]
let btnELe = document.getElementsByClassName('btn')[0]

btnELe.onclick = ()=>{

  $.ajax({
    type:'post',
    url:'http://localhost:3000/userLogin',
    data:{
      username:usernameELe.value,
      password:passwordELe.value,
    },
    success:(result)=>{

      if(result.status === 'failed'){

        alert(result.message)
      }else{
        location.href='/info'
      }
    }
  })
}