let ageEle = document.getElementsByClassName('age')[0]
let btnEle = document.getElementsByClassName('next-btn')[0]



btnEle.onclick = ()=>{

  let value = ageEle.value

  if(value){

    $.removeCookie('formData',{ path:'/'})
    location.href = '/login'
  }
}