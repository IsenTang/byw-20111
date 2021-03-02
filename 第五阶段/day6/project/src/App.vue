<template>
    <div id="app">
        <div class="ul-container">
            <ul>
                <li><router-link :to="'/qwxk'">趣味小课</router-link></li>
                <li><router-link :to="'/ybkc'">预备课程</router-link></li>
                <li><router-link :to="'/bcrm'">编程入门</router-link></li>
            </ul>
        </div>
        <div class="app-right">
            <router-view/>
        </div>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    mounted() {
        console.log('router-info', this.$router)
    },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.ul-container {
    width: 240px;
    background: #ddd;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
.app-right {
    padding-left: 250px;
}
</style>
