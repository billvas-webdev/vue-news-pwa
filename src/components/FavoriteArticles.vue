
<template>
    <ul class="favorite-articles">
        <li><h2>Favorite Articles</h2></li>
        <div class="clear"></div>
        <li v-if="favoriteArticles.length < 1">No favorites articles to display.</li>
        <li v-for="article in favoriteArticles">
        <a v-bind:href = "article.url" id="article-source">{{ article.source.name }} </a>
        <a v-bind:href = "article.url">{{ article.title }} </a> <button v-on:click="removeArticle(article)" class="fas fa-trash-alt"></button>
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
#article-source {
  color:#cde2ff;

}
.favorite-articles {
  list-style-type: none;
  padding: 10px;
  background: #ccc;
  width: 25%;
  float: right;
}
ul.favorite-articles {
    font-size: 1.5rem;
    text-shadow: 1px 0.1px 0 #052440;
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
.fa-trash-alt {
  font-size: 1.5rem;
  padding:0;
  color:#4f0018;
  border-radius: .3rem;
  background: #ffff8a;
}
.fa-trash-alt:hover {
  color:#44cc74;
  font-size: 2.35rem;
  font-weight: 600;
}
h2 {
  font-family: 'Montserrat','Lato', arial, sans-serif;
  font-weight: bolder;
  color: lightgoldenrodyellow;
  text-shadow: 1px .75px 0 #052440;
  }
a {
    color: #1e3a52;

}
a:hover {
  font-size: 2.35rem;
  font-weight: 600;
  padding: .75rem;
  border-radius: .5rem;
  text-decoration: none;
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #44cc74, #009cf8);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#44cc74, #009cf8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

@media only screen and (max-width: 360px) and (min-width: 337px){
h2 {
  font-size: 2.2rem;
}
}
</style>
