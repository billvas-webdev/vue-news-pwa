<template>
  <div class = "jumbotron">
    <favorite-cities v-bind:favoriteCities='favorites'></favorite-cities>
    <h2>Weather Forecast</h2>
    <message-container v-bind:messages="messages"></message-container>
    <form v-on:submit.prevent="getCities">
        <p>Enter city name: <input type="text" v-model="query" placeholder="City"> <button type="submit">Go</button></p>
    </form>
    <load-spinner v-if="showLoading"></load-spinner>
    <ul class="cities" v-if="results && results.list.length > 0">
      <li v-for="city in results.list">
        <h2>{{ city.name }}, {{ city.sys.country }}</h2>
        <p><router-link v-bind:to="{ name: 'CurrentWeather', params: { cityId: city.id } }">View Current Weather</router-link></p>

        <weather-summary v-bind:weatherData="city.weather"></weather-summary>

        <weather-data v-bind:weatherData="city.main"></weather-data>
        <p><button class="save" v-on:click="saveCity(city)">Save City to Favorites</button></p>
      </li>
    </ul>
  </div>
</template>

<script>
import {API} from '@/common/api';
import WeatherSummary from '@/components/WeatherSummary';
import WeatherData from '@/components/WeatherData';
import CubeSpinner from '@/components/CubeSpinner';
import MessageContainer from '@/components/MessageContainer';
import FavoriteCities from '@/components/FavoriteCities';
export default {
  name: 'CitySearch',
  components: {
    'weather-summary': WeatherSummary,
    'weather-data': WeatherData,
    'load-spinner': CubeSpinner,
    'message-container': MessageContainer,
    'favorite-cities': FavoriteCities
  },
  data () {
    return {
      results: null,
      query: '',
      showLoading: false,
      messages: [],
      favorites: []
    }
  },
  created () {
    if (this.$ls.get('favoriteCities')) {
      this.favorites=this.$ls.get('favoriteCities');
    }
  },
  methods: {
    saveCity: function (city) {
      this.favorites.push(city);
      this.$ls.set('favoriteCities', this.favorites);
    },
    getCities: function () {
      this.results = null;
      this.showLoading = true;
      let cacheLabel= 'citySearch_' + this.query;
      let cacheExpiry= 15*60*1000;
      if(this.$ls.get(cacheLabel)) {
        console.log('Cache Query Available');
        this.results=this.$ls.get(cacheLabel);
        this.showLoading=false;
      }
      else {
        console.log('No Cache Available');
        API.get('find', {
        params: {
            q: this.query
        }
      })
      .then(response => {
        this.$ls.set(cacheLabel, response.data,cacheExpiry);
        console.log('New Query Cached');
        this.results = response.data;
        this.showLoading = false;
      })
      .catch(error => {
        this.messages.push({
          type: 'error',
          text: error.message
        });
        this.showLoading = false;
      });
    }
  }
}
}
</script>

<style scoped>
.jumbotron {
  background: lightblue;/* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #052440, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#052440, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

ul.favorite-cities {
    border: 1px solid #082642;
    border-radius: 1.65rem;
    list-style-type: none;
    padding-top: 0px;
    width: 26%;
    float: right;
     background: #fff1e5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #052440, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom,#052440, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

ul.favorite-cities li h2 {
  text-shadow: 1px .75px 0 lightgoldenrodyellow;
    margin-top: 10px;
    margin-bottom: 10px;
}
.errors li {
  color: red;
  border: solid red 1px;
  padding: 5px;
}
h1, h2 {
  font-weight: bold;
  text-shadow: 1px .75px 0 lightgoldenrodyellow;
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
  margin: 5px;
}
a {
  color: #42b983;
}
input {
  border-radius: 1rem;
  background-color: lightgoldenrodyellow;
    color:#2b3b50;
    font-family: 'Avenir','Montserrat','Lato', arial, sans-serif;
    font-size: 2rem;
    font-weight: 500;
    height: 4.5rem;
}
</style>
