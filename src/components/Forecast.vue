<template>
  <div class = "jumbotron">
    <h2>Five Day Hourly Forecast <span v-if="weatherData"> for {{ weatherData.city.name }}, {{weatherData.city.country }}</span></h2>
    <message-container v-bind:messages="messages"></message-container>
    <p>
      <router-link to="/"><i class="fa fa-home"></i>Home</router-link> |
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
    <back-to-top class="scroll-placement" bottom="5rem" right="55rem">
  <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
</back-to-top>
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
  padding-top: 0;
  padding-bottom: 2rem;
  color: lightgoldenrodyellow;
  font-weight: normal;
  background: lightblue;  /* fallback for old browsers */
  background: linear-gradient(to bottom, #445a6f,#1d4569); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: -webkit-linear-gradient(to bottom, #445a6f, #1d4569);  /* Chrome 10-25, Safari 5.1-6 */
}
h2 {
  padding-top: 1rem;
  margin-top: 0;
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
ul {
  list-style-type: none;
  padding-left: 7rem;
}
li {
  display: inline-block;
  width: auto;
  min-height: 300px;
  border: solid 1px #e8e8e8;
  padding: 10px;
  margin: 5px;
  border-radius: 1rem;
  background: lightblue;/* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #57646d, #263947);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#57646d, #263947); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.weatherSummary{
  color: lightgoldenrodyellow;
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
dl {
  color: black;
}
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
.btn-info {
  color: #fff;
  background: -webkit-linear-gradient(to bottom, #1576cc, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#1576cc, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-color: #052440;
}
.scroll-placement {
    bottom: 53px !important;
    right: 25px  !important;
}
.btn-to-top:hover{
  background: -webkit-linear-gradient(to bottom, #95727e, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#95727e, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

@media only screen and (max-width: 360px) and (min-width: 320px){
ul {
    padding-left: 2.4rem;
    zoom: 120%;
}
.btn-to-top {
    width: 50px;
    height: 50px;
    padding: 10px 14px;
    border-radius: 50%;
    font-size: 20px;
    line-height: 22px;
}
.scroll-placement {
    bottom: 53px !important;
    right: 6px  !important;
}
}
@media (max-width: 717px) and (min-width: 511px){
  .scroll-placement {
    bottom:10px !important;
    right: 10px  !important;
}
}
</style>


