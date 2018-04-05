<template>
  <div class="container">
   <!-- <WeatherWidget></WeatherWidget> -->
    <CitySearch></CitySearch>
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <Newslist v-bind:source="source"></Newslist>
    <FootComp></FootComp>
  </div>
</template>

<script>
//import WeatherWidget from '@/components/WeatherWidget'
import CitySearch from '@/components/CitySearch'
import SourceSelection from '@/components/SourceSelection'
import Newslist from '@/components/Newslist'
import FootComp from '@/components/FootComp'





export default {
    name: 'app',
    components: {
      CitySearch,
      SourceSelection,
      Newslist,
      FootComp,
    },
    data () {
    return {
      source: ""
      }
    },
    methods: {
      sourceChanged: function (source) {
        this.source = source;
    }
  }
}
</script>

<style scoped>

body {
    -webkit-animation: colorchange 7s; /* Chrome and Safari */
}
@keyframes colorchange{
    0%   {background: #299cff;}
    50%  {background: #082542;}
    100%  {background: #082542;}
}

@-webkit-keyframes colorchange{ /* Safari and Chrome - necessary duplicate */
    0%   {background: #299cff;}
    50%  {background: #082542;}
    100%  {background: #082542;}
}
.container {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
}
</style>




