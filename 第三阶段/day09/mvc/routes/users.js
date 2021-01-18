const userController = require('../controller/users')

module.exports =  (router) => {

  router.get('/user', userController.user)

  router.get('/regist', userController.regist)

  router.post('/userRegist',userController.userRegist)

  router.get('/login', userController.login)

  router.post('/userLogin',userController.userLogin)
  
}
