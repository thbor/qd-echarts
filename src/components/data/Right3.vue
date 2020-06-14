<template>
  <div>
    <div class="title">
      <div class="border-top"></div>
      <span>{{data1.title}}</span>
    </div>
    <div class="itemall">
      <div v-for="(item,index) in data1.info" :key="index" class="">
        
        <div class="maxLength">
          <div class="inline-block icon1">e</div>
          {{item.label}}
        </div>
      </div>
    </div>
     
    
  </div>
</template>
<script>
export default {
 
  data(){
    return{
      barOption:{},
      data1:{
        title:"最新国有项目",
        info:[
          {label:'多层叠置含煤层气系统排采'},
          {label:'多层叠置含煤层气系统排采优化地技术是一种lalalala'},
          {label:'多层叠置含煤层气系统排采优化地技术是一种lalalala'},
          {label:'多层叠置含煤层气系统排采优化地技术是一种lalalala'},
          {label:'多层叠置含煤层气系统排采优化地技术是一种lalalala'},
          {label:'多层叠置含煤层气系统排采'},
          {label:'多层叠置含煤层气系统排采优化地技术是一种lalalala'},
          {label:'多层叠置含煤层气系统排采优化地技术是一种lalalala'},
          {label:'多层叠置含煤层气系统排采优化地技术是一种lalalala'},
          {label:'多层叠置含煤层气系统排采优化地技术是一种lalalala'},
        ],
      },
    }
  },
  mounted(){
    this.init()
  },
  methods:{
    init(){
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
    padding:1.5% 0px; 
    overflow: hidden;
  }
  .rotate{
    transform: rotate(90deg);
    margin: 10px 0px 0px -10px;
  }
  .maxLength{
   overflow: hidden;
   /* height: 1rem; */
   width: calc(100% - 40px);
   text-overflow:ellipsis;
   white-space: nowrap;
  }
  .maxLength:hover{
    white-space: normal;
  }
  .icon1{
    background: #f7d56a;
    width: 18px;
    height: 18px;
    border-radius: 5px;
    text-align: center;
    margin: 2px;
  }
 
</style>