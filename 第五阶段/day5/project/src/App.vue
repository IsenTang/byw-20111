<template>
  <div id="app">

    <com></com>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <img v-oss-src="'course/Architects.png'" alt="">
    <img :src="utils.ossStaticPath+'course/ic_anli_kc.png'" alt="">
    <h1 class="h1">h1标签</h1>
    <div class="box">
      <div class="div1">
        <div class="div1-child"></div>
      </div>
      <h2>h2标签</h2>
    </div>
  </div>
</template>

<script>
import com from "./components/com"
import utils from "./common/utils"

export default {
  name: 'App',
  components: {
    com
  }
}
</script>

<style lang="less">
@import url(./style/style);

@fontColor: pink;
@font2: 100px;

.h1 {
  font-size: 30px;
  color: @fontColor;
  border-top: 5px solid @fontColor;
}


.box {
  width: 80%;
  height: 500px;
  background-color: @fontColor;
  .div1 {
    width: @font2;
    height: @font2;
    background-color: aqua;
    &-child {
      height: 50px;
      border: solid 4px salmon;
      &:hover {
        border: solid 8px salmon;
      }
    }
  }
  h2 {
    border-top: solid 10px blue;
    color: darken(blue, 20%);
    background-color: #fff;
    height: @font2 * 2;
  }
}
</style>
