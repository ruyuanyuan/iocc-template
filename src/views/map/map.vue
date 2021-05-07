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
        this.map = new AMap.Map('yunmap', {
            viewMode:'3D', // 地图模式
            pitch:30,
            rotation:0,
            center: [116.397428, 39.90923],
            mapStyle:"amap://styles/darkblue",
             resizeEnable: true,
              rotateEnable:true,
              pitchEnable:true,
            lang:'zh_cn',
            zooms: [3,21],
        });
        this.drawBounds()
        this.map.on('moveend', ()=>{
           var zoom = this.map.getZoom(); //获取当前地图级别
           var center = this.map.getCenter();
           console.log(zoom,center)
        });
    })
  },
  methods:{
    // 绘制延庆边界
    drawBounds() {
      let district = null;
      let polygons=[];
        //加载行政区划插件
        if(!district){
            let opts = {
                subdistrict: 2,   //获取边界不需要返回下级行政区
                extensions: 'all',  //返回行政区边界坐标组等具体信息
                level: 'district'  //查询行政级别为 市
            };
            district = new AMap.DistrictSearch(opts);
        }
        
        district.search('延庆区', (status, result)=>{
            this.map.remove(polygons)//清除上次结果
            polygons = [];
            console.log(status,result)
            let bounds = result.districtList[0].boundaries;
            if (bounds) {
                for (let i = 0, l = bounds.length; i < l; i++) {
                    //生成行政区划polygon
                    let polygon = new AMap.Polygon({
                        strokeWeight: 4,
                        path: bounds[i],
                        fillOpacity: 0.4,
                        fillColor: '#80d8ff',
                        strokeColor: '#0091ea'
                    });
                    polygons.push(polygon);
                }
            }
          this.map.add(polygons)
          this.map.setFitView(polygons);//视口自适应
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