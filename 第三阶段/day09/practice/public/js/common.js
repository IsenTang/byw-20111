function checkPassword(password){

    const pattern = /^[0-9a-zA-Z]{8,16}$/

    return pattern.test(password)
}   

function checkUsername(name){

    const pattern = /^[0-9a-zA-Z-_]{4,16}$/

    return pattern.test(name)
}  