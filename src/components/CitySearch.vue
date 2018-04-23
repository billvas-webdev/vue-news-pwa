<template>
  <div class = "jumbotron">
    <favorite-cities v-bind:favoriteCities='favorites'></favorite-cities>
    <h2><i class="fas fa-sun fa-spin"></i>Weather Forecast</h2>
    <message-container v-bind:messages="messages"></message-container>
    <form v-on:submit.prevent="getCities">
        <p><input type="text" v-model="query" placeholder="  Enter city name" id="placeholder"> <button type="submit">Go</button></p>
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
  height:auto;
  border-top: .5px solid lightgoldenrodyellow;
  border-radius: .5em;
  padding: 3rem 4rem 2rem 6rem ;
  color: #052440;
  background: lightblue;/* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #052440, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#052440, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

ul.favorite-cities {
  color: lightgoldenrodyellow;
  border: 1px solid #082642;
  border-radius: 1rem;
  list-style-type: none;
  padding-top: 0px;
  width: 26%;
  float: right;
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #052440, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#052440, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

ul.favorite-cities li h2 a{
  text-shadow: 1px .75px 0 lightgoldenrodyellow;
  margin-top: 10px;
  margin-bottom: 10px;
}
ul.favorite-cities a {
  text-decoration: underline;
}
.errors li {
  color: red;
  border: solid red 1px;
  padding: 5px;
}
h1, h2 {
  font-family: 'Montserrat','Lato', arial, sans-serif;
  font-weight: bolder;
  font-size: 3.3rem;
  margin: 0rem 0 1rem 0;
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
  margin: 5px;
  border-radius: 0.75em;
}
a {
  color: lightgoldenrodyellow;
  text-decoration: underline;
  text-shadow: 1px .75px 0 #052440;
  font-weight: 500
}
a:hover {
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #44cc74, #009cf8);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#44cc74, #009cf8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-weight: 700;
}
input {
  padding-left: 1rem;
  border-width: 1px;
  border-radius: 0.7rem;
  color:#555;
  font-family: 'Avenir','Montserrat','Lato', arial, sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  height: 4.5rem;
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #b5bec3, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#b5bec3, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /*background-color: lightgoldenrodyellow;*/
}
input:hover {
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #44cc74, #009cf8);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#44cc74, #009cf8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-weight: 700;
}
button {
  font-weight:500;
  border-radius: 0.25em;
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #b5bec3, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#b5bec3, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

button:hover {
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #44cc74, #009cf8);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#44cc74, #009cf8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
p {
  font-weight: 400;
}
#placeholder {
  font-weight: 400;
}

@media only screen and (max-width: 360px) and (min-width: 337px){
.jumbotron {
  height: auto;
  padding: 2rem 2rem 1rem 2rem;
}
ul.favorite-cities  {
  width: auto;
  float: none;
}
input {
  width: 26.3rem;
}
h2 {
  font-size: 2.5rem;
  padding: 1rem 0 0 0;
}
#placeholder {
  font-size:2.25rem;
}
}
@media (max-width: 733px) and (min-width: 569px) {
ul.favorite-cities  {
  font-size:1rem;
  height: auto;
  width: auto;
}
h2 {
  font-size: 2.6rem;
}
input {
  width: 21.5rem;
  height: 3.5rem;
}
}

</style>
