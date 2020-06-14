<template>
  <div>
    <div class="title">
      <div class="border-top"></div>
      <span>{{data1.title}}</span>
      <div class="inline-block rotate">TOP5</div>
    </div>
    <div class="itemall">
      <Echarts :option="barOption" />
    </div>
     
    
  </div>
</template>
<script>
import Echarts from "../data/EchartsNomal"
import {getBarOption} from "../../plugins/Manager"
export default {
  components:{
    Echarts
  },
  data(){
    return{
      barOption:{},
      data1:{
        title:"进场机构",
        info:[]
      },
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
      this.barOption = getBarOption();
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
  .rotate{
    transform: rotate(90deg);
    margin: 10px 0px 0px -10px;
  }
 
</style>