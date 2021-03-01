<template>
    <div>
        <h1 @click="jumpPage">新闻页面</h1>
        <button @click="jump2">name方式跳转到about</button>
        <router-link :to="{name: 'home'}">跳到home页面</router-link>
        <button @click="jump3">动态路由>>>lesson</button>
    </div>
</template>

<script>
export default {
    name: 'News',
    data () {
        return {}
    },
    created() {
        console.log( this.$route )
        console.log( this.$route.params )
        console.log( this.$route.query )
    },
    methods: {
        jumpPage () {
            this.$router.go(1);
        },
        jump2 () {
            this.$router.push({
                name: 'about'
            })
        },
        jump3 () {
            this.$router.push({
                name: 'lesson',
                params: {
                    id: 345
                }
            })
            // this.$router.push({
            //     path: '/lesson/' + 200
            // })


        }
    },
}
</script>

<style lang="scss">
    
</style>