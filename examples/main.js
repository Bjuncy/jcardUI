import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import Demo from '../components/lib/demo/index'
// import Card from '../components/lib/card/index'
// Vue.use(Demo) // Demo.install() => Vue.component('name', Demo)
// Vue.use(Card)

import 'jcard-ui/dist/css/index.css';
import JUI from 'jcard-ui';
Vue.use(JUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
