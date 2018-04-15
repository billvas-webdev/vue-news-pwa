// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import router from './router'

import VueLocalStorage from 'vue-ls'

import axios from 'axios'

import VueAxios from 'vue-axios'

import VueIdb from 'vue-idb'

Vue.config.productionTip = false

Vue.use(VueAxios,axios)

let options = {
	namespace: 'favorites_'
};

/*let options = {
	namespace: 'favoriteArticles_'
};*/
Vue.use(VueLocalStorage, options);

Vue.use(VueIdb)

const idb = new VueIdb({
  version: 2,
  database: 'news articles',
  schemas: [
    { source: 'id, name, author, updated_at' },
  		{ posts: 'id, url' }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

