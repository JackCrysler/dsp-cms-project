<template>
  <div class="Origin">
    <el-row :gutter="12">
      <el-col :span="6">
        <h1>广告创意</h1>
      </el-col>
    </el-row>
    <el-row :gutter="12" style="margin-top:20px;">
      <el-col :span="12">
        <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="创意ID">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-row :span="24">
          <el-col :span="12">
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="12">
            <el-button type="info">查询</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :span="24" style="margin-top:20px;">
      <el-col :span="12">
        <el-button type="primary" @click="toCreateCreative">新建创意</el-button>
        <el-select v-model="value" placeholder="批量修改">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="12">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>
        <el-select v-model="value" placeholder="自定义列">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px;">
      <el-col :span="24">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="material" label="创意素材" width="100">
          </el-table-column>
          <el-table-column prop="materialId" label="创意ID" width="90">
          </el-table-column>
          <el-table-column prop="materialType" label="创意类型" width="90">
          </el-table-column>
          <el-table-column prop="size" label="尺寸" width="80">
          </el-table-column>
          <el-table-column prop="fall" label="落地页链接" width="120">
          </el-table-column>
          <el-table-column prop="monitor" label="监测链接" width="120">
          </el-table-column>
          <el-table-column prop="element" label="所属单元" width="80">
          </el-table-column>
          <el-table-column prop="plan" label="所属计划" width="100">
          </el-table-column>
          <el-table-column prop="exposure" label="曝光量" width="70">
          </el-table-column>
          <el-table-column prop="click" label="点击量" width="70">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="70">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="mini" @click="dialogVisible = true">编辑</el-button>
              <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
              </el-dialog>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row style="margin-top:20px;">
      <el-col :span="12" :offset="12">
        <el-pagination background layout="prev, pager, next" :total="tableData.length">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      searchValue: '',
      select: '',
      value: '',
      value1: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }],
      tableData: [{
        material: '2016-05-02',
        materialId: '171102-4',
        materialType: '图文（单）',
        size: '320*240',
        fall: 'https://baidu.com',
        monitor: 'https://www.baidu.com',
        element: '123456',
        plan: 'DD-广告测试团队',
        exposure: 2000,
        click: 1000,
        status: '投放中'
      }]
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    toCreateCreative(){
        this.$router.push({
            name:'newCreative'
        })
    }
  }
}
</script>

<style>
.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
