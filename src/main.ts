import { createApp } from 'vue'

import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

import App from './App.vue'

import { router } from './router'

import Antd from 'ant-design-vue'

import './style.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
})

const app = createApp(App)

app.use(router)

app.use(Antd)

app.use(VueQueryPlugin, { queryClient })

app.mount('#app')
