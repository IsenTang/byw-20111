const fs = require('fs'); // * file system
const path = require('path');

// readFile();

// readFile();

// writeFile();

let content = '';
fs.readFile(path.join(__dirname,'2.txt'),'utf-8',(err,data)=>{
    if(err){ console.log(err);}
    else{
        content += data;
        fs.readFile(path.join(__dirname,'test.txt'),'utf-8',(err,data)=>{
            if(err){ console.log(err);}
            else{
                content += data;
                fs.writeFile(path.join(__dirname,'dist.txt'),content,(err)=>{
                    if(err){ console.log(err);}
                    else{
                        console.log(' success ');
                    }
                });
            }
        });
    }
});



