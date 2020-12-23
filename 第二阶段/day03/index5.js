
// * 循环语句
// for(var i = 1; i <= 10; i++ ){
//     // console.log(i);
//     // console.log('加油');
// }

// * break
// for(var i = 0; i < 10; i++ ){
//     // if(i <= 5){
//     //     console.log(i);
//     // }
//     console.log(i);
//     if(i > 4){
//         break;
//     }
//     console.log('执行次数===>',i);
// }

var array = 
["王梓人",
"孙善成",
"方启豪",
"李杨",
"邓易晴",
"狄春燕"];

for(var i = 0; i < array.length; i++ ){

    console.log(array[i]);
    if(array[i] === '李杨'){
        console.log(array[i]);
        break;
    };
}

// for(var i = 0 ; i < 4;i++){

//     console.log('第'+i+'次');

//     for(var j = 0; j<4;j++){

//         if(j > 1){
//             break;
//         }
//         console.log('j ===>',j)
//     }
// }

// * continue

for (var i = 0; i < 10; i++) {
    
    if(i === 2){
        continue;
    };

    console.log(i);
}


