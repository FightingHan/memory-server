const mongoose = require("mongoose");
// DB Config 连接数据库
const db = require("../../config/keys").mongoURI;// 创建配置项目录config, 存放静态常量
mongoose.connect(db, {
    user: 'admin',
    pass: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => {
    console.log(`MongoDB connected!`)
}).catch(err => {
    console.log(`MongoDB connected Failed: \n ${err}`)
})

/**
 数据库账号
 admin 
 --(user: 'admin', pass: 'admin')
 test
 --(user: 'root', pass: 'root') 
*/

export default mongoose