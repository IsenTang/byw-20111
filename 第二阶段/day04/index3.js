
// * 高阶函数
function main(a,b,func){

    return func(a) + func(b);
}

function f(a){

    return a + 1;
}

console.log(main(1,2,f));
