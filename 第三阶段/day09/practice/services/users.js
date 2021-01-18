const { findOne,create } = require('../models/users');

function checkNamePattern(name){

    const pattern = /^[0-9a-zA-Z_-]{4,16}$/
    return  pattern.test(name);
}

async function checkNameDuplicate(name){

    return await findOne({ query : { username : name}});
}

function checkPasswordPattern(password){

    const pattern = /^[0-9a-zA-Z]{8,15}$/
    return  pattern.test(password);
}

function checkAge(age){

    return  !(Number(age) > 120 || Number(age) < 0)
}

async function saveUser(data){

    await create(data);
}

async function userLogin({ username , password }){

    return await findOne({ query: { username,password }});
}

async function getUserInfo(id){

    return await findOne({ query: { _id: id }}); 
}

module.exports = {
    checkNamePattern,
    checkNameDuplicate,
    checkPasswordPattern,
    checkAge,
    saveUser,
    userLogin,
    getUserInfo
}