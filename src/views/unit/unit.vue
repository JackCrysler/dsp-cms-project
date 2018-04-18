<template>
  <div class="adunit">
    <div class="adunit_title">
      <h1>DD-广告测试团队-20171102-4</h1>
      <div>计划</div>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="line-height:36px; border-bottom:1px solid #eee;">
      <el-breadcrumb-item>所有广告计划</el-breadcrumb-item>
      <el-breadcrumb-item>DD-广告测试团队-20171102-4</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="plan">
      <div class="plans">
        <span>计划ID: </span>
        <p> 20171102</p>
      </div>
      <div class="plans">
        <span>投放目的: </span>
        <p> 网页</p>
      </div>
      <div class="plans">
        <span>日预算: </span>
        <p> 3400</p>
        <i class="el-icon-edit" style="color:#2873FF;font-size:14px;margin:18px 0 0 6px;"></i>
      </div>
    </div>
    <div class="adunit_tabs">
      <div class="adunit_every_tabs">
        <i class="el-icon-printer"></i>
        <h4>广告单元</h4>
      </div>
      <div class="adunit_every_tabs">
        <i class="el-icon-message"></i>
        <h4>广告创意</h4>
      </div>
    </div>
    <el-row style="background:#FAFAFA; padding:10px 10px; " :gutter="10">
      <el-col :span="12">
        <el-input size="small" placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-select style="width:110px;background:#fff;height:30px;" v-model="select" slot="prepend" placeholder="单位名称">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </el-input>
      </el-col>
      <el-col :span="12" align="middle">
        <el-row>
          <el-col :span="3">
            <h4 style="line-height:30px;font-weight:normal">状态</h4>
          </el-col>
          <el-col :span="8">
            <el-select size="small" v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-button style="padding:9px 40px; background:#000; color:#fff;" size="small">查询</el-button>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="padding: 16px 0 8px 0">
      <el-col :span="14">
        <el-button type="primary" size="small" icon="el-icon-plus">新建单元</el-button>
        <el-select size="mini" v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="10">
        <el-date-picker type="daterange" range-separator="至" size="mini" style="width:180px;" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
        <el-select size="mini" style="width:110px;margin-left:15px;" v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-table max-height="300" ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="50" style="padding-left:70px">

      </el-table-column>
      <el-table-column width="100" style="padding-left:70px">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.switch_flag" active-color="#13ce66" inactive-color="#2BD1B7" size="mini">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="单位ID" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      input5: '',
      input6: '',
      select: '',
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        switch_flag: false,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        switch_flag: false,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        switch_flag: false,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        switch_flag: false,
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style>
.adunit_title {
  width: 100%;
  overflow: hidden;
}
.adunit_title h1{
  float: left;
}
.adunit_title div {
  float: left;
  font-size: 12px;
  background: #2bd1b7;
  color: #fff;
  width: 35px;
  text-align: center;
  height: 20px;
  line-height: 20px;
  border-radius: 15px;
  margin: 8px 0 0 15px;
}

.plan {
  width: 100%;
  overflow: hidden;
  display: flex;
  line-height: 50px;
  border-bottom: 1px solid #eee;
}

.plan .plans {
  display: flex;
  padding-left: 30px;
}

.plan .plans:nth-child(1) {
  padding-left: 0;
}

.adunit_tabs {
  overflow: hidden;
}

.adunit_every_tabs {
  float: left;
  display: flex;
  align-items: center;
  padding-top: 22px;
  padding-left: 20px;
}
.adunit_every_tabs i {
  font-size: 20px;
  color: #2873FF;
}
.adunit_every_tabs h4{
  font-weight: normal;
  padding-left: 5px;
}
.adunit_every_tabs:nth-child(1) {
  padding-left: 0;
}
</style>
