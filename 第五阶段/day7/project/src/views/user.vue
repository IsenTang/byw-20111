
<template>
    <div>
        <ul class="nav">
            <li> <router-link :to="{name: 'lesson'}">我的课程</router-link> </li>
            <li> <router-link :to="{name: 'email'}">我的邮箱</router-link> </li>
            <li><router-link :to="{name: 'set'}">设置</router-link> </li>
        </ul>
        
        <router-view class="router-view"></router-view>
    </div>
</template>

<script>
export default {
    name: 'User',
    data () {
        return {
        }
    }
}
</script>

<style lang="scss">
    .nav {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 240px;
        padding-top: 50px;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        background: #6c6666;
        li {
            line-height: 50px;
            text-align: center;
        }
    }
    .router-view {
        position: fixed;
        left: 240px;
        right: 0;
        top: 0;
        bottom: 0;
    }
</style>