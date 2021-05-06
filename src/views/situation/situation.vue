<template>
  <div class='yun-page'>
      <div class='yun-left'></div>
      <div class='yun-right'></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.yun-page{
    width:100%;
    .yun-left{
        width:1200px;
        height:910px;
        position: absolute;
        top:130px;
        left:60px;
        bottom:0;
        z-index:14;
        background: rgba(0, 0, 0, 0.514);
        box-shadow: 4px 4px 8px rgba(255, 255, 255, 0.473),-4px -4px 8px rgba(255, 255, 255, 0.473);
    }
    .yun-right{
        width:1200px;
        height:910px;
        position: absolute;
        top:130px;
        right:60px;
        bottom:0;
        z-index:14;
        background: rgba(0, 0, 0, 0.514);
        box-shadow: 4px 4px 8px rgba(255, 255, 255, 0.473),-4px -4px 8px rgba(255, 255, 255, 0.473);
    }
}
</style>