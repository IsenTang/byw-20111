// let obj = {
//     // func : ()=>{
//     //     console.log(1);
//     // }
//     func1(){
//         console.log(1);
//     },

//     a : 1,

//     func2 : function(){

//         console.log(1);
//     }
// }

// let set = new Set(); // [];

// set.add(1);
// set.add(2);
// set.add(3);
// set.add(1);

// console.log(set);



// array = array.filter((item)=>{

//     return item > 3;
// })

// let arr2 = array.map((item)=>{

//     return item * 2;
// })

// for(let i = 0; i<array.length; i++){
//     array[i];
// }

// let array = [2, 3, 5, 4, 5, 2, 2];
// let set = new Set(); 
// array.forEach((item)=>{

//     // console.log(`第${index}个，值是${item}`);
//     set.add(item);
// })
// console.log(set);

// console.log(arr2);

// let obj = {
//     a : 1,
//     b : {
//         name : 'isen'
//     }
// }

// let map = new Map();
// let obj1 = {
//     a:1
// }

// map.set(obj,'123');
// console.log(map);
// map.delete(obj);
// console.log(map.has(obj));

function main(){

    let obj1 = {
        a:1
    }
    let obj2 = {
        a:2
    }
    const array = [obj1,obj2,obj1,obj1];  
    /* 
     {
        obj2 : count
     }
    */
    let map = new Map();
    array.forEach((item)=>{
        console.log('item ===>',item);
        // * 如果map中已经有obj
        if(map.has(item)){

            let count = map.get(item);

            map.set(item,count + 1);
        }else{
            // * 如果没有，放入，给一个初始值为1，代表，出现了第一次
            map.set(item,1);
            console.log('map ====>',map)
        }
    })

    console.log(map);
}

main();


