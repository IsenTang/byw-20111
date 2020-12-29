// * 定时器 & 延时器

// function run(){

//     console.log('run执行');

//     // * 清除定时器
//     clearInterval(intervalId1);
// }

// * 定时器id
// var intervalId1 = setInterval(run,1000);

// console.log('intervalId1',intervalId1);

// var intervalId2 = setInterval(function(){

//     console.log('second run');
// },5000);

// console.log('intervalId2',intervalId2);


var id = setTimeout(function(){

    console.log('run');

},1000)

console.log('id ===>',id);

clearTimeout(id);

// cron