const userController = require('../controller/users');

module.exports =  (router) => {

  // * 注册页面
  router.get('/user/regist', userController.regist)

  router.get('/user/checkName', userController.checkName)

  router.post('/user/userRegist',userController.userRegist)
  // * 登陆页面
  router.get('/user/login', userController.login)

  router.get('/user/userLogin', userController.userLogin)

  // * 信息页面
  router.get('/user/info', userController.userInfo)
}
