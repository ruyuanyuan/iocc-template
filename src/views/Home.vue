<template>
  <div class="yun-home">
    <YunMap></YunMap>
    <div class='yun-content'>
      <YunHead></YunHead>
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
    width:100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 12;
  }
}
</style>
