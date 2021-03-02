<template>
    <div>
        <h1>设置</h1>
        <p v-if="isShow">退出</p>
    </div>
</template>

<script>
export default {
    name: 'Set',
    data () {
        return {
            isShow: false
        }
    },
    created() {
        let metaInfo = this.$route.meta;
        console.log('meta', metaInfo);
        this.isShow = metaInfo.isQuit;
    },
}
</script>

<style lang="scss">
    
</style>