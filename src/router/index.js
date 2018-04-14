import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import CitySearch from '@/components/CitySearch'
import CurrentWeather from '@/components/CurrentWeather'
import Forecast from '@/components/Forecast'
import FavoriteArticles from '@/components/FavoriteArticles'
import Newslist from '@/components/Newslist'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/About',
      name: 'About',
      component: About
    },

    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'CitySearch',
      component: CitySearch
    },
    {
      path: '/:cityId/current',
      name: 'CurrentWeather',
      component: CurrentWeather
    },
    {
      path: '/:cityId/forecast',
      name: 'Forecast',
      component: Forecast
    },
   /* {
      path: '/:articleURL/FavoriteArticles',
      name: 'FavoriteArticles',
      component: FavoriteArticles
    },*/
    /*{
      path: '/:articleURL/FavoriteArticles',
      name: 'Newslist',
      component: Newslist
    }*/


  ]
});
