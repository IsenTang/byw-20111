<template>
  <div class="about">
    <h1 @click="jumpPage">This is an about page</h1>
    <button @click="jump2">params传参</button>
    <button @click="jump3">query传参</button>
  </div>
</template>

<script>
export default {
    name: 'about',
    methods: {
        jumpPage () {
            this.$router.go(-1)
        },
        jump2 () {
            this.$router.push({
                name: 'news',
                params: {
                    id: 12
                }
            })
        },
        jump3 () {
            this.$router.push({
                name: 'news',
                query: {
                    id: 13
                }
            })
        }
    },
}
</script>
