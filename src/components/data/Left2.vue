<template>
  <div>
    <div class="title">
      <div class="border-top"></div>
      <span>{{data1.title}}</span>
    </div>
    <div class="itemall">
      <Echarts :option="radarOpyion" />
      <!-- <div v-for="item in data1.info" :key="item.id" class="item">
        <img :src="item.imgPath">
        <span >{{item.name}}</span>
        <span class="mr" :style="{color:item.color}">{{item.number}}</span>
      </div> -->
    </div>
     
    
  </div>
</template>
<script>
import Echarts from "../data/EchartsNomal"
import {getRadarOption} from "../../plugins/Manager"
export default {
  components:{
    Echarts
  },
  data(){
    return{
      radarOpyion:{},
      data1:{
        title:"合作方式分析",
        info:[],
        
      },
      
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      let title = "";
      let legendData = ['技术转让','技术授权','技术融资','技术许可','技术服务'];
      let seriesData = [ {
        value: [ 90, 45, 18, 20, 25],
        name:'数据1',
        itemStyle: {
          normal: {
            color: '#ff8562', 
          
          },
      },
      },
      {
          value: [ 20, 10, 42, 8,24 ],
          name:'数据2',
          itemStyle: {
            normal: {
                color: '#ffc738',
            },
        },
      }]
      this.radarOpyion = getRadarOption(title,legendData,seriesData)
      console.log("radarOpyion",this.radarOpyion)
    }
  }
}
</script>
<style scoped>
  div{
    color: white;
    font-size: 12px;
  }
  .title{
    border-top: 4px solid #2470e7;
    width: 12px;
    float: left;
    margin: 5px 10px;
    padding: 5px 5px;
    height: calc(25vh - 24px);
  }
  .inline-block{
    display: inline-block;
  }
  img{
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin: 3% 13% 3% 10%;
  }
  .mr{
    margin-left: 13%;
  }
  .itemall{
    /* border: 1px solid white; */
    height: 22.5vh;
    /* margin: 10px; */
    display: inline-block;
    width: calc(100% - 45px);
    padding:3% 0px; 
  }
 
</style>