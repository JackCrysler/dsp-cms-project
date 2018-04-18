<template>
  <el-container>
    <el-main>
      <p>广告创意</p>
      <div class="box">
        <h3>落地页</h3>
        <span>着陆页地址：</span><input type="text" placeholder="请设置广告名称"><span>预览</span>
      </div>
      <div>
      </div>
      <div class="box-up">
        <h3>上传创意</h3>
        <dsp-tab :tabData="tabData" :editable="true" @edit="editFunc">
          <dsp-tab-item v-for="x in tabData" :slot="x.name" :key="x.name">
            <uploader></uploader>
          </dsp-tab-item>
        </dsp-tab>
      </div>
      <el-button>提交</el-button>
    </el-main>
  </el-container>
</template>

<script>
import dspTab from '@/components/dsp-tab.vue'
import dspTabItem from '@/components/dsp-tab-item.vue'
import uploader from './tplSelector'
import { mapState, mapMutations } from "vuex";
export default {
  name: "CreateBanner",
  data() {
    return {
      isShow: false,
      isOrigin: false,
      
      activeName: "first",
      len:1,
      tabData:[
        {
          label:'创意1',
          name:'tab-content-1'
        }
      ]
    };
  },
  computed: {
    ...mapState(["creativeTplType"])
  },
  methods: {
    cb(e){
      let FD = new FormData()

      let file = e.target.files[0];
          FD.append("file",file);

      this.$http.post('http://localhost:9000/dsp-creative/creative/upload',FD).then(res=>{
        console.log(res)
      })
    },
    editFunc(){
      this.tabData.push({
        label:"创意"+(++this.len),
        name:'tab-content-'+this.len
      })
    },
    newTab() {
      console.log(123);
    },
    popUp() {
      let that = this;
      this.$confirm("选择模板", "", {
        center: true,
        cancelButtonText: "单图",
        confirmButtonText: "多图",
        callback(action) {
          that.$store.commit(
            "updateCreativeTplType",
            action == "cancel" ? "single" : "multiple"
          );
        }
      })
        .then(action => {
          console.log(action);
        })
        .catch(() => {});
    },
    fn(data) {
      console.log(data);
    },
    handleEdit(target, action) {
      console.log(target);
      console.log(action);
    }
  },
  components:{
    dspTab,
    dspTabItem,
    uploader
  },
  mounted() {}
};
</script>

<style scoped lang="less">

.el-aside {
  background-color: #f5f5f5;
  color: #333;
  text-align: center;
  line-height: 120px;
  .el-menu {
    background: #f5f5f5;
  }
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  line-height: 60px;
}
p {
  height: 100px;
  font-size: 32px;
}
.box {
  height: 200px;
  margin-bottom: 10px;
  line-height: 60px;
  input {
    width: 240px;
    height: 30px;
  }
  span {
    padding: 0 10px;
  }
}
.box-up {
  height: 420px;
  margin-bottom: 10px;
  line-height: 60px;
}
.el-button {
  width: 166px;
  height: 52px;
  background: #ccc;
}
.dialog {
  h5 {
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    text-indent: 24px;
  }
  .singlePic {
    float: left;
    width: 180px;
    height: 170px;
    line-height: 170px;
    margin: 15px;
    border: 1px solid #ccc;
    text-align: center;
  }
  .manyPic {
    float: left;
    width: 180px;
    height: 170px;
    line-height: 170px;
    margin: 15px;
    border: 1px solid #ccc;
    text-align: center;
  }
}
.mark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  z-index: 999;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-icon-plus {
  border: 1px dashed skyblue;
}
.origin-box {
  input {
    width: 432px;
    height: 32px;
  }
}
</style>
