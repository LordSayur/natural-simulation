import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import vueHighlightJS from 'vue-highlightjs';
import 'highlight.js/styles/solarized-light.css';

Vue.use(vueHighlightJS);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
