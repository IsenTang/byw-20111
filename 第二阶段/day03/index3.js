
// * 范围 0～6 星期天 到 星期六
var date = new Date().getDay(); 
console.log('date: ', date);

var str = '今天是：'
var dateStr;

// * if else 形式
// if(date === 0){
//     dateStr = '星期天';
// }else if(date === 1){
//     dateStr = '星期一';
// }else if(date === 3){
//     dateStr = '星期三';
// }else{

// }

// console.log(str + dateStr);


// * switch case
// switch(date){

//     case 0:
//         dateStr = '星期天';
//         break;
//     case 1:
//         dateStr = '星期一';
//         break;
//     case 3:
//         dateStr = '星期三';
//         break;
//     default: // 缺省  默认 default value
//         break;
// }

// console.log('switch ==>',str + dateStr);

var val = 1;

switch (val) {
  case 1:
    console.log(' in 1 ');
    break;
  case 2 :
    console.log(' in 2 '); 
    break;
  default:
    console.log('default');
    break;
}