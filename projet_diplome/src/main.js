import { createApp } from 'vue'
import App from './App.vue'
import myMenu from './components/navbar.vue'

createApp(App)

  .use(myMenu)

  .mount('#app')
