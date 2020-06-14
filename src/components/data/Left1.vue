<template>
  <div>
    <div class="title">
      <div class="border-top"></div>
      <span>{{data1.title}}</span>
    </div>
    <div class="itemall">
      <div v-for="item in data1.info" :key="item.id" class="item">
        <img :src="item.imgPath">
        <span >{{item.name}}</span>
        <span class="mr" :style="{color:item.color}">{{item.number}}</span>
      </div>
    </div>
     
    
  </div>
</template>
<script>
export default {
  data(){
    return{
      data1:{
        title:"国有数量统计",
        info:[
            {id:1,name:'项目总数',number:309033,imgPath:require('../../assets/react.png'),color:'#0e6b42'},
            {id:2,name:'机构总数',number:147682,imgPath:require('../../assets/emp.png'),color:'#8650a3'},
            {id:3,name:'科技成果',number:69033,imgPath:require('../../assets/tec.png'),color:'#9ca15b'},
            {id:4,name:'专利技术',number:80232,imgPath:require('../../assets/science.png'),color:'#a65280'}
        ]
      },
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