/**
 * @description 雷达图
 * 
*/
export const getRadarOption = (title,legendData,seriesData) => {
  let option={
    title:{text:title},
    tooltip:{trigger:'axis'},
    legend:{left:'center',data:legendData},
    radar:[
      {
        indicator:(function(){
          var res = [];
          for(let i=0;i<legendData.length;i++){
            res.push({text:legendData[i],max:100})
          }
          return res;
        })(),
        splitArea : {
          show : true,   
           areaStyle : {
             color:'rgb(255,255,255,0)'
                // color: ['#658bcb00',]  
                // 图表背景网格的颜色
            }
        },
        splitLine : {
          show : true,
          lineStyle : {
              width : 1,
              color : ['rgb(68,71,106,0.63)']  
              // 图表背景网格线的颜色
           }
       },
       axisLine: {            // 坐标轴线
        show: true,        // 默认显示，属性show控制显示与否
        lineStyle: {       // 属性lineStyle控制线条样式
            color: 'rgb(68,71,106,0.63)',
            width: 1,
            type: 'solid'
        }
    },
        center:['45%','57%'],
        radius:'60%',
        name:{
          textStyle: {
            color: '#fff',
            fontSize : "10px" 
          }
        },
        
      }
    ],
    series:[
      {
        type:'radar',
        symbolSize: 0,
        tooltip:{trigger:'item'},
        areaStyle:{
        },
        data:seriesData
      }
    ]
  }
  return option
}

/**
 * @description 柱状图
 * 
*/
export const getBarOption=()=>{
  let colors = ['#63bad5','#4385e7','#756bcc','#d1c446','#e18148'];
  let option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '1%',
        right: '4%',
        top:'15%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLine:{
          lineStyle:{
            color:'white'
          }
        }
    },
    yAxis: {
        type: 'category',
        data: ['中国技术交易', '中国技术交易', '中国技术交易', '中国技术交易', '中国技术交易'],
        axisLine:{
          lineStyle:{
            color:(params,i)=>{
              return colors[i]
            }
          }
        }
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
                position: 'insideRight'
            },
            itemStyle: {
              normal: {
                  color:(params)=>{
                    return colors[params.dataIndex]
                  } 
              },
          },
            data: [70, 120, 150, 180, 220]
           
        },
    ]
};
return option
}

/**
 * @description 柱状图
 * 
*/
export const getBarOption2=()=>{
  let colors = ['#00ff00','#ff5b74','#00eeff','#0139d6','#ffcc45','#ffa1ff','#7642c5'];
  let option = {
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['银川市', '石嘴山市', '吴忠市', '固原市', '中卫市', '灵武市', '青铜峡市'],
            axisTick:{show:false},
            axisLine:{show:false},
            axisLabel:{color:'white'},

        }
    ],
    yAxis: [
        {
            type: 'value', 
            splitLine:{show:false},
            axisLabel:{show:false},
            axisTick:{show:false},
            axisLine:{show:false}
        }
    ],
    series: [
        {
            type: 'bar',
            barWidth: '60%',
            data: [100,200,150,140,180,160,80],
            label: {
              show: true,
              position: 'top',
              color:'white'
          },
            itemStyle: {
              normal: {
                  color:(params)=>{
                    return colors[params.dataIndex]
                  } 
              },
          },
        }
    ]
};
return option
}
export const getPieOption=(data,colors)=>{
  let option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      itemWidth: 5,
      itemHeight: 5, // 设置高度
      textStyle: {
        fontSize: 6,
        color:(params,i)=>{
          return colors[i]
        }
      },
    },
    series: [
        {
            type: 'pie',
            selectedMode: 'single',
            radius: '70%',
            label: {
              normal: {
                  show: true,
                  position: 'inner',
                  formatter: '{d}%',
                  fontSize: 7
              }
          },
            center: ['40%', '50%'],
            data: data
        }
    ]
};
return option
}

  // const option = {
      // backgroundColor: 'rgb(255,255,0,0)', //地图背景颜色
      // //以下是地图标题，我在此处设空，需要的可以自己加上
    
      // geo: {
      //   map:  'china',
      //   label: {
      //       emphasis: {
      //           show: false
      //       },
      //       // 不需要显示地名可直接删除normal此项
      //       normal: {
      //         // show: true, // 是否显示对应地名
      //         textStyle: {
      //             color: 'white'
      //         }
      //       }
      //   },
      //   roam: true,
      //   itemStyle: {
      //       normal: {
      //           areaColor: '#6FA7CE', //地图颜色
      //           borderColor: '#fff' //地图边线颜色
      //       },
      //       emphasis: {
      //           areaColor: '#B7DFED' //鼠标移入颜色
      //       }
      //   }
      //  }
      // }
      // return option
      // #005bae
export const getMapOption=()=>{
  let option = {
    
    tooltip : {
      trigger: 'item',
        formatter: '{b}'
    },
    legend: {
        left: 'left',
    },
    visualMap: {
        min: 0,
        max: 2500,
        left: 'right',
        top: 'bottom',
        show:false,
        calculable : true,
        inRange: {
          color: ['#005bae','#007fcc']
      }
        
    },
    series : [
        {
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle: {
              normal: {
                  areaColor: '#005bae', //地图颜色
                  borderColor: '#fff' //地图边线颜色
              },
              emphasis: {
                  areaColor: '#B7DFED' //鼠标移入颜色
              }
          },
            data:[
                {name: '北京',value: Math.round(Math.random()*1000)},
                {name: '天津',value: Math.round(Math.random()*1000)},
                {name: '上海',value: Math.round(Math.random()*1000)},
                {name: '山西',value: Math.round(Math.random()*1000)},
                {name: '内蒙古',value: Math.round(Math.random()*1000)},
                {name: '吉林',value: Math.round(Math.random()*1000)},
                {name: '福建',value: Math.round(Math.random()*1000)},
                {name: '广东',value: Math.round(Math.random()*1000)},
                {name: '西藏',value: Math.round(Math.random()*1000)},
                {name: '四川',value: Math.round(Math.random()*1000)},
                {name: '宁夏',value: Math.round(Math.random()*1000)},
                {name: '香港',value: Math.round(Math.random()*1000)},
                {name: '澳门',value: Math.round(Math.random()*1000)}
            ],
            symbolSize:15
        },
    
   
    ]
};
return option
}