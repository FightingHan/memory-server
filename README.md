MEMORY_SERVER

### 开发环境
1. 使用 src/config/key.js 进行运行环境的配置
2. 先执行 npm install
3. 然后 npm run dev


### 构建测试版本
1. 使用 build.config.js 进行构建相关的配置
2. 使用 src/config/test.json 进行运行环境的配置
3. 运行 npm run build:test
4. 输出文件默认在 dist 目录


### 构建生产版本
1. 使用 build.config.js 进行构建相关的配置
2. 使用 src/config/prod.json 进行运行环境的配置
3. 运行 npm run build:prod
4. 输出文件默认在 dist 目录


### api接口文档
1. api接口文档使用swagger(https://swagger.io/)动态生成
2. 使用npm run dev启动项目之后，访问http://localhost:8080/api-docs/（这里是在本地启动）
3. 只有在开发环境下启动才可以访问此文档# memory-server
# memory-server
