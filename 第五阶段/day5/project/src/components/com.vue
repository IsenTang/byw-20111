<template>
    <div class="com-container">
      <img v-oss-src="'auth/pic_denglu_wode.png'" alt="">
      <div class="box1">
        <div class="box1-sdf"></div>
      </div>
      <h1 class="font1">h1h1h1h1</h1>
      <h2 class="font2">h2h2h2h2</h2>
      <div class="box2">divdvi</div>
      <div class="box3">box3box3</div>
      <p>打了覅就地方拉下水</p>
      <div class="border-1">是咖啡机阿里斯顿就阿里河</div>
      <div class="border-2">是咖啡机阿里斯顿就阿里河</div>
      <div class="border-3">是咖啡机阿里斯顿就阿里河</div>
      <div class="border-4">是咖啡机阿里斯顿就阿里河</div>
      <div class="box4">sdfsd</div>
    </div>
</template>

<script>
export default {
  name: 'Com',
  data () {
    return {
      isshow: true
    }
  }
}
</script>

<style lang="scss">
  @import "../style/sass";
  $color1: #f97197;
  $side: left;
  .com-container {
    background-color: $abc;
    img {
      width: 300px;
    }
    .box1 {
      height: 100px+100px;
      border: solid 10px $color1;
      border-#{$side}: solid 10px #000;
      &-sdf {
        width: 100px;
        height: 100px;
        background-color: sienna;
      }
      &:hover {
        background-color: slateblue;
      }
    }
    .font1 {
      font-size: 30px;
      color: red;
      width: 400px;
    }
    .font2 {
      @extend .font1;
      background-color: springgreen;
    }
    @mixin boxStyle {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: tan;
    }
    .box2 {
      @include boxStyle;
      color: red;
    }

    @mixin marginStyle($val: 50px) {
      margin-top: $val;
    }
    .box3 {
      @include marginStyle(100px);
      background-color: red;
      height: 30px;
    }
    p {
      color: lighten(#000, 10%);
      @if 3 < 2 {
        font-size: 30px;
      } @else if 3 < 4 {
        font-size: 40px;
      } @else {
        font-size: 100px;
      }
    }

    @for $i from 1 to 5 {
      .border-#{$i} {
        width: #{$i}00px;
        height: 100px;
        margin: 10px;
        font-size: #{$i}0px;
      }
    }

    $y: 4;
    @while $y > 0 {
      .border-#{$y} {
        border: solid #{$y}0px #333;
      }
      $y: $y - 1;
    }

    @each $z in 1, 2, 3, 4 {
      .border-#{$z} {
        height: #{$z}00px;
      }
    }

    @function add($val) {
      @return $val + 100px;
    }
    .box4 {
      height: add(20px);
      background-color: orangered;
    }


  }
</style>