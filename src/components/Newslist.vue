<template>
  <div class="newslist">
    <div class="flex-container">
      <ul class="media-list">
        <li class="media" v-for="article of articles">
          <div class="media-left">
            <a v-bind:href="article.url" target="_blank">
              <img class="media-object" v-bind:src="article.urlToImage">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading"><a v-bind:href="article.url" target="_blank">{{article.title}}</a></h4>
            <h5><i>by {{article.author}}</i></h5>
            <p>{{article.description}}</p>
          </div>
        </li>
      </ul>
      <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
    </div>
  </div>
</div>
</template>

<script>


export default {
  name: 'Newslist',
  props: ['source'],
  data () {
    return {
      articles: [],
      errors: []

    }
  },

  methods: {
    updateSource (source) {
      this.axios.get('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=30fdd9c8493742eebe75a786fc36f1bd')
      .then(response => {
        console.log(response.data)
        this.articles = response.data.articles;
      })
      .catch(e => {
        //this.errors.push(e);
      })
    }
  },
  created () {
    this.updateSource(this.source);
  },
  watch: {
    source (val) {
      this.updateSource(val);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
  font-family: "Avenir";
}
a {
  color:#299cff;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
}
a:hover {
  text-decoration: underline;
  color: #ffadad;
}
a:focus {
  text-decoration: none;
}
.media-object {
    width: auto;
    max-width: auto;
    height: auto;
    max-height: 38rem;
    border-radius: 2em;
    padding: 2.5rem;
}
.media {
    border-top: .5px solid #f8b500;
}
  li.media{
    font-family: 'Avenir', 'Lato', 'Montserrat';
    background-color: #131313;
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #052440, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top,#052440, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: .5em;
    width: auto;
    height: 30.75rem;
  }
.newslist {
    -webkit-transition: all 1.4s ease-in-out;
    -moz-transition: all 1.4s ease-in-out;
    -ms-transition: all 1.4s ease-in-out;
    -o-transition: all 1.4s ease-in-out;
    color:azure;
    font-size: 2.25rem;
}
  p{
    font-family: "Avenir", 'Montseratt';
    line-height: 1.25em;
    padding-right: 1.5em;
    font-size: 1.2em;
    font-weight: normal;
}
  h4 {
    line-height: 1em;
    font-size: 1.35em;
    padding-top: 1em;
  }
  h5 {
    line-height: 1.5em;
    font-size: 1.75rem;
    color: #f8b500;
  }

/********* Samsung Galaxy S5 ************/
@media (max-width: 319px) and (min-width: 150px){
li.media  {
    padding: .5rem 2.25rem 0rem 2.5rem;
    height: 52rem;
  }
.media-object {
    display: none;
}
h4 {
    text-align: center;
    line-height: 1em;
    font-size: 2.6rem;
}
p{
    line-height: 1.1em;
    font-size: 2.6rem;
}
}
@media (max-width: 359px) and (min-width: 320px){
li.media  {
    height: 18.5rem;
    padding: .25rem 0.25rem 0rem .25rem;
}

.media-object {
    margin: 1rem 0 0 .25rem;
    border-radius:15px;
    float:left;
    padding: .5rem .5rem .5rem .5rem;
    width: 16rem;
    height: 16rem;
    background-position: 50% 50%;
    background-repeat:   no-repeat;
    background-size:     cover;
}

h4 {
    margin: -.9rem 0 .75rem 0;
    line-height: 1em;
    font-size: 1.4rem;
}
h5{
    margin: -.65rem 0 .65rem 0;
    font-size: 1.2rem;
    line-height: 1.5rem;
}
p{
  margin: -.65rem 0 .5rem 0;
  line-height: 1.3rem;
  font-size: 1.4rem;
}
}
@media (max-width: 733px) and (min-width: 360px){
li.media  {
    height: 18.5rem;
    padding: .25rem 0rem 0rem 0rem;
}
.media-object {
    margin: 1rem 0 0 .25rem;
    border-radius:15px;
    float:left;
    padding: .5rem .5rem .5rem .5rem;
    width: 18rem;
    height: 16rem;
    background-position: 50% 50%;
    background-repeat:   no-repeat;
    background-size:     cover;
}
.media left{
    padding:-5px;
}
h4 {
    margin: -.6rem 0 .75rem 0;
    line-height: 1.35rem;
    font-size: 1.5rem;
}
h5{
    margin: -.75rem 0 .65rem 0;
    font-size: 1rem;
    line-height: 1.5rem;
}
p{
    margin: -.75rem 0 .5rem 0;
    line-height: 1.5rem;
    font-size: 1.45rem;
}
}
@media (max-width: 733px) and (min-width: 569px){
li.media  {
    height: 28.5rem;
}
h4{
    margin: -.65rem 0 .75rem 0;
    line-height: 1em;
    font-size: 2.1rem;
}
h5 {
    margin: -.25rem 0 .65rem 0;
    font-size: 1.75rem;
    line-height: 1.5rem;
}
  .media-object {
    margin: 1.75rem 0 0 1rem;
    border-radius:15px;
    float:left;
    padding: .5rem .5rem .5rem .5rem;
    width: 30rem;
    height: 25rem;
}
p{
    margin: -.25rem 0 .5rem 0;
    line-height: 2rem;
    font-size: 1.85rem;
}
}
@media (max-width: 991px) and (min-width: 734px){

li.media  {
    height: 26rem;
}
h4{
    margin: -.5rem 0 .75rem 0;
    line-height: 1em;
    font-size: 2.1rem;
}
h5{
    margin: -.25rem 0 .65rem 0;
    font-size: 1.75rem;
    line-height: 1.5rem;
}
  .media-object {
    margin: 1.75rem 0 0 1rem;
    border-radius:15px;
    float:left;
    padding: .5rem .5rem .5rem .5rem;
    width: 30rem;
    height: 22rem;
}
p{
    margin: -.5rem 0 .5rem 0;
    line-height: 2rem;
    font-size: 2rem;
 }
}
@media (max-width: 3000px) and (min-width: 992px){

li.media  {
    height: 37.5rem;
}
h4{
    margin: -.6rem 0 .75rem 0;
    line-height: .9em;
    font-size: 3rem;


}
h5{
    margin: 1rem 0 1rem 0;
    font-size: 2rem;
    line-height: 1.5rem;
}
p{
    margin: 0rem 0 .5rem 0;
    line-height: 2.6rem;
    font-size: 2.5rem;
 }
.media-object {
    width: 55rem;
    height: 40rem;
    background-position: 50% 50%;
    background-repeat:   no-repeat;
    background-size:     cover;
}
.media-object:hover{
    opacity: .6;
    transition: opacity .4s ease-out;
    -moz-transition: opacity .4s ease-out;
    -webkit-transition: opacity .4s ease-out;
    -o-transition: opacity .4s ease-out;
}
}
</style>
