// 导入组件必须声明name (install方法需要用到)
import HelloWorld from './HelloWorld'

// 为组件提供install 安装方法
HelloWorld.install = Vue => {
  Vue.component(HelloWorld.name, HelloWorld)
}

export default HelloWorld
