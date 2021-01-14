let usernameEle = document.getElementsByClassName('username')[0]
let ageEle = document.getElementsByClassName('age')[0]
let genderEle = document.getElementsByClassName('gender')[0]
let passwordEle = document.getElementsByClassName('password')[0]
let rePasswordEle = document.getElementsByClassName('rePassword')[0]
let btnEle = document.getElementsByClassName('btn')[0]

let usernameChecked = false
let usernameDuplicateChecked = false
let passwordChecked = false
let rePasswordChecked = false

$.cookie('test','123')

console.log($.cookie('test'))
usernameEle.onblur = function(){

  const pattern = /^[a-zA-Z0-9_-]{4,16}$/

  usernameChecked = pattern.test(this.value)

  if(!usernameChecked){

    alert('用户名不对')
  }else{
    $.ajax({
      type:'get',
      url:'http://localhost:3000/checkName',
      data:{
        username:this.value
      },
      success:(result)=>{

        usernameDuplicateChecked = (result.status === 'success')
        if(!usernameDuplicateChecked){
          alert('用户名已经存在')
        }

        controlBtnDisabled()
      }
    })
  }

  controlBtnDisabled()
}

passwordEle.onblur = function(){

  const pattern = /^[a-zA-Z0-9_]{8,15}$/
  
  passwordChecked = pattern.test(this.value)
  
  if(!passwordChecked){
  
    alert('密码格式不对')
  }

  controlBtnDisabled()
}

rePasswordEle.onblur = function(){


  rePasswordChecked = (passwordEle.value === this.value)
    
  if(!rePasswordChecked){
    
    alert('两次密码输入不一致')
  }

  controlBtnDisabled()
}

function controlBtnDisabled(){

  btnEle.disabled = !(rePasswordChecked&&passwordChecked&&usernameChecked&&usernameDuplicateChecked)
}

btnEle.onclick = function(){

  let username = usernameEle.value
  let age = ageEle.value
  let index = genderEle.selectedIndex

  let gender = genderEle.options[index].value
  let password = passwordEle.value

  $.ajax({
    type:'get',
    url:'http://localhost:3000/userRegist',
    data:{
      username,
      age,
      gender,
      password
    },
    success:(result)=>{

      if(result.status === 'success'){
        
        location.href = `/userinfo?username=${username}&age=${age}&gender=${gender}`
      }else{
        alert(result.message)
      }
    }
  })
}