<template>
  <div class='sugar-iframe' :style="`width:${width}px;height:${height}px`">
      <iframe  class='sugariframe' ref='myiframe'  :src="sugarSrc+src" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
    props:{
        width:{
            type:[Number,String],
            default:1100
        },
        height:{
            type:[Number,String],
            default:930
        },
        src:{
            type:String,
            default:null
        }
    },
    data(){
        return {
            sugarSrc:'http://10.165.10.11:8580/dashboard/',
        }
    },
    mounted(){
        this.$nextTick(()=>{
            if(this.$refs.myiframe.attachEvent){
                    this.$refs.myiframe.attachEvent("onload", ()=>{
                        this.$refs.myiframe.style.visibility='visible'
                    });
                } else {
                    this.$refs.myiframe.onload = ()=>{
                      this.$refs.myiframe.style.visibility='visible'
                }
            };
        })
    }
}
</script>

<style lang="scss" scoped>
    .sugariframe{
        width:100%;
        height:100%;
        visibility:hidden;
    }
</style>