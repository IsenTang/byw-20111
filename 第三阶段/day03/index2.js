const fs = require('fs');

const path = require('path');

// fs.readFile(path.join(__dirname,'test.txt'),'utf-8',(err,data)=>{

//     if(err){ console.log(err) }

//     else{

//         console.log(data);
//     }
// });

// let promise = getPromise('test.txt');
// console.log(promise);

readFilePromise('test.txt').then((data)=>{

    console.log('第一个promise===>',data);
    
    return readFilePromise('2.txt');
}).then((data)=>{

    console.log('第二个promise===>',data);

    return readFilePromise('1.txt');
}).then((data)=>{

    console.log('第二个promise===>',data);

    return readFilePromise('1.txt');
}).then((data)=>{

    console.log('第二个promise===>',data);

    return readFilePromise('1.txt');
}).catch((error)=>{

    console.log(error);
})

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

// let a = readFilePromise('1.txt').then((data)=>{

//     console.log(data);

//     return readFilePromise('test.txt')
// }).then((data)=>{

//     console.log(data);
// }).catch((err)=>{

//     console.log(err);
// })

// new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res();
//     },1000);
// }).then(()=>{

//     console.log(1);
// })


// function writeFilePromise(fileName,content){

//     return new Promise((res,rej)=>{

//         fs.writeFile(path.join(__dirname,fileName),content,(error)=>{

//             if(error) { reject(error) }

//             else{
//                 resolve();
//             }
//         })
//     })
// }

// let content = '';
// readFilePromise('1.txt').then((data)=>{

//     content += data;

//     return readFilePromise('test.txt')
// }).then((data)=>{

//     content += data;
//     return writeFilePromise('dist.txt',content);
// }).then(()=>{
//     console.log(' success ');
// }).catch((error)=>{

//     console.log(error);
// });

// // Promise.all([readFilePromise('1.txt'),readFilePromise('test.txt')]).then((data)=>{

// //     console.log(data);
// //     return writeFilePromise('dist.txt',data.join('~~~~'))
// // })

// // setTimeout(()=>{

// //     console.log(1)
// //     console.log('end');
// // },1000)

// // function sleep(time){

// //     return new Promise((res)=>{

// //         setTimeout(()=>{

// //             res();
// //         },time)
// //     })
// // }

// sleep(1000).then(()=>{

//     console.log(1111);
//     console.log('end');
// })

// setTimeout(()=>{

//     console.log(1);
// },100);

// fs.readFile('1.txt','utf-8',(err)=>{
    
//     if(err)console.log(err);
//     console.log('end');
// })


