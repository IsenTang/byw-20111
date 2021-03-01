、









* 页面引入方式

```
* mapState（放在computed中声明）
...mapState({
   "count": state => state.login.count
})

* mapMutations(放在methods中声明)
...mapMutations([
   'mutationFunName'
]),

* mapActions(放在methods中声明)
...mapActions([
   'actionFunName'
]),



调用：(想方法一样调用)
this.
```

















* 定义mutation-type

```
type.js

/** 登录 */
export const SAVE_USER = 'SAVE_USER';

/** 退出 */
export const CLEAR_USER = 'CLEAR_USER';

import * as types from './mutations-type'

[types.SAVE_USER] (state, data) {
   state.user = data
},

commit(types.SAVE_USER, userInfo);
```













* 解决刷新数据丢失问题

```
localStorage.setItem('key', JSON.stringify(value));

JSON.parse(localStorage.getItem('key')) || defaultData 
```

















