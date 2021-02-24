
















* 组件

```
// 定义组件
var HeaderVue = {
   template: `
      <div style="background-color:red;height:200px;" >{{text}}</div>
   `,
   data () {
      return {
         text: 'hello，我是头部'
      }
   }
}

// 声明组件
components: {
   'header-vue': HeaderVue,
}

// 调用组件
<header-vue></header-vue>
```









* 全局组件


```
var GlobalVue = {
   template:`
      <div>
          <p>我是全局组件</p>
      </div>
   `
}

//注册成全局组件
Vue.component('global-vue', GlobalVue);

```







* 动态组件

```
<component :is="active"></component>


保持组件内状态
<keep-alive></keep-alive>  
```









* 父给子传值 props

```
<global-vue v-bind:msg="msg"></global-vue>
简写 <global-vue :msg="msg"></global-vue>



以字符串数组形式列出的 prop：
props:['msg', 'tt']



props: {
   msg: {
      type: String,
      require: true
   },
}

require:  必传
default: 默认值
validator: 验证

// 当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。
validator (t) { 
    return t === 'aaa' || t === 'bbb'
},

```







* 子给父传值

```
this.$emit('help', '爸爸，我迷路啦');  给父亲发射事件
this.$off('help');          关闭发射器

@help="fun"
```









* slot 插槽

```
组件里：
<slot name="插槽名字"></slot>


调用页面里：
<div slot="插槽名字"></div>


注意 父亲里除了div 给别的标签也行，给个标签主要是为了绑定某个slot时候给个标识

```





























