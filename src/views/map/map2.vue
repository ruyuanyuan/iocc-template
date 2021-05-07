<template>
  <div class='yun-map-box'>
    <div class='yun-map' id='yunmap'></div>
    <YunLegend :legends='legends'></YunLegend>
  </div>
</template>

<script>
import Bus from "@/utils/Bus.js";
import {filterLegend} from './legend'
import {styleJson} from './mapstyle'
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
      this.map = new BMapGL.Map("yunmap"); // 创建Map实例
      this.map.centerAndZoom(new BMapGL.Point(116.297992, 39.974638), 15);
      this.map.enableScrollWheelZoom(true);
      // this.map.enableTiltGestures(true)
      // this.map.enableRotateGestures(true)
      this.map.setMinZoom(11);
      this.map.setHeading(60);
	    this.map.setTilt(30);  
      this.getBoundary()
      setTimeout(()=>{
        this.map.setMapStyleV2({styleJson:styleJson});
          // var mapStyle={  style : "midnight" }  
      //  this.map.setMapStyleV2(mapStyle);
      },200)

      this.map.addEventListener("click", (e) => {
        console.log(e);
      },false);
      this.map.addEventListener("zoomend", (e) => {
        console.log(e);
        console.log(this.map.getZoom());
      });
    })
  },
  methods:{
    // 绘制延庆边界
    getBoundary(){
      let bdary = new BMapGL.Boundary();
      //获取行政区域
      bdary.get("北京市延庆区", (res)=>{       
        this.map.clearOverlays();   //清除地图覆盖物       
        let count = res.boundaries.length; //行政区域的点有多少个
        let pointArray = [];
        for (var i = 0; i < count; i++) {
          var ply = new BMapGL.Polygon(res.boundaries[i], {
                        strokeWeight: 4,
                        fillOpacity: 0.4,
                        fillColor: '#80d8ff',
                        strokeColor: '#0091ea'}); //建立多边形覆盖物
          this.map.addOverlay(ply);  //添加覆盖物
          pointArray = pointArray.concat(ply.getPath());
        }    
        this.map.setViewport(pointArray);    //调整视野           
		});   
    }
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