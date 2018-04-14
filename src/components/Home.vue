<template>
  <div class="container">
   <!-- <WeatherWidget></WeatherWidget> -->
   <!--<FavoriteArticles></FavoriteArticles>-->
    <CitySearch></CitySearch>
    <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
    <Newslist v-bind:source="source"></Newslist>
    <!--<FootComp></FootComp>-->
  </div>
</template>

<script>
//import WeatherWidget from '@/components/WeatherWidget'
import CitySearch from '@/components/CitySearch'
import SourceSelection from '@/components/SourceSelection'
import Newslist from '@/components/Newslist'
import FootComp from '@/components/FootComp'
import FavoriteArticles from '@/components/FavoriteArticles'




export default {
    name: 'app',
    components: {
      CitySearch,
      SourceSelection,
      Newslist,
      FootComp,
      //FavoriteArticles
    },
    data () {
    return {
      source: ""
      }
    },
    methods: {
      sourceChanged: function (source) {
        this.source = source;
    },
    saveArticle: function (article) {
      this.favorites.push(article);
      this.$ls.set('favoriteArticles', this.favoriteArticles);
    },
    getArticles: function () {
      this.results = null;
      this.showLoading = true;
      let cacheLabel= 'favoriteArticles_' + this.query;
      let cacheExpiry= 15*60*1000;
      if(this.$ls.get(cacheLabel)) {
        console.log('Cache Query Available');
        this.results=this.$ls.get(cacheLabel);
        this.showLoading=false;
      }
      else {
        console.log('No Cache Available');
        article.get('find', {
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




