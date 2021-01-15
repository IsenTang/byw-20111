let passwordEle = document.getElementsByClassName('password')[0]
let rePasswordEle = document.getElementsByClassName('rePassword')[0]
let btnEle = document.getElementsByClassName('next-btn')[0]

btnEle.onclick = ()=>{

  if(passwordEle.value && rePasswordEle.value){

    if(passwordEle.value === rePasswordEle.value){

      let data = $.cookie('formData') // ===> { step: 1, username:'...'}

      if(data){

        data = JSON.parse(data)

        data.password = passwordEle.value

        data.step = 2

        $.cookie('formData',JSON.stringify(data))

        console.log(JSON.parse($.cookie('formData')))

        location.href = '/userinfoRegist'
      }
    }else{

      alert('两次密码不一致')
    }
  }
}

function init(){
  let data = $.cookie('formData') // ===> { step: 1, username:'...'}

  if(data){

    data = JSON.parse(data)

    if(data.password){

      passwordEle.value = data.password
      rePasswordEle.value = data.password
    }

  }
}

init()