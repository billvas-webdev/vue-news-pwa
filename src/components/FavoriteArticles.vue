
<template>
    <ul class="favorite-articles">
        <li><h2>Favorite Articles</h2></li>
        <li v-if="favoriteArticles.length < 1">No favorites articles to display.</li>
        <li v-for="article in favoriteArticles">
        <a v-bind:href = "article.url">{{ article.title }}</a> <button v-on:click="removeArticle(article)" class="remove">x</button>
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
h2 {
  font-family: 'Montserrat','Lato', arial, sans-serif;
  font-weight: bolder;
  color: lightgoldenrodyellow;
  text-shadow: 1px .75px 0 #052440;
  }
a {
    color: lightgoldenrodyellow;
}
a:hover {
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #44cc74, #009cf8);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#44cc74, #009cf8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  font-weight: 700;
}

@media only screen and (max-width: 360px) and (min-width: 337px){
h2 {
  font-size: 2.2rem;
}
}
</style>
