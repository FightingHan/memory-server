// server.js
const express = require('express')
const users = require('./src/routes/user/service'); // 导入users路由
const bodyParser = require('body-parser')
const app = express(); // express初始化
const port = process.env.PORT || 5000; // 设置端口号
const cors = require('cors');

// 在express中没有内置获取表单Post请求体的API,需要第三方包 body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 允许跨域
app.use(cors());

// 配置get请求的默认路由
app.get("/",(req, res)=>{ 
  res.send("Welcome to Wish!!")
})
// 配置users路由并使用
app.use('/api/users', users); 

// 启动服务,监听端口
app.listen(port, ()=>{ 
    console.log(`Server is Running on http://localhost:${port}`)
})
