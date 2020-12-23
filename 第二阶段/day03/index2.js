// ! 流程控制

// var value1 = 'string';

// if(value1){

//     console.log(value1);
// }

// * 闰年
// var year = 401;
// var value2 = year % 4 === 0 && year%100!==0 
//             || year%400 === 0;
// console.log('第一个条件 ===>',year % 4 === 0 && year%100!==0);
// console.log('第二个条件 ===>',year%400 === 0);

// console.log('value2 ===>',value2);
// if(value2){
//     console.log('是闰年');
// }else{
//     console.log('不是是闰年');
// }

// var value = 100;

// if(value === 100){
//     console.log('满分')
// }else if(value >= 90){

//     console.log('A')
// }else if(value >= 80){

//     console.log('B')
// }else{
//     console.log('C')
// }

var value = 100;
if(value >=80){
    console.log('B')
}else if(value >=90){
    console.log('A')
}else if(value === 100){
    console.log('满分')
}else{
    console.log('C')
}

if(value >=80){
    console.log('B')
}

if(value >=90){
    console.log('A')
}

if(value === 100){
    console.log('满分')
}