<!--<template>
    <ul class="favorite-articles">
        <li><h2>Favorite Articles</h2></li>
        <li v-if="FavoriteArticles.length < 1">No favorites articles to display.</li>
        <li v-for="article in FavoriteArticles">
          <router-link v-bind:to="{ name: 'FavoriteArticles', params: { articlesID: articles.id } }">{{ articles.title }}</router-link> <button v-on:click="removeArticles(article)" class="remove">x</button>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'FavoriteArticles',
  data () {
    return {}
  },
  props: {
    favoriteArticles: Array
  },
  methods: {
    getArticles: function () {
  this.results = null;
  this.showLoading = true;

  let cacheLabel = 'articleSearch_' + this.query;
  let cacheExpiry = 15 * 60 * 1000; // 15 minutes

  if (this.$ls.get(cacheLabel)){
    console.log('Cached query detected.');
    this.results = this.$ls.get(cacheLabel);
    this.showLoading = false;
  } else {
    console.log('No cache available. Making API request.');
    API.get('find', {
      params: {
          q: this.query
      }
    })
    .then(response => {
      this.$ls.set(cacheLabel, response.data, cacheExpiry);
      console.log('New query has been cached as: ' + cacheLabel);
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

    saveArticle: function (article) {
  this.favorites.push(article);
  this.$ls.set('favoriteArticles', this.favorites);
}
    removeArticle: function (article) {

       let articleIndex = this.FavoriteArticles.indexOf(article);
      this.FavoriteArticles.splice (articleIndex, 1);
      this.$ls.set('FavoriteArticles', this.FavoriteArticles);
      // TODO: Add logic to remove a city from the `favoriteCities` array.
      // Hint: Use `indexOf(city)` on the `this.favoriteCities` array and then use the `splice()` method
      // TODO: Save the new favoriteCities array to the cache.
    }
  }
}
</script>

<style scoped>
.favorite-articles {
  list-style-type: none;
  padding: 10px;
  background: #ccc;
  width: 25%;
  float: right;
}
.remove {
  font-size: 0.8rem;
  color: white;
  background: #AA0000;
  padding: 2px;
  cursor: pointer;
}
</style>
