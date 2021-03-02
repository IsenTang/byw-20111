<template>
    <div id="app">
        <!-- <router-view class="view1"></router-view>
        <router-view class="view2" name="view2"></router-view> -->
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style lang="scss">
.fade-enter {
    opacity: 0;
}

.fade-enter-active{ 
    transition: all 3s;
}




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

// .view1 {
//   display: inline-block;
//   width: 40%;
// }
// .view2 {
//   display: inline-block;
//   width: 50%;
// }
</style>
