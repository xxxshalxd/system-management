import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "@/router/index"
const app=createApp(App)
app.use(router)

// 整体导入elementplus组件库
import ElementPlus from "element-plus";//导入elementplus组件库的所有模块和功能
import "element-plus/dist/index.css";// 导入elementplus组件库所需的全局css样式
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//导入组件库中的所有图标

//注册ElementPlus组件库中的所有图标到全局Vue应用中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);

import {createPinia} from "pinia"
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
