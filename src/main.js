import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
