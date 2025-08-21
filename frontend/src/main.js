import { createApp } from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import './axios'

createApp(App).use(router).use(store).mount('#app')

// npm install vue-router