const fs = require('fs');
const { find } = require('lodash');
const path = require('path');
// async function main(){
   
//     await sleep(1000);
//     console.log('end');

//     // sleep(1000).then(()=>{

//     //     console.log('end');
//     // })
// }

// main();

function sleep(time){
    return new Promise((res)=>{

        setTimeout(() => {
            
            console.log('延时器结束');
            res();

        }, time);
    })
}
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

// async function main(){
//     try {

//         // const result1 = await readFilePromise('1.txt');
//         // const result2 = await readFilePromise('test.txt');
//         // const result = await Promise.all([readFilePromise('1.txt'),readFilePromise('test.txt')]);

//         // await writeFilePromise('dist.txt',`promise.all 写入${result[0]}${result[1]}`);
//         let result = await readFilePromise('2.txt');
//         // normal();
//         console.log(result);

//         await writeFilePromise('dist.txt',`写入${result}`);

//         console.log('end');
//     } catch (e) {
        
//         console.log('error ===>',e);
//     } finally{

//         console.log('finally');
//     }
// }
// main();

// function normal(){

//     console.log('this is normal function');
// }

// async function test(){

//     await main();

//     console.log('test end');
// }

// test();

// readFilePromise('2.txt').catch((err)=>{

//     console.log(err);
// })

// * 写入两个个文件，内容自定
// * 等待1s
// * 将两个文件内容读出来，最终放入第三个文件。
// * async/await
async function main(){

    try {
        
        // * 同时写入
        await Promise.all([writeFilePromise('1.txt','这是文件1'),writeFilePromise('2.txt','这是文件2')]);

        // await writeFilePromise('1.txt','这是文件1');
        // await writeFilePromise('2.txt','这是文件2');

        // * 等待1s
        await sleep(1000);

        // * 同时读出
        const [text1,text2] = await Promise.all([readFilePromise('1.txt'),readFilePromise('2.txt')]);

        // const text1 = await readFilePromise('1.txt');
        // const text2 = await readFilePromise('2.txt');

        // * 写入文件
        await writeFilePromise('3.txt',`${text1}  ${text2}`);

    } catch (error) {

        // * 如果出错
        console.log(error);
    } finally{

        // * 最终执行
        console.log(' end ');
    }
}

main();