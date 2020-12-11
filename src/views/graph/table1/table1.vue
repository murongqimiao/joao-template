<!-- 主文件 -->
<template>
  <div>
    <div class="table1" id="map-contain">
        </div>

    <div id="toolControl">
      <div class="toolItem active" id="marker" title="点标记"></div>
      <div class="toolItem" id="polyline" title="折线"></div>
      <div class="toolItem" id="polygon" title="多边形"></div>
      <div class="toolItem" id="circle" title="圆形"></div>
    </div>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <!-- <raddar-chart/> -->
            <bar-chart/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="16">
        <div class="chart-wrapper">
          <table-list
            :table-header-data="tableHeaderData"
            :data-list="table_data.table_tableDate"
            :button-content="buttonContent"
            :loading="table_data.loading"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { table1Data } from './data.js'
const factoryImg = require("./factory.png");
const factoryImgYellow = require("./factoryYellow.png");
import BarChart from '@/components/BarChart'
import TableList from "@/components/TableList"
import { mapState, mapActions } from 'vuex'
import { tableData } from './data'
export default {
  
  components: {
    BarChart,
    TableList
  },
  props: {},
  data () {
    return {
      data: table1Data,
      tableHeaderData: tableData, // 列表表头数据
      buttonContent: [
        {
          buttonName: '下载示例',
          clickEvent: 'downDetails'
        }
      ],
    }
  },
  created () {},
  mounted () {
    var map, editor, activeType = 'marker';
    // 切换激活图层
    document.getElementById('toolControl').addEventListener('click', (e) => {
			let id = e.target.id;
			if (id !== 'toolControl') {
				document.getElementById(activeType).className = "toolItem";
				document.getElementById(id).className = "toolItem active";
				activeType = id;

				editor.setActiveOverlay(id);
			}
		});
    // 地图初始化函数，本例取名为init，开发者可根据实际情况定义
    function initMap () {
      // 定义地图中心点坐标
      var center = new TMap.LatLng(39.984120, 116.307484)
      // 定义map变量，调用 TMap.Map() 构造函数创建地图
      var map = new TMap.Map(document.getElementById('map-contain'), {
        viewMode: '2D',
        center: center, // 设置地图中心点坐标
        zoom: 5, // 设置地图缩放级别
        pitch: 43.5, // 设置俯仰角
        rotation: 45 // 设置地图旋转角度
      })

      // 初始化几何图形及编辑器
      editor = new TMap.tools.GeometryEditor({
				map, // 编辑器绑定的地图对象
				overlayList: [ // 可编辑图层
					{
						overlay: new TMap.MultiMarker({
							map
						}),
            id: 'marker',
            styleId: 'myStyle'
					},
					{
						overlay: new TMap.MultiPolyline({
							map
						}),
						id: 'polyline'
					},
					{
						overlay: new TMap.MultiPolygon({
							map
						}),
						id: 'polygon'
					},
					{
						overlay: new TMap.MultiCircle({
							map
						}),
						id: 'circle'
					}
				],
				actionMode: TMap.tools.constants.EDITOR_ACTION.DRAW, // 编辑器的工作模式
				activeOverlayId: 'marker', // 激活图层
				snappable: true // 开启吸附
      });
      editor.on('draw_complete', (geometry) => { 
				console.log(geometry);
			});

      //创建并初始化MultiMarker
      var markerLayer = new TMap.MultiMarker({
          map: map,  //指定地图容器
          //样式定义
          styles: {
              //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
              "myStyle": new TMap.MarkerStyle({ 
                  "width": 25,  // 点标记样式宽度（像素）
                  "height": 35, // 点标记样式高度（像素）
                  "src": factoryImg,  //图片路径
                  //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
                  "anchor": { x: 16, y: 32 }  
              }),
              "myStyleYellow": new TMap.MarkerStyle({ 
                  "width": 25,  // 点标记样式宽度（像素）
                  "height": 35, // 点标记样式高度（像素）
                  "src": factoryImgYellow,  //图片路径
                  //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
                  "anchor": { x: 16, y: 32 }  
              }) 
          },
          //点标记数据数组
          geometries: [{
              "id": "1",   //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
              "styleId": 'myStyle',  //指定样式id
              "position": new TMap.LatLng(38.954104, 115.357503),  //点标记坐标位置
              "properties": {//自定义属性
                  "title": "marker1"
              }
          }, {//第二个点标记
              "id": "2",
              "styleId": 'myStyleYellow',
              "position": new TMap.LatLng(24.994104, 115.287503),
              "properties": {
                  "title": "myStyleYellow"
              }
          }, {//第二个点标记
              "id": "3",
              "styleId": 'myStyle',
              "position": new TMap.LatLng(26.994104, 100.287503),
              "properties": {
                  "title": "marker2"
              }
          }, {//第二个点标记
              "id": "4",
              "styleId": 'myStyle',
              "position": new TMap.LatLng(40.994104, 89.287503),
              "properties": {
                  "title": "marker2"
              }
          }, {//第二个点标记
              "id": "5",
              "styleId": 'myStyle',
              "position": new TMap.LatLng(35.994104, 100.287503),
              "properties": {
                  "title": "marker2"
              }
          }, {//第二个点标记
              "id": "6",
              "styleId": 'myStyle',
              "position": new TMap.LatLng(32.994104, 120.287503),
              "properties": {
                  "title": "marker2"
              }
          }
          ]
      });

      var infoWindowLocation = new TMap.LatLng(39.984104,116.307503);//创建一个坐标
      //创建InfoWindow实例，并进行初始化
      var infoWindow = new TMap.InfoWindow({
          map: map,
          position: center,
          //设置infoWindow，content支持直接传入html代码，以实现各类内容格式需求
          content: "<div class='imgConatain' style={{width:}><img style='width: 100px;' src='https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1888782926,2290600533&fm=26&gp=0.jpg'><p>主厂房!</p><p>库存 75319t</p></div>"
      });

      //创建 MultiPolyline
      var polylineLayer = new TMap.MultiPolyline({
          id: 'polyline-layer', //图层唯一标识
          map: map,//设置折线图层显示到哪个地图实例中
          //折线样式定义
          styles: {
              'style_blue': new TMap.PolylineStyle({
                  'color': '#3777FF', //线填充色
                  'width': 6, //折线宽度
                  'borderWidth': 5, //边线宽度
                  'borderColor': '#FFF', //边线颜色
                  'lineCap': 'butt' //线端头方式
              }),
              'style_red': new TMap.PolylineStyle({
                  'color': '#CC0000', //线填充色
                  'width': 6, //折线宽度
                  'borderWidth': 5, //边线宽度
                  'borderColor': '#CCC', //边线颜色
                  'lineCap': 'round' //线端头方式
              })
          },
          //折线数据定义
          geometries: [
              {//第1条线
                  'id': 'pl_1',//折线唯一标识，删除时使用
                  'styleId': 'style_blue',//绑定样式名
                  'paths': [new TMap.LatLng(38.954104, 115.357503), new TMap.LatLng(35.994104, 100.287503), new TMap.LatLng(32.994104, 120.287503)]
              },
              {//第2条线
                  'id': 'pl_2',   
                  'styleId': 'style_blue',
                  'paths': [new TMap.LatLng(35.994104,100.287503), new TMap.LatLng(33.994104,101.287503), new TMap.LatLng(29.994104,100.287503), new TMap.LatLng(26.994104,100.287503)]
              },
              {//第2条线
                  'id': 'pl_2',   
                  'styleId': 'style_red',
                  'paths': [new TMap.LatLng(32.994104, 120.287503), new TMap.LatLng(25.994104,116.287503), new TMap.LatLng(24.994104,115.287503)]
              }
          ]
      });

    }
    initMap();
  },
  computed: mapState({
    table_data: ({ table }) => {
      return table
    }
  }),
  methods: {},
}
</script>

<style lang="scss" scoped>
.table1 {
    width: 100%;
    text-align: center;
    color: black;
    font-size: 14px;
    margin-top: 20px;
}
#map-contain{
  height: 500px;
}
.imgConatain {
  font-size: 12px;
  font-weight: 14px;
  color: black;
  img {
    width: 100px;
    height: 80px;
  }
}
.chart-wrapper {
  padding: 20px;
}
#marker {
		background-image: url('https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/marker_editor.png');
	}
	#polyline {
		background-image: url('https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/polyline.png');
	}
	#polygon {
		background-image: url('https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/polygon.png');
	}
	#circle {
		background-image: url('https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/circle.png');
	}

	#toolControl {
		position: absolute;
		top: 560px;
		left: 0px;
		right: 0px;
		margin: auto;
		z-index: 1001;
	}
  .toolItem {
		width: 30px;
		height: 30px;
		float: left;
		margin: 1px;
		padding: 4px;
		border-radius: 3px;
		background-size: 30px 30px;
		background-position: 4px 4px;
		background-repeat: no-repeat;
		box-shadow: 0 1px 2px 0 #E4E7EF;
		background-color: #ffffff;
		border: 1px solid #ffffff;
	}
	.toolItem:hover {
		border-color: #789CFF;
	}
</style>
