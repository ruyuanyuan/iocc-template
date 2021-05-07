<template>
  <div class="yun-home">
    <YunMap></YunMap>
    <div class='yun-content'>
      <YunHead></YunHead>
      <div class='yun-mantle mantle-left'></div>
      <div class='yun-mantle mantle-right'></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import YunMap from '@/views/map/map.vue'
import YunHead from '@/components/YunHead.vue'
export default {
  name: 'Home',
  components: {
    YunMap,
    YunHead
  }
}
</script>
<style lang="scss" scoped>
.yun-home{
  width:100%;
  height:100%;
  position: relative;
  .yun-content{
    width:3840px;
    position: absolute;
    top:0;
    left:0;
    z-index: 12;
    .yun-mantle{
      width:1320px;
      height:1080px;
      position: absolute;
      top:0;
      z-index: -1;
      &.mantle-left{
        left:0;
        background-image: linear-gradient(to right,#010a0ee3 54% , transparent 100%); 
      }
      &.mantle-right{
        right:0;
        background-image: linear-gradient(to left,#010a0ee3 54% , transparent 100%);
      }
    }
  }
}
</style>
