<template>
    <dl>
        <dt v-if="weatherData.temp != weatherData.temp_min">Current Temp</dt>
        <dd v-if="weatherData.temp != weatherData.temp_min">{{ weatherData.temp }}&deg;F</dd>
        <dt>Humidity</dt>
        <dd>{{ weatherData.humidity }}%</dd>
        <dt>High</dt>
        <dd>{{ weatherData.temp_max }}&deg;F</dd>
        <dt>Low</dt>
        <dd>{{ weatherData.temp_min }}&deg;F</dd>
    </dl>
</template>

<script>
export default {
  name: 'WeatherData',
  data () {
    return {

    }
  },
  props: {
    weatherData: Object
  }
}
</script>

<style scoped>
dl {
  border-top: .5px solid lightgoldenrodyellow;
  border-radius: .5rem;
  padding: 5px;
  background: #e8e8e8; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #fff, #8aa4ba);
  background: linear-gradient(to bottom,#fff, #8aa4ba);
}
dt {
  font-size: 1.8rem;
  font-weight: 600;
  float: left;
  clear: left;
  width: 126px;
  text-align: right;
  font-weight: bold;
  color: blue;

}
dd {
  margin: 0 0 0 130px;
  padding: 0 0 0.5em 0;
  font-size: 1.8rem;
  font-weight: 600;
}
dt::after {
  content: ":";
}
</style>
