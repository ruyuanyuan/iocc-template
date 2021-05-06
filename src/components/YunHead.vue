<template>
  <div class='yun-head'>
      <img src="@/assets/img/head/head.png" alt="">
      <div class='date-weather'>
          <span class='weather-wendu'>{{weather.wendu}}</span>
          <span class='weather-type'>{{weather.type}}</span>
      </div>
      <div class='menu-left'>
            <div class='menulist menulistL'>
                <router-link :to='menu.route'  v-for="(menu,index) in menulistL" :key='index'>
                    <div class='menu-item' :class='activeRouter==menu.route?"active":""'>
                        <span>{{menu.name}}</span>
                    </div>
                </router-link>
            </div>
        </div>
        <div class='menu-right'>
            <div class='menulist menulistR'>
                <router-link :to='menu.route'  v-for="(menu,index) in menulistR" :key='index'>
                    <div class='menu-item' :class='activeRouter==menu.route?"active":""'>
                        <span>{{menu.name}}</span>
                    </div>
                </router-link>
            </div>
        </div>
      <div class='todaydate'>
          <span class='date-today'>{{newdate.date}}</span>
          <span class='date-time'>{{newdate.time}}</span>
      </div>
  </div >
</template>

<script>
import { formatDate } from "@/utils/tool.js";
import axios from 'axios'
export default {
    data(){
        return {
            menulistL:[
                {
                    name:'综合态势',
                    route:'/situation'
                },
                {
                    name:'接诉即办',
                    route:'/manage'
                },
                {
                    name:'网格管理',
                    route:'/traffic'
                },
                {
                    name:'专题分析',
                    route:'/economy'
                },
            ],
            menulistR:[
                {
                    name:'督察督办',
                    route:'/party'
                },
                {
                    name:'未诉先办',
                    route:''
                },
                {
                    name:'指挥调度',
                    route:''
                },
                {
                    name:'特色场景',
                    route:''
                }
            ],
            newdate:{
                date:'',
                time:''
            },
            weather:{
                wendu:'',
                type:""
            },
            activeRouter:'/situation'
        }
    },
    created(){
        this.activeRouter = this.$route.path
        this.newDateEvent();
        this.getWeather()
        setInterval(() => {
          this.newDateEvent();
        }, 1000);
        setInterval(()=>{
            this.getWeather()
        },60000)
       
    },
    methods:{
        newDateEvent() {
            let date = new Date();
            this.newdate.date = formatDate(date, "yyyy.MM.dd");
            this.newdate.time = formatDate(date, "hh:mm:ss");
        },
        getWeather(){
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=北京").then((response)=>{
                let data = response.data.data
                this.weather.wendu = data.wendu + '℃'
                this.weather.type = data.forecast[0].type
            }).catch(function(error){
                console.log(error);
            })
        }
    },
    watch: {
        $route(to, from) {
            this.activeRouter = this.$route.path
        },
    },
    
}
</script>

<style lang='scss' scoped>
    .yun-head{
        width:100%;
        overflow: hidden;
        height:auto;
        position: relative;
        text-align: center;
        background-image: linear-gradient(to bottom,#052a3fde 93% , transparent 100%); 
        .todaydate{
            position: absolute;
            top:20px;
            right:25px;
            .date-time{
                color:#cfebff;
                font-weight: bold;
                font-size:48px;

            }
            .date-today{
                color:#cfebff;
                font-size:24px;
                margin-right:40px;
            }
        }
        .date-weather{
            position: absolute;
            top:20px;
            left:25px;
            color:#cfebff;
            .weather-wendu{
                color:#cfebff;
                font-weight: bold;
                font-size:48px;
            }
            .weather-type{
                color:#cfebff;
                font-size:24px;
                margin-left:40px;
            }
        }
        .menu-left{
            height: 45px;
            position: absolute;
            top:25px;
            right:64.2%;
            display: flex;
            justify-content: flex-end;
        }
        .menu-right{
            height: 45px;
            position: absolute;
            top:25px;
            left:65%;
            display: flex;
            justify-content: left;
        }
        .menulist{
            display: flex;
            &.menulistR{
                .menu-item{
                    transform: skewX(-42deg);
                    span{
                        transform: skewX(42deg);
                    }
                }
            }
            .menu-item{
                width:175px;
                transform: skewX(42deg);
                box-shadow: 0 0 12px #38609d88 inset;
                border: 1px solid #38609d;
                text-align: center;
                line-height: 42px;
                height:45px;
                margin-right:25px;
                span{
                    color:#c0efff;
                    display: inline-block;
                    transform: skewX(-42deg);
                    font-size:24px;
                }
                &.active{
                    box-shadow: 0 0 42px #27bfff inset;
                    border: 1px solid #c3fbff;
                    span{
                        color:#fff;
                        font-weight: bold;
                    }
                }
                &:hover{
                    box-shadow: 0 0 42px #27bfff inset;
                    border: 1px solid #c3fbff;
                    span{
                        color:#fff;
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>