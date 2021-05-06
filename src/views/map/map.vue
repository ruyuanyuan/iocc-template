<template>
  <div class='yun-map-box'>
    <div class='yun-map' id='yunmap'></div>
    <YunLegend :legends='legends'></YunLegend>
  </div>
</template>

<script>
import Bus from "@/utils/Bus.js";
import {filterLegend} from './legend'
import YunLegend from '@/components/YunLegend'
export default {
  components:{
    YunLegend
  },
  data(){
    return {
      map:null,
      legends:[]
    }
  },
  created(){
    this.legends=filterLegend(['warn','camera','grid','facilities','hospital','beadhouse','community','school','park'])
  },
  mounted(){
    this.$nextTick(async () => {
      this.map = new BMap.Map("yunmap"); // 创建Map实例
      this.map.centerAndZoom(new BMap.Point(116.297992, 39.974638), 15);
      this.map.enableScrollWheelZoom(true);
      this.map.setMinZoom(12);
      this.map.setMapStyle({
        style: "midnight",
      });
      this.map.addEventListener("click", (e) => {
        console.log(e);
      },false);
      this.map.addEventListener("zoomend", (e) => {
        console.log(e);
        console.log(this.map.getZoom());
      });
    })
  }
}
</script>

<style lang='scss' scoped>
.yun-map-box{
  width:100%;
  height:100%;
  position: relative;
}
.yun-map{
    width:100%;
    height:100%;
    background:#010917;
}
</style>