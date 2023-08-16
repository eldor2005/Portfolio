import { createApp } from 'vue'
import App from './components/App/App.vue'
import './assets/styles/main.scss'
import router from './router/index.js'



const app = createApp(App)
app.use(router)
app.mount('#app')