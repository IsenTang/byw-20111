let nameEle = document.getElementsByClassName('name')[0]
let passwordEle = document.getElementsByClassName('password')[0]
let btnEle = document.getElementsByClassName('regist')[0]

btnEle.onclick = ()=>{

  $.ajax({
    type:'post',
    url:'http://localhost:3000/userRegist',
    data:{
      name:nameEle.value,
      password:passwordEle.value
    },
    success:()=>{

      location.href = '/login'
    }
  })
}