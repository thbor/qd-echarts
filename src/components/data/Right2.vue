<template>
  <div>
    <div class="title">
      <div class="border-top"></div>
      <span>{{data1.title}}</span>
    </div>
    <div class="itemall">
      <Echarts :option="barOption" />
    </div>
     
    
  </div>
</template>
<script>
import Echarts from "../data/EchartsNomal"
import {getPieOption} from "../../plugins/Manager"
export default {
  components:{
    Echarts
  },
  data(){
    return{
      barOption:{},
      data1:{
        title:"行业分布饼状图",
        info:[
          {value: 33, name: '已出价标的1'},
          {value: 19, name: '已出价标的2'},
          {value: 26, name: '已出价标的3'},
          {value: 4, name: '已出价标的4'},
          {value: 7, name: '已出价标的5'},
          {value: 7, name: '已出价标的6'},
          {value: 16, name: '已出价标的7'},
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
     for(let i=0;i<this.data1.info.length;i++){
       let item = this.data1.info[i]
       for(let j=0;j<this.data1.colors.length;j++){
         let itemcolor = this.data1.colors[j]
         if(i==j){
           item.itemStyle={normal:{color:itemcolor}}
         }
       }
     }
      this.barOption = getPieOption(this.data1.info,this.colors);
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