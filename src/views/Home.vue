<template>
  <div>
    <div class="bg">
      <div class="container">
        <div class="top">
          <!-- title-div -->
          <div class="title-left" style="font-size:12px">
            <div class="inline-block wid3" style="margin-left:4%"><img src="../assets/home.png" class="icon ">综合数据分析</div>
            <div class="inline-block wid3"><img src="../assets/analy.png" class="icon ">区域数据</div>
            <div class="inline-block  search"><i class="el-icon-search" style="margin-right:5px;color:#f4e408"></i>国有科技成果</div>
          </div>
          <div class="title-div">
            <!-- <div style="inline-block">1111</div> -->
            <div class="title">大 数 据 可 视 化 系 统</div>
          </div>
          <div class="title-right" style="font-size:12px">
            <div class="inline-block wid3" style="margin-left:4%"><img src="../assets/trade.png" class="icon ">交易数据</div>
            <div class="inline-block wid3"><img src="../assets/pie.png" class="icon ">热度榜</div>
            <div class="inline-block wid3"><img src="../assets/pie.png" class="icon ">热度榜</div>
          </div>

        </div>
        <div class="content">
          <div class="left">
            <div class="box left-1 inline-block" >
              <Left1 />
            </div>
            <div class="box left-1 inline-block">
              <Left2 />
            </div>
            <div class="box left-1 inline-block">
              <Left3 />
            </div>
          </div>
          <div class="middle">
            <div class="middle-1">
              <div style="color:white;position:relative;top:2rem">国有科技成果分布地图</div>
                <el-radio-group v-model="radio">
                  <!-- <el-radio :label="1">全部数据</el-radio> -->
                  <!-- <el-radio :label="2">国有项目</el-radio> -->
                  <!-- <el-radio :label="3">国有机构</el-radio> -->
               </el-radio-group>
            
              <Map />
            </div>
            <div class="middle-2">
              <Middle2 />
            </div>
          </div>
          <div class="right">
            <div class="box right-1">
              <Right1 />
            </div>
            <div class="box right-1">
              <Right2 />
            </div>
            <div class="box right-1">
               <Right3 />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import Left1 from "../components/data/Left1"
import Left2 from "../components/data/Left2"
import Left3 from "../components/data/Left3"
// import Middle1 from "../components/data/Middle1"
import Middle2 from "../components/data/Middle2"
import Right1 from "../components/data/Right1"
import Right2 from "../components/data/Right2"
import Right3 from "../components/data/Right3"
import Map from "../components/data/Map"
export default {
  components:{
    Left1,
    Left2,
    Left3,
    // Middle1,
    Middle2,
    Right1,
    Right2,
    Right3,
    Map
    
  },
  data(){
    return{
     radio:1,
    }
  }
}
</script>
<style scoped>
.search{
  border: 1px solid #f4e408;
  padding: 5px;
  width: calc(32% - 12px);
  border-radius: 10px;
}
  .bg{
    /* background-color: #000023; */
    background: linear-gradient(#000023, #002a8c);
    position: absolute;
    width: 100vw;
    height: 100vh;
  }
  .container{
    margin: 0px 20px 0px 20px;
  }
  .top{
    height: 15vh;
    width: 100%;
    position: relative;
    /* border-bottom: 2px solid #658bcb; */
    /* border: 1px solid red; */
  }
  .content{
    position: relative;
    height: calc(100% - 30px);
    margin: 10px 0px 0px 0px;
  }
  .title-div{
    border-left: 18vh solid transparent;
    border-right: 18vh solid transparent;
    margin: 0 auto;
    width:30vw;
    border-top: 18vh solid #063078;
    height: 0px;

  }
  .title{
    color: white;
    font-size:25px ;
    position: relative;
    bottom: 12vh;
    text-align: center;
  }
  .left{
    display: inline-block;
    border: 1px solif #00166b;
    /* height: 100%; */
    width: 25vw;
  }
  .middle{
    display: inline-block;
    height: 100%;
    width: calc(47vw - 80px);
    margin:0px 2vw;
    
  }
  .right{
    float: right;
    
    /* display: inline-block; */

    /* height: 100%; */
  }
  .box{
    border: 3px solid #00166b;
    box-shadow:0px 0px 5px #00166b;
    margin-bottom:5px ;
    /* display: inline-block; */
  }
  .left-1{
    height: 25vh;
    width: 100%;
  
  }
 
  .middle-1{
    border: 1px solid rgb(255,0,0,0);
    height: 52vh;
    width: 100%;
    margin-bottom: 5px;
    /* height: 52vh;
    width: 42vw; */
    
  }
  .middle-2{
    /* margin:5px 0px; */
    width: 100%;
    height: calc(100% - 35px);
    /* border: 1px solid red; */
    /* height: 26vh; */
    /* width: 42vw; */
    /* margin: 0px 1vw; */
    
  }
  .right-1{
    height: 25vh;
    width: 100%;
    width: 25vw;
  }
  .title-left{
    float: left;
    position:absolute;
    border-bottom: 2px solid #658bcb;
    color: white;
    width: 30vw;
    bottom: 0px;
    padding: 10px 0px;
  }
  .title-right{
    float:right;
    border-bottom: 2px solid #658bcb;
    color: white;
    width: 30vw;
    position: absolute;
    left: calc(70vw - 40px);
    bottom: 0px;
    padding: 10px 0px;
  }
  .icon{
    height: 15px;
    width: 15px;
    vertical-align: middle;
    margin: -5px 5px 0px 0px;
  }
  .mr-2{
    margin-right:25px ;
  }
  .ml-2{
    margin-left:30px ;
  }
  .inline-block{
    display: inline-block;
  }
  .wid3{
    width: 30%;
  }
  .el-radio-group{
    position: relative;
    top: 40px;
    width:40px;
    height: 20px;
  }
</style>


