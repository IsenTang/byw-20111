const fs = require('fs');
const path = require('path');

// fs.readFile(path.join(__dirname,'test.txt'),'utf-8',(err,data)=>{

//     if(err){ console.log(err)}

//     else{

//         console.log(data);
//     }
// });

function getPromise(){

    return new Promise((resolve,reject)=>{

        fs.readFile(path.join(__dirname,'test.txt'),'utf-8',(err,data)=>{

            if(err){ reject(err) }
        
            else{
                resolve('data');
            }
        });
    })
}

let promise = getPromise();
console.log(promise);

promise.then((data)=>{

    console.log(data);
}).catch((error)=>{

    console.log('error ====>',error);
})