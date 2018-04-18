const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./api')
const jwt = require('jsonwebtoken')
app.use(express.static('./'));

app.use(bodyParser.json())

//token验证
function verifyToken(token){
    return new Promise((resolve,reject)=>{
        jwt.verify(token,"1511",function(err,decoded){
            if(err){
                reject(err)
            }else{
                resolve(decoded)
            }
        })
    })
    
}


//设置跨域 cors
app.all('*',function(req,res,next){
    res.header("Access-Control-Allow-Origin","http://localhost:8080")
    res.header("Access-Control-Allow-Headers","Content-Type,Token,plantform")
    res.header('Content-Type',"application/json;charset=utf-8")
    
    next() 
    
})

//启动后端接口
api(app)

app.listen(9000,function(){
    console.log('server listen 9000')
})

