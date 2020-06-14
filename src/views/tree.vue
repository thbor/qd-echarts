<template>
  <div>
    <canvas class="tree" :id="id"></canvas>
  </div>
</template>
<script>
import { random } from '../plugins/utils'
export default {
  data(){
    return{
      id:random(),
      tree:{},
      rootTop:300,//樹根位置
      treeColor:'#cccccc',
      maxTree:18, //樹枝的執行步數
    }
  },
  mounted(){
    // this.init()
  },
  methods:{
    init(){
      let promise = this.initParams();
      promise.then(tCtx=>{
        //這個deg爲-，相當於旋轉了
        for(let i=0;i<5;i++){
          if(i%2==0){
            this.drawTree(tCtx,this.tree.width/2-i*10,this.rootTop,-Math.PI/2,this.maxTree)
          }else{
            this.drawTree(tCtx,this.tree.width/2+i*10,this.rootTop,-Math.PI/2,this.maxTree)
          }
        }
      })
      
    },
    async initParams(){
      this.tree = document.getElementById(this.id);
      this.tree.width = 300;
      this.tree.height = 450;
      this.tCtx = this.tree.getContext("2d");
      return this.tCtx
    },
    drawTree(tCtx,x,y,deg,step){
      let x1 = x+Math.cos(deg) * step;
      let y1 = y+Math.sin(deg) * step;
      tCtx.beginPath();
      tCtx.lineWidth = 1
      tCtx.moveTo(x,y);
      tCtx.lineTo(x1,y1);
      tCtx.strokeStyle = this.treeColor;
      tCtx.stroke();
      step -- ;
      if(step>0){
        this.drawTree(tCtx,x1,y1,deg,step)
        //2爲主分支
        if(step%3 == 1){
          this.drawTree(tCtx,x1,y1,deg+0.45,Math.round(step/1.08))
        }
        if(step%3 == 0){
          this.drawTree(tCtx,x1,y1,deg-0.45,Math.round(step/1.08))
        }
      }
    }
  }
}
</script>
<style scoped>
  .tree{
    width: 200px;
    height: 24.5vh;
    position: absolute;
    /* border: 1px solid blue */
  }
</style>