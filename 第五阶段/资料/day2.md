







* render

```
render: function (h) {
    return h('div', {
        attrs: {
            id: "box",
            class: 'haha',
        },
        style: {
            color: "red",
            fontSize: '30px'
        }
    }, [
        'aaa',
        h('a', {
            attrs: {
                href: '##'
            }
        }, '哈哈哈哈')
    ])
}


render: h => h(
    'div', {}, "ABCD"
)


(function (h) {
    return h()
})



createElement是render 的参数，它本身也是个函数，返回值是VNode（虚拟节点）。通常简写成h

它有三个参数
1. HTML 标签 {String | Object | Function}
2. 一个包含模板相关属性的数据对象 {Object}
3. 由createElement()构建的子虚拟节点VNodes，也可以写字符串生成“文本虚拟节点”。{String | Array} 可选。

render的主要作用是 将template内的html结构转化成虚拟dom树
```

```



new Vue({
   render: function(h) {
      return h(App)
   }
}).$mount("#app")


new Vue({
   render (h) {
      return h(App)
   }
}).$mount("#app")


new Vue({
   render: h => h(App)
}).$mount("#app")
```









* 如何定义方法

```
methods: {
	fun: function () {}
	
	fun () {}
}


在methods中不能使用箭头函数，因为箭头函数的this指向的是父级，不能取到Vue实例对象
```









* Onclick 点击事件

```
<!-- 方法处理器 -->
<button v-on:click="doThis"></button>

<!-- 方法传参 -->
<button v-on:click="doThat('hello')"></button>

<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>


<!-- 回车键 -->
<input @keyup.enter="onEnter">
<input @keyup.13="onEnter">

<!-- 阻止默认行为,仅执行函数（函数可不设，紧紧组织默认行为） -->
<a href="https://www.baidu.com" @click.prevent="doThis"></a>

<!-- 点击只会触发一次 -->
<button @click.once="doThis">8</button>
```









* Filter

```
* 全局过滤器：  注意：在new Vue({}) 之前

Vue.filter('filter1', function (value) {
   if (!value) return ''
   value = value+'-----vakue'
   return value
})


* 局部过滤器
filters: {
   filter2 (value) {
      if (!value) return ''
      value = value+'--22---vakue'
      return value
   }
},
```











* Computed

```

fullName: function () {
   return this.firstName + this.lastName;
}


/** computed传参 */
price (ll) {
   return function (ll) {
      return this.banana * this.count * ll
   }
}
```









* 计算属性 vs 方法


```
computed支持缓存，数据不变会优先从缓存中取数据

方法不支持缓存，只要重新渲染就会执行函数



演示：
display：none 切换时， computed只执行一次，方法每次都会执行

```









* watch

```
fullName: function (newValue, oldValue) {
   this.fullName = this.firstName + newValue
}

banana: {
   handler (newV, oldV) {
      console.log
   }
}

deep: true       是否深度监听
immediate: true  初次是否监听
```

* watch 中为什么没有return，watch虽然也是方法，但它内部是一段执行体，而不是一个返回值，不是由别人调用的，自然不用return











注意：computed 和 watch的区别

1 watch 一次只能监听一个值，computed 可以对依赖的所有值监听

2 computed支持缓存，如果依赖项没改变会优先从缓存中取数据，方法不支持缓存，watch不支持缓存，只要数据变就会执行相应操作

3 computed不支持异步，watch支持异步，，setTimeout

4 watch滥用会造成污染

























作业要求：

* 商品数量最少1个，最多4个
* 总价格随着商品数量变化而变化