const moment = require('moment');

// moment("1992-01-20");
// console.log('moment("1992-01-20"): ', moment("1992-01-20"));
// moment(new Date(1992, 1, 20))

// * ===> 1992-01-20
// let result = moment().format('YYYY年MM月DD日 HH:mm:ss');
// console.log('result ====>',result)

// let date = moment().subtract(7,'years').format('YYYY年MM月DD日 HH:mm:ss');
// console.log(date);
// let date = moment().add(7,'days').format('YYYY年MM月DD日');
// console.log(date);

// moment('2020-1-1') 
// moment('2020-12-31').subtract(1,'months');


// let date = moment().minutes()
// console.log(date);

// console.log(moment('2010-10-20').isAfter('2010-09-21'))

// let result = moment('2009-10-20').isBefore('2010-12-31', 'year') 

// console.log(result);

// moment('2010-10-20').isAfter('2010-12-31', 'year') 

let m = moment()

console.log(m);

console.log(m.toDate())
let date = new Date();

console.log(date);
