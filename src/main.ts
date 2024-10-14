import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router) // Asegúrate de usar el enrutador aquí
  .mount('#app')
