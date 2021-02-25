<template>
  <div id="app">
    <h1>{{ new Date() | commonDate }}</h1>
    <input type="text" ref="input">
    <button @click="toggleShow">show</button>
    <img alt="Vue logo" src="./assets/logo.png" />
    <global-component></global-component>
    <HelloWorld ref="hello" v-if="isShow" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Login from "./mixins/login"
import { commonDate } from "./utils/index"

export default {
  name: "App",
  mixins: [ Login ],
  components: {
    HelloWorld
  },
  filters: {
    commonDate
  },
  data () {
    return {
      isShow: true,
      title: 'App-title'
    }
  },
  methods: {
    toggleShow () {
      this.isShow = !this.isShow
    }
  },
  beforeCreate () {
    console.log('App beforeCreate', this.isShow)
  },
  created() {
    console.log('App created', this.isShow)
    console.log('App created------', this.$refs.input)
    console.log('mixin-title', this.title)
    this.sayLogin();
    
  },
  beforeMount() {
    console.log('App beforeMount')
    console.log('App beforeMount------', this.$refs.input)
  },
  mounted() {
    console.log('App mounted')
    this.$refs.input.value="12345"
    console.log('>>>>>>>>>', this.$refs.hello.closeModal())
    this.$refs.hello.fun1();
  },
  beforeUpdate() {
    console.log('App beforeUpdate')
  },
  updated() {
    console.log('App updated')
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
