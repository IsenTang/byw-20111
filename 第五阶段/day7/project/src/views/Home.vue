<template>
  <div class="home">
    <img @click="jump" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
      jump () {
          this.$router.push({
              name: 'about'
          })
      }
  },
}
</script>
