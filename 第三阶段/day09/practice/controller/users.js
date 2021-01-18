const userService = require('../services/users');

//* login页面
async function login(ctx,next){

    await ctx.render('login');
}

// * regist页面
async function regist(ctx,next){

    await ctx.render('regist');
}

// * 检查用户名
async function  checkName(ctx,next){

    const { username } = ctx.request.query;

    let data = {
        status : 'success'
    }
    if(!userService.checkNamePattern(username)){

        data.status = 'failed';
        data.message = '用户名不符合要求'
    }else{

        const result = await userService.checkNameDuplicate(username);

        if(result){
            data.status = 'failed';
            data.message = '用户名重复'
        }
    }

    ctx.response.body = data;
}

// * 用户注册
async function userRegist(ctx,next){

    const { username , password , age , gender } = ctx.request.body;

    let data = {
        status : 'success'
    }

    if(!userService.checkNamePattern(username)){
        data.status = 'failed';
        data.message = '用户名不符合要求'
    }
    else if(!userService.checkPasswordPattern(password)){
        data.status = 'failed';
        data.message = '密码不符合要求'
    }else if(!userService.checkAge(age)){
        data.status = 'failed';
        data.message = '年龄不合法'
    }else{

        const result = await userService.checkNameDuplicate(username);

        console.log('result ===>',result);
        if(result){
            data.status = 'failed';
            data.message = '用户名重复'
        }else{
            await userService.saveUser({
                username , password , age , gender
            });
        }
        
    }
    ctx.response.body = data;
}

async function userLogin(ctx,next){

    const { username , password } = ctx.request.query;

    let data = {
        status : 'success'
    }

    if(!userService.checkNamePattern(username)){
        data.status = 'failed';
        data.message = '用户名不符合要求'
    }
    else if(!userService.checkPasswordPattern(password)){
        data.status = 'failed';
        data.message = '密码不符合要求'
    }else{
        const result = await userService.userLogin({ username , password });

        if(!result){
            data.status = 'failed';
            data.message = '用户名密码不匹配'
        }else{
            data.id = result._id
        }
    }

    ctx.response.body = data;
}

async function userInfo(ctx,next){

    const { id } = ctx.request.query;

    const result = await userService.getUserInfo(id);

    console.log(result);
    await ctx.render('userInfo',{ 
        name: result.username,
        gender: result.gender,
        age: result.age
    });
}


module.exports = {
    regist,
    login,
    checkName,
    userRegist,
    userLogin,
    userInfo
}