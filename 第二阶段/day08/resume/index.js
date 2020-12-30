/* 动态style部分 */
var styleTag = document.getElementById('styleTag');
  
/* 内容部分 */
var content = document.getElementById('content');

/* 简历部分 */
var resume = document.getElementById('resume');

var leftContentEle = document.getElementsByClassName('leftContent')[0];

/* 简历内容 */
const resumeContent = [`
## MyResume

### name : *Ban Yuan*
### slogen : *一次相遇终身相伴*
### Email : *contact@banyuan.club*
### website : www.banyuan.club`
    ];

    /* 叙述内容 */
    const styleContent = [
`/* Hello, My name is Ban Yuan,
* This is how I write my resume.
* I hope you like it~
* ===================================================
*/`,`/* This interface is not like development interface.
/* So , let me beautify the interface ^_^
*/`,`
*{
  transition: all .3s;
}

::-webkit-scrollbar {
  -webkit-appearance: scrollbartrack-vertical;
}

html {
  color: #06EB00; background: #030303;
}
.leftContent {
  padding: 5px;
  border: 1px solid;
  overflow: auto;
  width: 45vw; 
  height: 90vh;
  float:left;
}
/* It looks like a  command-line tool now , right ?
/* Let me finish my resume~
* ====================================================
* First of all , I need a paper.
*/
.rightContent {
  float:left;
  padding: 5px;  
  width: 45vw; 
  height: 90vh; 
  border: 1px solid;
  background: white; 
  color: #222;
  overflow: auto;
  margin-left:2vw;
}
/* Now, I got a white paper. 
* Let me start~~
*/`,`/*As you see, it wirte by markdown grammar.
/*Let me translated into HTML by using marked package.*/
/*Let us start~*/
/*....1....*/
/*....2....*/
/*....3....*/
/*.action!.*/`,`
/*Emmmmmmmmmmmmmmmm......*/
/*It is not pretty right?*/
/*So I use css to beautify my resume. I use github-markdown-css.*/
/*Let us start~*/
/*....1....*/
/*....2....*/
/*....3....*/
/*...go!...*/`,
`/*And here we are.*/?`
    ];

    var styleStr = styleContent.join('');

    var leftCount = 0;
    var rightCount = 0;

    start();

    function start(){
  
        var id = setInterval(function(){
            leftCount++;
            if(leftCount < styleContent.slice(0,3).join('').length){
                
                addContentToLeft();
            }else{

                rightCount++;
                resume.innerHTML = resumeContent[0].substring(0,rightCount);

                if(rightCount > resumeContent[0].length){

                    addContentToLeft();

                    if(leftCount >= styleContent.slice(0,4).join('').length){

                        resume.innerHTML = marked(resumeContent[0]);

                        if(leftCount >= styleContent.slice(0,5).join('').length){

                            resume.className = 'markdown-body';

                            clearInterval(id);
                        }
                    }
                }
            }
        },8)
    }

    function addContentToLeft(){
  
        /* 左边增加内容 */
        content.innerHTML = styleStr.substring(0,leftCount);
          
        /* style更新 */
        styleTag.innerHTML = styleStr.substring(0,leftCount);

        scrollToBottom(leftContentEle);
    }

    /* 滑动到最底部 */
    function scrollToBottom(ele){

        if(ele){
          ele.scrollTop = ele.scrollHeight
        }
        
    }

