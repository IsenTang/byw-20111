<template>
  <div class="contact">
    <h1 @click="jumpPage">联系我们</h1>

  </div>
</template>

<script>
export default {
    name: 'Contact',
    methods: {
        jumpPage () {
            this.$router.push({
                name: 'contact',
                params: {
                    id: 23
                }
            })
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log('组件内守卫 to>>>>', to)
        console.log('组件内守卫 from>>>>', from)
        next();
    },
    beforeRouteUpdate (to, from, next) {
        console.log('参数变化  守卫 to>>>>', to)
        console.log('参数变化  守卫 from>>>>', from)
        next();
    },
    beforeRouteLeave (to, from, next) {
        console.log('组件内 离开 守卫 to>>>>', to)
        console.log('组件内 离开 守卫 from>>>>', from)
        next();
    }
}
</script>

<style lang="scss">
    .box {
        height: 40px;
        background-color: pink;
    }
</style>
