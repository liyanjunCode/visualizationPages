import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import "amfe-flexible"
import vant from "@/common/assets/js/vant"
import "@/common/assets/css/index.css"
createApp(App).use(vant).mount('#app')
