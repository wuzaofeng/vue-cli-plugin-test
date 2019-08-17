# verdaccio-template-wp

> 主要用于打包组件类文件。 包括源码、构建工具 
> 该模版使用的es6 + less + ESLint

### 目录结构
```
- examples       测试组件目录
- lib            打包目录
- src            源文件
- public         **
- vue.config.js  vue配置文件
- .gitignore     忽略文件
```

### script
```
npm run serve  // 启动本地，在examples文件夹调试
```
```
npm run start  // 当npm link时，实时更新联调
```
```
npm run lint   // 目录格式化
```
```
npm run lib   // 目录打包
```

### 使用流程(参考模版示例开发)
1. 下载模版
2. 修改package.json的name(开发包名), version(版本号)
3. 在src文件夹开发，记得在src/index.js 导出开发的组件
4. 可在examples引用组件测试

### 注意事项
webpack会对node_modules预先编译
用本地npm link联调时需要 webpack的resolve 中 symlinks:false 可以解决

### 版本记录
v1.0.0 完成项目构建 example测试目录, packages源代码, 样式 less

v1.1.0 由于本地调试时，包引入别的项目中会报eslint找不到模块错误

修改内容：
* packages目录改为src目录，以便于目录结构清晰
* 删除prettier风格，统一用standard风格
* 统一用stylus预处理样式风格
* 添加发布前构建包，防止忘记构建

v1.1.1 添加npm run start(与本地项目联调时候，实时打包)