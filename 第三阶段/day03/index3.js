const fs = require('fs');
const path = require('path');
// async function main(){
   
//     await sleep(1000);
//     console.log('end');

//     // sleep(1000).then(()=>{

//     //     console.log('end');
//     // })
// }

// main();

// function sleep(time){
//     return new Promise((res)=>{

//         setTimeout(() => {
            
//             console.log('延时器结束');
//             res();

//         }, time);
//     })
// }
function readFilePromise(fileName){

    let promise =  new Promise((res,rej)=>{

        fs.readFile(path.join(__dirname,fileName),'utf-8',(err,data)=>{

            if(err){ rej(err) }
        
            else{
                res(data);
            }
        });
    })

    return promise;
}

function writeFilePromise(fileName,content){

    return new Promise((resolve,reject)=>{

        fs.writeFile(path.join(__dirname,fileName),content,(error)=>{

            if(error) { reject(error) }

            else{
                resolve();
            }
        })
    })
}

async function main(){
    try {

        // const result1 = await readFilePromise('1.txt');
        // const result2 = await readFilePromise('test.txt');

        const result = await Promise.all([readFilePromise('1.txt'),readFilePromise('test.txt')]);

        await writeFilePromise('dist.txt',`promise.all 写入${result[0]}${result[1]}`);

        console.log('end');
    } catch (e) {
        
        console.log('error ===>',e);
    } finally{

        console.log('finally');
    }
}

async function test(){

    await main();

    console.log('test end');
}

test();

// readFilePromise('2.txt').catch((err)=>{

//     console.log(err);
// })
