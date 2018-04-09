
<template>
    <ul class="favorite-articles">
        <li><h2>Favorite Articles</h2></li>
        <li v-if="favoriteArticles.length < 1">No favorites articles to display.</li>
        <li v-for="article in favoriteArticles">
          <router-link v-bind:to="{ name: 'Newslist', params: { articleURL: article.title} }">{{ article.title }}</router-link> <button v-on:click="removeArticle(article)" class="remove">x</button>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'favoriteArticles',
  data () {
    return {}
  },
  props: {
    favoriteArticles: Array
  },
  methods: {
    removeArticle: function (article) {
      let FavArticleIndex = this.favoriteArticles.indexOf(article);
      this.favoriteArticles.splice(FavArticleIndex, 1);
      this.$ls.set('favoriteArticles', this.favoriteArticles);
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
