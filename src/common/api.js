// Base API Configuration

import axios from 'axios'

//import VueAxios from 'vue-axios'

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.

    // TODO: Use your own APPID for OpenWeatherMap.org
    config.params.APPID = 'a1229545e71f4cf85672eee69b3b302e';
    config.params.units = 'imperial';

    return config;
}, function (error) {
    return Promise.reject(error);
});

/*export const VueAPI = VueAxios.create({
  baseURL: 'https://newsapi.org/v2/sources?'
});

VueAPI.interceptors.request.use(function (config) {
  // Set common parameters for each request to the API.

  // TODO: Use your own APPID for OpenWeatherMap.org
  config.params.APPID = '30fdd9c8493742eebe75a786fc36f1bd';
  //config.params.units = 'imperial';

  return config;
}, function (error) {
  return Promise.reject(error);
});
*/
