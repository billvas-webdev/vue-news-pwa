<template>
    <div>
        <div v-for="weatherSummary in weatherData" class="weatherSummary">
            <img v-bind:src="'https://openweathermap.org/img/w/' + weatherSummary.icon + '.png'" v-bind:alt="weatherSummary.main">
            <br>
            <b>{{ weatherSummary.main }}</b>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WeatherSummary',
  data () {
    return {

    }
  },
  props: {
    weatherData: Array
  }
}
</script>

<style scoped>
.weatherSummary {
  display: inline-block;
  width: 100px;
}
img {
  height: 7.5rem;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
  -webkit-filter: contrast(1.25);
  filter: contrast(3.25);
}
b {
  font-size: 2.5rem;
}
</style>
