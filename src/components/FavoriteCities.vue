<template>
    <ul class="favorite-cities">
        <li><h2><i class="fas fa-globe"></i> Favorite Cities</h2></li>
        <div class="clear"></div>
        <li v-if="favoriteCities.length < 1">No favorites cities to display.</li>
        <li v-for="city in favoriteCities">
         <router-link v-bind:to="{ name: 'CurrentWeather', params: { cityId: city.id} }">{{ city.name }}</router-link> <button v-on:click="removeCity(city)" class="fas fa-trash-alt"></button>
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
  width: 26%;
  float: right;
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #052440, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#052440, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.remove {
  font-size: 1.65rem;
  color: #052440;
  background: #052440;
  cursor: pointer;
}
.clear {
  clear:both;
}
h2 {
  font-family: 'Montserrat','Lato', arial, sans-serif;
  font-weight: bolder;
  font-size: 2.5rem;
  color: lightgoldenrodyellow;
  text-shadow: 1px .75px 0 #052440;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

}
li {
  float: left;

}
li a button{
    color: #052440;
    display: block;
    text-align: center;
    text-decoration: none;
}
a {
  padding-left: .85rem;
  font-size: 1.65rem;
  font-weight: 400;
  color:#323204;
}
a:hover {
  text-decoration: none;
  border-radius: .5rem;
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom,  #fff,  #42a5ff);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #fff,  #42a5ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



}
.button {
  color: #009cf8;
}
.fa-trash-alt {
  font-size: 1.5rem;
  padding:0;
  color:#4f0018;
  border-radius: .3rem;
  background: lightgoldenrodyellow;
}


.fa-trash-alt:hover {
  color: #009cf8;
  font-size: 1.5rem;
  font-weight: 600;
}

@media only screen and (max-width: 337px) and (min-width: 320px){
ul.favorite-cities {
  width: 100%;
  margin-left: 0;
  margin-right: auto;
}
h2 {
  font-size: 2rem;
}
}

@media only screen and (max-width: 360px) and (min-width: 337px){
h2 {
  margin: 1rem auto;
  font-size: 2.1rem;


}
a {
  clear: right;
  padding-left: 1rem;
}
}
@media (max-width: 568px) and (min-width: 360px) {

}
@media (max-width: 733px) and (min-width: 569px) {
h2 {
  font-size: 2rem;
}
a {
  font-size: 1.2rem;
}
}

</style>
