<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="box" @click="jumpPage"></div>
  </div>
</template>

<script>
export default {
    name: 'About',
    methods: {
        jumpPage () {
            this.$router.push({
                name: 'lesson'
            })
        }
    },
}
</script>

<style lang="scss">
    .box {
        height: 40px;
        background-color: pink;
    }
</style>
