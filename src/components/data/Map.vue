<template>

  <div class="content row-flex-start">
    <div class="left_map" :id="id"  @click="showChinaMap"></div>
    <div class="right_opetate row-center" >
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import china from 'echarts/map/json/china.json'
import axios from 'axios'
import {getMapOption} from "../../plugins/Manager"
import { random } from '../../plugins/utils'
echarts.registerMap('china', china)
  var provinces = ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen', 'taiwan']
  var provincesText = ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门', '台湾']
export default {
  created () {
  },
  mounted () {
    this.$nextTick(() => {
      this.initMap()
    })
  },
  data () {
    return {
      id:random(),
      map: {}
    }
  },
  props: {},
  methods: {
    getMapOpt () {
      return getMapOption()
    },
    // 显示中国地图
    showChinaMap () {
       const option = this.getMapOpt()
        this.map.setOption(option, true)
    },
    // 显示各省地图，这里使用axios请求本地文件，provice文件夹存在的位置为public/province（旧版本是static）
    getProvinceMapOpt (provinceAlphabet) {
      axios.get('province/' + provinceAlphabet + '.json').then((s) => {
        echarts.registerMap(provinceAlphabet, s.data)
        const option = this.getMapOpt(provinceAlphabet)
        this.map.setOption(option, true)
      })
    },
    initMap () {
      var dom = document.getElementById(this.id)
      this.map = echarts.init(dom)
      const option = this.getMapOpt()
      if (option && typeof option === 'object') {
        this.map.setOption(option, true)
      }
      this.map.on('click', (param) => {
        // console.log(param)
        event.stopPropagation()// 阻止冒泡
        // 找到省份名
        const provinceIndex = provincesText.findIndex(x => {
          return param.name === x
        })
        //在这里判断provincesText中是否包含点击的省份名，有则渲染省级地图，无则无处理（需要可从此获得）
        if (provinceIndex === -1) return
        const provinceAlphabet = provinces[provinceIndex]
        // 重新渲染各省份地图
        this.getProvinceMapOpt(provinceAlphabet)
      })
    }
  },
  computed: {}
}
</script>

<style>
.left_map {
  width: 100%;
  height: 100%; 
}
.right_opetate {
  flex: 1;
  background: #404a59
}
</style>