import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './views/Home.vue'
import Add from './views/Add.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)

const routes = [
	{path: '/', component: Home},
	{path: '/add', component: Add},
]

const router = new VueRouter({
	routes
})


new Vue({
	router,
	vuetify: new Vuetify(),
	el: '#app',
	render: h => h(App)
})