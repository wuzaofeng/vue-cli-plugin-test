// 导入组件必须声明name (install方法需要用到)
import Test from './Test'

// 为组件提供install 安装方法
Test.install = Vue => {
  Vue.component(Test.name, Test)
}

export default Test
