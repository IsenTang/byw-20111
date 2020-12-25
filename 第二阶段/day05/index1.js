// function correct(array,per){

//     if(Array.isArray(array)){
//         return array.filter(function(item){
						
//           	// 随机数
//             return Math.random() >= per // 0.2 > 0.125
//         })
//     } 
// }

// function main(){

//     var classmates = [0,1,2,3,4,5,6,7,8,9,10,11];
//     var count = classmates.length;
    
//     // 第一次
//     classmates = correct(classmates,1/8);

//     console.log('第一次修改完===>',classmates);
//     count += classmates.length;

//   	// 第二次
//     classmates = correct(classmates,0.85);

//     count += classmates.length;

//     console.log(count);
// }

// main();

// // var arr = [1,2,3,4,5];

// // var newArr = arr.filter(function(item){
// //     console.log('item===>',item);
// //     return item <= 3;
// // })

// // console.log(arr);
// // console.log('newArr ==>',newArr);


function main(str){

    var result = [];
		
  	// 初始化状态
    var hasLower = false;
    var hasUpper = false;
  	var hasKey_ = false;
  	var hasKey$ = false;
    
    'st_$Aasdasdasdasda'
    if(str){
        for(var i = 0; i < str.length ; i++){
						
            // 只要有没检测出来的，都进入检测 
            if(!hasLower || !hasUpper || !hasKey_ || !hasKey$) {
                // a
                if( !hasLower && str.charCodeAt(i) >= 97 ){
                    hasLower = true;
                }
                
                // A
                if(!hasUpper && str.charCodeAt(i) >= 65 && str.charCodeAt(i)<= 90){
                    hasUpper = true;
                }
              
              	if(!hasKey_ && str.charAt(i) === '_'){
                   hasKey_ = true;
                }
              
              	if(!hasKey$ && str.charAt(i) === '$'){
                   hasKey$ = true;
                }
    
            }else{
              break;
            }

        }
    }

    if(!hasLower){
        result.push('小写字母')
    }

    if(!hasUpper){
        result.push('大写字母');
    }

    if(!hasKey_){
        result.push('_');
    }

    if(!hasKey$){
        result.push('$');
    }

    if(result.length > 0){
        console.log(result);
        console.log('缺少' + result.join(','));
		// 缺少 小写字母，大写字母,_,$
    }else{
        console.log('什么都不缺少。');
    }
}

main('st_');


var arr = [1,2,3,4,5];

console.log(arr.join(''));