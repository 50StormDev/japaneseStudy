import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { Quasar } from 'quasar'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

createApp(App)
  .use(createPinia())
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .mount('#app')
