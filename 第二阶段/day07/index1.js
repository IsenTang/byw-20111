// var array = [1,2,3,4,5];

// var newArray = array.map(function(item,i){

//     // console.log(item);
//     console.log(i);
//     return item * 3;
// })

// console.log('array ===>',array);
// console.log('newArray ====>',newArray);

// array = array.filter(function(item){

//     return item < 4;
// })

// console.log('array ===>',array);
// console.log('afterFilter ===>',afterFilter);


// function main(start,end){

//     return Math.floor(Math.random() * 
//     (end - start + 1) + start)

//     // while(){

//     // }

//     // Math.random() === > (0,1)
//     // (0,1) * end ===> (0,end)
//     // (start , start + end )
//     //  Math.floor === > 去小数
// }

// console.log(main(2,5))

function main(text,key,replaceText,g){

    var global = g ? 'g' : '';

    var reg = new RegExp(key,global)

    return text.replace(reg,replaceText);
}

var value = main('123123','123','aaa',true);

console.log(value);