<template>
  <div class="jumbotron">
    <h2>Current Weather <span v-if="weatherData"> for {{ weatherData.name }}, {{weatherData.sys.country }}</span></h2>
    <message-container v-bind:messages="messages"></message-container>
    <p>
      <router-link to="/"><i class="fa fa-home"></i>Home</router-link> |
      <router-link v-bind:to="{ name: 'Forecast', params: { cityId: $route.params.cityId } }">View 5-Day Forecast</router-link>
    </p>
    <load-spinner v-if="showLoading"></load-spinner>
    <div v-if="weatherData">
      <weather-summary v-bind:weatherData="weatherData.weather"></weather-summary>
      <weather-data v-bind:weatherData="weatherData.main"></weather-data>
    </div>
  </div>
</template>

<script>
import {API} from '@/common/api';
import WeatherSummary from '@/components/WeatherSummary';
import WeatherData from '@/components/WeatherData';
import CubeSpinner from '@/components/CubeSpinner';
import MessageContainer from '@/components/MessageContainer';
export default {
  name: 'CurrentWeather',
  components: {
    'weather-summary': WeatherSummary,
    'weather-data': WeatherData,
    'load-spinner': CubeSpinner,
    'message-container': MessageContainer
  },
  data () {
    return {
      weatherData: null,
      messages: [],
      query: '',
      showLoading: false
    }
  },
  created () {
    this.showLoading = true;
    let cacheLabel = 'CurrentWeather_' + this.$route.params.cityId;
    let cacheExpiry=15*60*1000;
    if (this.$ls.get(cacheLabel)) {
      console.log('Cache query is available');
      this.results=this.$ls.get(cacheLabel);
      this.showLoading=false;
    }
    else {
      console.log('No cache is available');
    API.get('weather', {
      params: {
          id: this.$route.params.cityId
      }
    })
    .then(response => {
      this.showLoading = false;
      this.weatherData = response.data;
    })
    .catch(error => {
      this.showLoading = false;
      this.messages.push({
        type: 'error',
        text: error.message
      });
    });
  }
}
}
</script>

<style scoped>
.jumbotron {
  padding: 7rem 35rem;
  width:100%;
  margin-left: auto;
  margin-right: auto;
  background: lightblue;/* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #052440, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#052440, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.errors li {
  color: red;
  border: solid red 1px;
  padding: 5px;
}
h1, h2 {
  font-weight: bold;
  color: lightgoldenrodyellow;
  text-shadow: 1px .75px 0 #052440;
}

ul {
  list-style-type: none;
  padding: 0;

}
li {
  display: inline-block;
  width: 300px;
  min-height: 300px;
  border: solid 1px #e8e8e8;
  padding: 10px;

}
a {
  color: #b1ffb9;
  text-decoration: underline;
  text-shadow: 1px .75px 0 #052440;
  font-weight: 500
}
a:hover {
      color: #337ab7;
}
div dl {
  font-weight: 600;
  font-size: 1.7rem;
  border-radius: 1rem;
  border-top: 0.5px solid lightgoldenrodyellow;
  background: lightblue;/* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #758794, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#758794, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
dd {
  padding: 0;
}
@media only screen and (max-width: 360px) and (min-width: 320px){
.jumbotron {
  width:100%;
  padding: 1rem 1rem;
  margin-left: auto;
  margin-right: auto;
}
a {
  font-size: 2.1rem;
}
li {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
}

@media (max-width: 389px) and (min-width: 361px){
.jumbotron {
  width:100%;
  padding: 0rem 1rem;
  margin-left: auto;
  margin-right: auto;
}
}
@media (max-width: 436px) and (min-width: 390px){
.jumbotron {
  width:100%;
  padding: 1rem 1rem;
  margin-left: auto;
  margin-right: auto;
}
}
@media (max-width: 469px) and (min-width: 437px){
.jumbotron {
  width:100%;
  padding: 1rem 1rem;
  margin-left: auto;
  margin-right: auto;
}
}
@media (max-width: 510px) and (min-width: 469px){
.jumbotron {
  width:100%;
  padding: 1rem 1rem;
  margin-left: auto;
  margin-right: auto;
}
}
@media (max-width: 717px) and (min-width: 511px){
.jumbotron {
  width: 100%;
  padding: 1rem 3rem;
  margin-left: auto;
  margin-right: auto;
}
}
@media (max-width: 812px) and (min-width: 718px){
.jumbotron {
  width: 100%;
  padding: 1rem 5rem;
  margin-left: auto;
  margin-right: auto;
}
}
@media (max-width: 992px) and (min-width: 813px){
.jumbotron {
  width: 100%;
  padding: 1rem 7rem;
  margin-left: auto;
  margin-right: auto;
}
}






</style>
