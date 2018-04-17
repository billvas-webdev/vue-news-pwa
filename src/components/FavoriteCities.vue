<template>
    <ul class="favorite-cities">
        <li><h2>Favorite Cities</h2></li>
        <li v-if="favoriteCities.length < 1">No favorites cities to display.</li>
        <li v-for="city in favoriteCities">
          <router-link v-bind:to="{ name: 'CurrentWeather', params: { cityId: city.id } }">{{ city.name }}</router-link> <button v-on:click="removeCity(city)" class="remove">x</button>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'FavoriteCities',
  data () {
    return {}
  },
  props: {
    favoriteCities: Array
  },
  methods: {
    removeCity: function (city) {
      let cityIndex = this.favoriteCities.indexOf(city);
      this.favoriteCities.splice (cityIndex, 1);
      this.$ls.set('favoriteCities', this.favoriteCities);
    }
  }
}
</script>

<style scoped>
.favorite-cities {
  list-style-type: none;
  padding: 10px;
  width: 25%;
  float: right;
   background: #fff1e5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #052440, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom,#052440, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.remove {
  font-size: 0.8rem;
  color: white;
  background: #AA0000;
  padding: 2px;
  cursor: pointer;
}
h2 {
  font-size: 2rem;
}
h2 {
  font-family: 'Montserrat','Lato', arial, sans-serif;
  font-weight: bolder;
  color: lightgoldenrodyellow;
  text-shadow: 1px .75px 0 #052440;
}
a {
    color: #052440;
}
a:hover {
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #44cc74, #009cf8);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#44cc74, #009cf8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-weight: 700;
}
</style>
