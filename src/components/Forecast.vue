<template>
  <div class = "jumbotron">
    <h2>Five Day Hourly Forecast <span v-if="weatherData"> for {{ weatherData.city.name }}, {{weatherData.city.country }}</span></h2>
    <message-container v-bind:messages="messages"></message-container>
    <p>
      <router-link to="/">Home</router-link> |
      <router-link v-bind:to="{ name: 'CurrentWeather', params: { cityId: $route.params.cityId } }">Current Weather <span v-if="weatherData"> for {{ weatherData.city.name }}, {{weatherData.city.country }}</span></router-link>
    </p>

    <ul v-if="weatherData" class="forecast">
      <transition-group name="fade" tag="div" appear>
        <li v-for="forecast in weatherData.list" v-bind:key="forecast.dt">
          <h3>{{ forecast.dt|formatDate }}</h3>
          <weather-summary v-bind:weatherData="forecast.weather"></weather-summary>
          <weather-data v-bind:weatherData="forecast.main"></weather-data>
        </li>
      </transition-group>
    </ul>
    <load-spinner v-if="showLoading"></load-spinner>
  </div>
</template>

<script>
import {API} from '@/common/api';
import WeatherSummary from '@/components/WeatherSummary';
import WeatherData from '@/components/WeatherData';
import CubeSpinner from '@/components/CubeSpinner';
import MessageContainer from '@/components/MessageContainer';

export default {
  name: 'Forecast',
  components: {
    'weather-summary': WeatherSummary,
    'weather-data': WeatherData,
    'message-container': MessageContainer,
    'load-spinner': CubeSpinner
  },
  data () {
    return {
      weatherData: null,
      messages: [],
      query: '',
      showLoading: false,
      messages: []
    }
  },
  created () {
    this.showLoading = true;
    let cacheLabel = 'currentWeather_' + this.$route.params.cityId;
    let cacheExpiry = 15 * 60 * 1000;

    if (this.$ls.get(cacheLabel)) {
      console.log('Cached value detected.');
      this.weatherData = this.$ls.get(cacheLabel);
      this.showLoading = false;
    } else {
      console.log('No cache detected. Making API request.');
      API.get('forecast', {
        params: {
          id: this.$route.params.cityId
      }
    })
    .then(response => {
      this.$ls.set(cacheLabel, response.data, cacheExpiry);
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
  },
  filters: {
    formatDate: function (timestamp){
      let date = new Date(timestamp * 1000);
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      //let weekday = date.getDay();
      let daynum = date.getDate();
      let month = date.getMonth();

      let hour = date.getHours();
      if (hour === 12) {
        hour = 'Noon';
      } else if (hour === 0) {
        hour = 'Midnight';
      } else if (hour > 12) {
        hour = hour - 12 + 'PM';
      } else if (hour < 12) {
        hour = hour + 'AM';
      }
      //let year = date.getFullYear();
      return `${ months[month] } ${ daynum } @ ${ hour }`;
    }
  }
}

</script>

<style scoped>
.jumbotron {
  padding-left: 16rem;
  background: lightblue;  /* fallback for old browsers */
  background: linear-gradient(to bottom,#082e42, #082f42); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: -webkit-linear-gradient(to bottom, #082e42, #082f42);  /* Chrome 10-25, Safari 5.1-6 */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
.jumbotron{
  color: lightgoldenrodyellow;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: auto;
  min-height: 300px;
  border: solid 1px #e8e8e8;
  padding: 10px;
  margin: 5px;

}
.weatherSummary{
  color: lightgoldenrodyellow;
}

a {
  color: lightgoldenrodyellow;
  text-decoration: underline;
  text-shadow: 1px .75px 0 #052440;
  font-weight: 500
}
dl {
  color: black;
}
</style>


