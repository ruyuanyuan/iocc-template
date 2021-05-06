<template>
    <div class='yun-legend' :style='`width:${160}px;top:${position.top}px;left:${position.left}px`'>
        <div class='yun-legend-title'>图例</div>
        <div class='yun-legend-list'>
            <div   v-for='(item,index) in legends'
            :key='index'>
                <template v-if='item.type'>
                    <div class='yun-subtitle'>{{item.label}}</div>
                </template>
                 <div class='yun-legend-item' 
                 v-if='!item.type'
                 >   
                    <div class='yun-legend-icon' 
                    :style='`background-image: url(${item.icon});`'></div>
                    <div class='yun-legend-label'>{{item.label}}</div>
            </div>
        </div>
           
        </div>
    </div>
</template>
<script>
export default {
    props:{
        width:{
            type:[String,Number],
            default:160
        },
        position:{
            type:Object,
            default:()=>{
                return {
                   top:180,
                   left:1280
                }
            }
        },
        legends:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    .yun-legend{
        min-height:120px;
        position: absolute;
        z-index: 21;
        background: #1187fe3b;
        box-shadow: 2px 2px 2px #0b79e7b7 inset,-2px -2px 2px #0b79e785 inset;
        padding:25px;
        &::before{
            content: '';
            display: block;
            width:100%;
            height:4px;
            position: absolute;
            top:-10px;
            left:0;
            background: #1186fe;
            border-radius: 2px;
        }
        .yun-legend-title{
            font-size:24px;
            color:#fff;
            text-shadow: 2px 2px 4px #fff;
        }
        .yun-legend-list{
            width:100%;
            display: flex;
            flex-wrap: wrap;
            .yun-subtitle{
                width:100%;
                font-size:20px;
                color:#add0f0;
                margin:15px 0 15px 0;
            }   
            .yun-legend-item{
                width:100px;
                margin:10px 0 10px 0;
                display: flex;
                align-items: center;
                cursor: pointer;
                .yun-legend-icon{
                    width:18px;
                    height:18px;
                    background-position: center center;
                    background-size: cover;
                    margin-right:15px;
                }
                .yun-legend-label{
                    font-size:16px;
                    color: #65aef9;
                }
            }
        }
    }
</style>