// let map = new Map();

let obj1 = {
    a:1
}

let obj2 = {
    a :2 
}

let obj3 = {
    a : 1
}


map.set(obj1,1);
map.set(obj2,1);
map.set(obj1,3);
console.log(map);

let data = [
    {name:'A',score:90},
    {name:'B',score:82},
    {name:'C',score:100},
    {name:'D',score:71},
    {name:'E',score:81},
    {name:'F',score:92},
    {name:'G',score:72},
    {name:'H',score:61},
    {name:'I',score:71},
    {name:'J',score:51},
    {name:'K',score:90},
    {name:'L',score:82},
    {name:'M',score:74},
    {name:'N',score:71},
    {name:'O',score:81}
]

let array = data.map((item)=>{

    const { score } = item;
    if(score>=85){
        return '优'
    }else if(score >=75 && score<=84){
        return '良'
    }else if(score >=60 && score<=74){
        return '中'
    }else{
        return '差'
    }
})

let map = new Map();

// array.forEach((item)=>{

//     let count = map.get(item);
//     if(count){

//         map.set(item,count+1);
//     }else{
//         map.set(item,1)
//     }
// })
function getLevel(item){

    const { score } = item;
    if(score>=85){
        return '优'
    }else if(score >=75 && score<=84){
        return '良'
    }else if(score >=60 && score<=74){
        return '中'
    }else{
        return '差'
    }
}

data.forEach((item)=>{

    const level = getLevel(item);
    
    let count = map.get(level);
    if(count){

        map.set(level,count+1);
    }else{
        map.set(level,1)
    }
})

console.log(map);

