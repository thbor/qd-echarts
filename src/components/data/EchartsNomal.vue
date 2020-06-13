<template>
  <div class="chart" :id="id"></div>
</template>

<script>
import { random } from "../../plugins/utils";
import echarts from "echarts";

export default {
  data() {
    return {
      id: random(),
      chart: null
    };
  },
  props: {
    option: Object
  },
  watch: {
    option: function() {
      this.setOption();
    },
  },
  mounted() {
    this.chart = echarts.init(document.getElementById(this.id));
    window.onresize = this.chart.resize
    this.chart.on("click", params => {
      this.onChartClick(params);
    });
    this.setOption();
  },
  methods: {
    setOption: function() {
      // 合并是在之前的 option 基础上更新，不合并是直接替换
      let config = { notMerge: true };
      this.chart.setOption(this.option, config);
    },
    onChartClick: function(params) {
      this.$emit("click", params);
    }
  }
};
</script>

<style lang="css" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
