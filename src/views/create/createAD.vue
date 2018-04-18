<template>
<el-container>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '2', '3']">
      <el-submenu index="1">
        <template slot="title">建立广告计划</template>
        <el-menu-item-group>
          <template slot="title">选择计划</template>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">广告单元</template>
        <el-menu-item-group>
          <el-menu-item index="2-3">基本信息</el-menu-item>
          <el-menu-item index="2-3">定向</el-menu-item>
          <el-menu-item index="2-3">广告位</el-menu-item>
          <el-menu-item index="2-3">出价</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">广告创意</template>
        <el-menu-item-group>
          <el-menu-item index="3-1">落地页</el-menu-item>
          <el-menu-item index="3-2">上传创意</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  <router-view></router-view>
    </el-container>  
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>
