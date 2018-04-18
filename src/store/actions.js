import {login } from '../utils/request'
let actions = {
    getToken({commit},{data,notify,router}){
        login(data).then((res)=>{
            
            if(res.success == 0){
                commit('saveToken',res.token);
                commit('saveUser',res.user.name)
                localStorage.setItem('token',res.token)
                localStorage.setItem('username',res.user.name)
                
                notify({
                    title:'登录成功',
                    message: '跳转首页',
                    type: 'success',
                    duration: 2000
                })
                
                setTimeout(() => {
                    router.push({
                        path:'/home'
                    })
                }, 1000);
            }else{
                notify({
                    title:'登录出错',
                    message: '用户名和密码错误',
                    type: 'error',
                    duration: 2000
                })
            }
            
        })
        
    }
}
export default actions