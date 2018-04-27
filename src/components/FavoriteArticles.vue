
<template>
    <ul class="favorite-articles">
        <li><h2><i class="far fa-bookmark"></i> Favorite Articles</h2></li>
       <!-- <div class="clear"></div> -->
        <li v-if="favoriteArticles.length < 1">No favorites articles to display.</li>
        <li v-for="article in favoriteArticles">
        <p id="article-source">{{ article.source.name }}:
        <a v-bind:href = "article.url"> {{ article.title }} </a> <button v-on:click="removeArticle(article)" class="fas fa-trash-alt"></button></p>
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
  font-weight: bold;
  font-size: 2rem;
  color:#1f5094;

}
.favorite-articles {
  margin-top:-.75rem;
  margin-bottom: .75rem;
  list-style-type: none;
  padding: 3rem 3rem 1rem 3rem;
  background: #ccc;
  width: 25%;
  float: right;

}
ul.favorite-articles {
    font-size: 1.75rem;
    text-shadow: 1px 0.1px 0 #052440;
    border-top: 0.5px solid lightgoldenrodyellow;
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
.fa-bookmark {
  font-size: 2.5rem;
}
h2 {
  font-family: 'Montserrat','Lato', arial, sans-serif;
  font-weight: bold;
  color: lightgoldenrodyellow;
  text-shadow: 1px .75px 0 #052440;
  }
a {
    font-weight: 300;
    color: #1e3a52;

}
a:hover {
  font-size: 2rem;
  font-weight: 500;
  padding: .5rem;
  border-radius: .5rem;
  text-decoration: none;
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #44cc74, #009cf8);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#44cc74, #009cf8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
p {
    margin: 0 0 .2rem;
}
@media only screen and (max-width: 360px) and (min-width: 337px){
.favorite-articles {
  padding: 0rem 2rem 1rem 2rem;
}
h2 {
  font-size: 2.2rem;
  margin: .5rem 0 0.25rem 0;
}
a {
  font-size: 1.5rem;
}
#article-source {
  font-weight: 500;
  font-size: 1.5rem;
  color:#cde2ff;
}
.fa-bookmark {
  font-size: 1.8rem;
}
}
@media (max-width: 733px) and (min-width: 569px) {
h2 {
  font-size: 2.1rem;
  margin: 0;
}
.fa-bookmark {
  font-size: 1.8rem;
}
a {
  font-size: 1.5rem;
}
a:hover {
  font-size: 1.6rem;
  font-weight: 600;
}
#article-source {
  font-size: 1.7rem;
  padding : 0;
  margin: -2px;
}
ul.favorite-articles{
    height: auto;
    padding: .5rem 2rem .5rem 2rem;
}
}
@media (max-width: 568px) and (min-width: 360px) {
.favorite-articles {
  padding: 0rem 2rem 1rem 2rem;
}
h2 {
  font-size: 2.2rem;
  margin: .5rem 0 0.25rem 0;
}
a {
  font-size: 1.5rem;
}
#article-source {
  font-weight: 500;
  font-size: 1.5rem;
  color:#cde2ff;
}
.fa-bookmark {
  font-size: 1.8rem;
}
}

</style>
