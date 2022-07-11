import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Vue3Sanitize from 'vue-3-sanitize'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Sanitize, {
  allowedTags: ['img', 'br', 'h1', 'h2', 'h3']
})

app.mount('#app')
