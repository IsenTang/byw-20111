let usernameEle = document.getElementsByClassName('username')[0]
let btnEle = document.getElementsByClassName('next-btn')[0]

usernameEle.onblur = function(){

  if(this.value){

    $.ajax({
      type:'get',
      url:'http://localhost:3000/checkName',
      data:{
        name:this.value
      },
      success:(result)=>{
  
        btnEle.disabled = (result.status === 'failed')
        if (result.status === 'failed'){

          alert(result.message)
        }
      }
    })
  }
}

btnEle.onclick = ()=>{

  let data = {
    step:1,
    usrname:usernameEle.value
  }
  $.cookie('formData',JSON.stringify(data),{ path : '/' })

  console.log($.cookie('formData'))
  location.href = '/passwordRegist'
}

function init(){

  let data =  $.cookie('formData')

  if(data){

    data = JSON.parse(data)

    if(data.usrname){

      usernameEle.value =  data.usrname
      btnEle.disabled = false
    }
  }
}

init()