const path = require('path')
module.exports = {
    // 配置入口文件 入口的值可以是一个字符串 也可以是一个对象
    // entry: './src/main.js'
    entry: {
        // 入口文件是对象的时候 对象的key(在不配置output的时候)会作为默认生成的js文件的文件名称
        index: './src/index.js'
    },
    // 打包输出文件的相关配置
    // publicPath : __dirname + '/static/' 表示publicPath(资源引入路径)为绝对路径
    // publicPath: '/' 资源引入从根目录开始
    // publicPath: './' 代表相对路径
    output: {
        publicPath: '/', // 公共资源引入的路径
        path: path.resolve(__dirname, 'dist'), // 将打包生成的文件夹解析到当前项目的跟目录中
        filename: 'index.js' // 打包生成的js文件的名称
    },
    module: {}
}