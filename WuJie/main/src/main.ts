import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Wujie from 'wujie-vue3' // 引入无界作者封装的函数进行应用的注册

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(router).use(Wujie) // use一下

app.mount('#app')
