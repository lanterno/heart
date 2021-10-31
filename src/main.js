import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:7999/'

const app = createApp(App)
app.use(store)

app.mount('#app')
