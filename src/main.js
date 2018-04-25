// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import router from './router'

import VueLocalStorage from 'vue-ls'

import axios from 'axios'

import VueAxios from 'vue-axios'

import VueIdb from 'vue-idb'

import BackToTop from 'vue-backtotop'

Vue.use(BackToTop);

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

    database: 'bigtest',
    schemas: [
      { tests: 'id, title, created_at, updated_at' },
      { bigs: 'uuid, caption, creation, update' }
    ],
    options: {
      tests: { type: 'list', primary: 'id', label: 'label', updated_at: 'updated_at' },
      bigs: { type: 'biglist', primary: 'uuid', label: 'caption', updated_at: 'update' }
    },
    apis: {
      bigs: {
        all: () => this.axios
        .get(
          'https://newsapi.org/v2/top-headlines?sources=' +
            source +
            '&apiKey=30fdd9c8493742eebe75a786fc36f1bd',
        )
      }
    }
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

