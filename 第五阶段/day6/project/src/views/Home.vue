<template>
  <div class="home">
    <img alt="Vue logo" @click="jumpPage" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Home',
    components: {
    },
    methods: {
        jumpPage () {
            // this.$router.push({
            //     path: '/about'
            // })

            // this.$router.replace({
            //     path: '/news'
            // })

            this.$router.go(-2);
        }
    },
}
</script>
