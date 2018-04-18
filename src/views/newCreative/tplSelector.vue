<template>
  <div class="origin-box">
        <el-upload
        class="avatar-uploader"
        action="http://localhost:9000/dsp-creative/creative/upload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div><span>广告文案 ：</span><input type="text" placeholder="请设置广告名称"> <span>0/18</span></div>
        <div><span>监控链接 ：</span><input type="text" placeholder="请设置广告名称"></div>
    </div>
</template>
<script>
export default {
  name: "tplSelector",
  data() {
    return {
        imageUrl: "",
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = "http://localhost:9000/" + res.data.value;
      //this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = 1; //file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
