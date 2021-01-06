// * 模版字符串

let str = 'I am';

let name = 'isen';

// console.log(str + ' ' + name);

console.log(`${str} ${name}`);

let username = "222222"
let str1 =  "<div class=\"test\">" +
            `<span>${username}：</span><input/>`+
            "</div>"+
            "<div class=\"test\">"+
            "<span>密码：</span><input type=\"password\"/>"+
            "</div>"

console.log(str1);