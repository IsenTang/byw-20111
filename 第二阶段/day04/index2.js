// var a = 0;

// function main(a){ // 形参

//     console.log(a);
// }

// main(111111); // 实参


// function getCount(h){

//     var count = 0;

//     while(h > 1){

//         h = h * 0.6
//         count++;
//     }

//     return count;
// }

// console.log(getCount(100000))

// * 数字加法运算
function add(a,b){

    if(typeof a === 'number' && 
    typeof b === 'number'){
        return a + b;
    }else{
        return ('参数不都为数字');
    }
    
}

console.log(add('1',2));
