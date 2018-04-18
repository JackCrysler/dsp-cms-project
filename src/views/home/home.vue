<template>
    <div>
        <h1>this is home page</h1>
        <el-row>
            <el-col :span="24">
              <el-row>
                  <el-col :span="12"><h3>整体情况</h3></el-col>
                  <el-col :span="12">
                      <!-- <el-date-picker
                          v-model="days"
                          type="daterange"
                          align="right"
                          unlink-panels
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          :picker-options="pickerOptions2">
                      </el-date-picker> -->
                      <el-date-picker
                        v-model="startTime"
                        type="month"
                        value-format="yyyy/MM"
                        placeholder="选择月">
                      </el-date-picker>
                      <el-date-picker
                        v-model="endTime"
                        type="month"
                        value-format="yyyy/MM"
                        placeholder="选择月">
                      </el-date-picker>
                  </el-col>
              </el-row>
              <el-row :gutter="20" type="flex" justify="start">
                  <el-col :span="6">
                      <el-card shadow="hover" v-on:click.native="test">
                          总是显示
                      </el-card>
                  </el-col>
                  <el-col :span="6">
                      <el-card shadow="hover">
                          总是显示
                      </el-card>
                  </el-col>
                  <el-col :span="6">
                      <el-card shadow="hover">
                          总是显示
                      </el-card>
                  </el-col>
                  <el-col :span="6">
                      <el-card shadow="hover">
                          总是显示
                      </el-card>
                  </el-col>
              </el-row>
              <el-row>
                  <el-col :span="12">
                      <el-select v-model="value" placeholder="请选择">
                          <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                          </el-option>
                      </el-select>
                  </el-col>
              </el-row>
              <el-row>
                  <div ref="graph" class="graph"></div>
              </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Echarts, { init } from "echarts";
import moment from 'moment'
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      startTime:'2017/09',
      endTime:'2018/04',
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      days: null,
      axisList:[1,2,3,4,5],
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      instance:null
    };
  },
  watch: {
    startTime(n, o) {
      console.log(n)
    },
    endTime(n){
      console.log(n)
      this.getAllMonths(this.startTime,this.endTime)
    }
  },
  computed: {},
  methods: {
    getAllMonths(start,end){
      //yyyy/MM,
      let [startYear,startMonth] = start.split('/');
      let [endYear,endMonth] = end.split('/');
      
      let res = []
      //2016/04  2018/04
      while(startYear<=endYear){
        //先判断年份
        if(startYear<endYear){
          //年份不相等
          if(startMonth<=12){
            res.push(`${startYear}/${startMonth++}`)
          }else{
            startYear++;
            startMonth=1;
          }
        }else{
          if(startMonth<=endMonth){
            res.push(`${startYear}/${startMonth++}`)
          }else{
            startYear++
          }
        }
      }  
      this.axisList = res;
    },
    test() {
      let that = this;
      this.$http.post("/dsp-report/index",{count:this.axisList.length}).then(res => {
        console.log(res.data)
        that.instance.setOption({
          xAxis: {
            data: this.axisList,
          },
          series: [
          {
            data: res.data.dataY1,
            type: "line"
          }
        ]
        });
      });
    }
  },
  created() {},
  mounted() {
    let graphInstance = init(this.$refs.graph);
    this.instance = graphInstance;
    let option = {
      xAxis: {
        type: "category",
        data: this.axisList,
        boundaryGap : false,
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line"
        }
      ]
    };
    graphInstance.setOption(option);
    
    window.onresize=()=>{
    
      graphInstance.resize()
    }
  }
};
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.graph {
  width: 100%;
  height: 300px;
}
</style>
