<template>
  <div>
     <div class="t">{{data1.title}}</div>
     <div class="border"></div>
    <div class="itemall">
      
      <Echarts :option="barOption" />
    </div>
     
    
  </div>
</template>
<script>
import Echarts from "../data/EchartsNomal"
import {getBarOption2} from "../../plugins/Manager"
export default {
  components:{
    Echarts
  },
  data(){
    return{
      barOption:{},
      data1:{
        title:"各市数据统计分析",
        info:[
         
        ],
        colors:['#d1c145','#1c53a9','#b841cd','#bf8149','#3fb73a','#26c8bf','#b67090']
      },
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){

      this.barOption = getBarOption2();
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
    width:100%;
    padding:3% 0px; 
  }
  .rotate{
    transform: rotate(90deg);
    margin: 10px 0px 0px -10px;
  }
  .t{
    position: relative;
    height: 0px;
    top: 10px;
    left: 10px;
  }
  .border{
    border-top: 4px solid #2470e7;
    position: relative;
    top: 2rem;
    width: 4rem;
    left: 1.5rem;
  }
 
</style>