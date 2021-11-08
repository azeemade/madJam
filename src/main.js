import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
//import VueMeta from 'vue-meta'

createApp(App)
.use(router)
.use(store)
.use(VueLoading)
/*.use(VueMeta), {
    keyName: 'metaInfo'
  })*/
.mount('#app')
