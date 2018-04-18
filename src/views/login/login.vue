<template>
  <div class="login-wrap">
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-form :model="formData" ref="loginBox">
          <el-form-item label="用户名" prop="username" :rules="userRules">
            <el-input v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" :rules="passRules">
            <el-input v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button v-on:click.native="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      
    </el-row>
    
  </div>
</template>
<script>
import { login } from "./../../utils/request";
export default {
  data() {
    return {
      formData:{
        username: "asdfghj",
        password: ""
      },
      userRules:[{
        required:true,
        message:"用户名不可省略"
      },{
        type:"email",
        message:"请输入正确格式的email"
      }],
      passRules:[{
        //validator:()=>{},
        required:true,
        message:"密码不可省略"
      }]
    };
  },
  methods: {
    login() {
      
      this.$refs.loginBox.validate((isValid,options)=>{
        if(isValid){
          this.$store.dispatch('getToken',{
            data:this.formData,
            notify:this.$notify,
            router:this.$router
          })
        }else{

          this.$notify({
            title: '错误',
            message: '请填写正确的用户名和密码',
            type: 'warning'
          })
        }
        
      })
    }
  }
};
</script>
<style scoped>
.login-wrap{
  background: lightblue;
}
</style>

