const fs = require('fs'); // * file system
const path = require('path');

// let path = process.cwd()

// console.log(path);
console.log(__dirname)
// fs.readFile('./第三阶段/day02/test.txt','utf-8',(error,content)=>{

//     if(error){
//         console.log('error ===>',error)
//     }else{

//         console.log(content);
//     }
// });

// fs.readFile(`${__dirname}/test.txt`,'utf-8',(error,content)=>{

//     if(error){
//         console.log('error ===>',error)
//     }else{

//         console.log(content);
//     }
// });

// fs.readFile(path.join(__dirname,'test.txt'),'utf-8',(error,content)=>{

//     if(error){
//         console.log('error ===>',error)
//     }else{

//         console.log(content);
//     }
// });

// fs.writeFile(path.join(__dirname,'2.txt'),'test123',(error)=>{

//     if(error){ console.log(error) }

//     else{
//         console.log('success');
//     }
// })


function main(){

    let data = '';
    fs.readFile(path.join(__dirname,'test.txt'),'utf-8',(error,content)=>{
        if(error){
            console.log('error ===>',error)
        }else{
            console.log(content);
            data+=content;
        }
    });

    fs.readFile(path.join(__dirname,'2.txt'),'utf-8',(error,content)=>{
        if(error){
            console.log('error ===>',error)
        }else{
            console.log(content);
            data+=content;
        }
    });
    console.log('完成');
    console.log(data);
}

main();

// var now = + new Date()
// while (+new Date() <= now + 1000){
//     console.log(1);
// }

// console.log('end');