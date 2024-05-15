import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'
// 引入字体
import './assets/font/font.css'
// 引入El图标文件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 路由
import routers from '@/router/Index'
// store
import store from './store';



const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(routers)
app.use(store);
app.mount('#app')

