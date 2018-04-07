import Vue from 'vue'
import VueRouter from 'vue-router'

import index from './pages/index.vue'
import personal from './pages/personal.vue'
import share from './pages/share.vue'

Vue.use(VueRouter)

export default new VueRouter({
	'mode' : 'history',
  	routes: [
  	  { path: '/', component: index },
  	  { path: '/personal', component: personal },
  	  { path: '/share', component: share }
  	]	
})