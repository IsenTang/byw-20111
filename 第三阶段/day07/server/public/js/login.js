let usernameEle = document.getElementsByClassName('username')[0]
let passwordEle = document.getElementsByClassName('password')[0]
let btnEle = document.getElementsByClassName('btn')[0]
let testBtnEle = document.getElementsByClassName('test-btn')[0]
init()
// $.cookie('local','local set',{expires:1})

// console.log('cookie ===>',$.cookie('local'))

// console.log('http cookie ===>',$.cookie('user'))

btnEle.onclick = ()=>{

  $.ajax({

    type:'post',
    url:'http://localhost:3000/userLogin',
    data:{
      name:usernameEle.value,
      password: passwordEle.value
    },
    success:()=>{

      alert('登陆成功')
    }
  })
}


testBtnEle.onclick = ()=>{

//   $.ajax({

//     type:'post',
//     url:'http://localhost:3000/test',
//     data:{},
//     success:(result)=>{
    
//       console.log(result)

//       $.removeCookie('the_cookie', { path: '/' })
//     }
//   })

  $.removeCookie('formData', { path: '/' })
}


usernameEle.onblur = function(){

  let data = {
    username:usernameEle.value,
    password:passwordEle.value
  }
  if(this.value){
    $.cookie('formData',JSON.stringify(data),{expires:1})
  }
}

passwordEle.onblur = function(){

  let data = {
    username:usernameEle.value,
    password:passwordEle.value
  }
  if(this.value){
    $.cookie('formData',JSON.stringify(data),{expires:1})
  }
}

function init(){

  if($.cookie('formData')){
    let data = JSON.parse($.cookie('formData'))

    console.log(data)
    if(data.username){
      usernameEle.value = data.username
    }

    if(data.password){
      passwordEle.value = data.password
    }
  }
  
}