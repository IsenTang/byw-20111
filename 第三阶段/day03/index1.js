var fs = require('fs');
var path = require('path');

// var content = '';
// fs.writeFile(path.join(__dirname, '1.txt'), '这是第一个文件', (err) => {
//     if (err) { console.log(err); }
//     else {
       
//         // * ====
//         fs.writeFile(path.join(__dirname, '2.txt'), '这是第二个文件', (err) => {
//             if (err) { console.log(err); }
//             else {
             
//                  // * ====
//                 fs.readFile(path.join(__dirname,'1.txt'),'utf-8',(err,data) =>{
//                     if(err){console.log(err);}
//                     else{
//                         content += data;
                       
//                         // * =====>
//                         fs.readFile(path.join(__dirname,'2.txt'),'utf-8',(err,data) =>{
//                             if(err){console.log(err);}
//                             else{
//                                 content += '\n' + data;

//                                 // * ====>
//                                 fs.writeFile(path.join(__dirname,'3.txt'),content,(err) =>{
//                                     if(err){console.log(err);}
//                                     else{
//                                         console.log('success');
//                                     }
//                                 })
//                             }
//                         })
//                     }
//                 }) 
//             }
//         })
//     }
// })

fs.readFile(path.join(__dirname,'1.txt'),'utf-8',(err,data)=>{

    if(err){ console.log(err); }

    else{
        console.log(data);

        fs.readFile(path.join(__dirname,'test.txt'),'utf-8',(err,data)=>{

            if(err){ console.log(err); }
        
            else{
                console.log(data);

                fs.readFile(path.join(__dirname,'test.txt'),'utf-8',(err,data)=>{

                    if(err){ console.log(err); }
                
                    else{
                        console.log(data);

                        fs.readFile(path.join(__dirname,'test.txt'),'utf-8',(err,data)=>{

                            if(err){ console.log(err); }
                        
                            else{
                                console.log(data);
                            }
                        });
                    }
                });
                
            }
        });
    }
});
