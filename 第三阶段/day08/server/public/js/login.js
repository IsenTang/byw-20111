let nameEle = document.getElementsByClassName('name')[0]
let passwordEle = document.getElementsByClassName('password')[0]
let btnEle = document.getElementsByClassName('login')[0]

btnEle.onclick = ()=>{

  $.ajax({
    type:'post',
    url:'http://localhost:3000/userLogin',
    data:{
      name:nameEle.value,
      password:passwordEle.value
    },
    success:(result)=>{

      if(result.status === 'success'){
        location.href = '/'
      }else{
        alert(result.message)
      }
      
    }
  })
}