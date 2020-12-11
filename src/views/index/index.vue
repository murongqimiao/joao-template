<!-- 主文件 -->
<template>
  <div class="index">
    <div id="map-contain"></div>
  </div>
</template>

<script>
import { dashboardData } from './data.js'

export default {
  components: {
  },
  props: {},
  data () {
    return {
      data: indexData,
      currentPick: 'newVisitis'
    }
  },
  created () {},
  mounted () {
    //地图初始化函数，本例取名为init，开发者可根据实际情况定义
    function initMap() {
        //定义地图中心点坐标
        var center = new TMap.LatLng(39.984120, 116.307484)
        //定义map变量，调用 TMap.Map() 构造函数创建地图
        var map = new TMap.Map(document.getElementById('map-contain'), {
            center: center,//设置地图中心点坐标
            zoom: 17.2,   //设置地图缩放级别
            pitch: 43.5,  //设置俯仰角
            rotation: 45    //设置地图旋转角度
        });
    }
    initMap();
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.index {
    width: 100%;
    text-align: center;
    margin-top: 20px;
     .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
}
</style>
