<template>
  <div class ="sourceselection">
    <div class="jumbotron">
    <h2><span class="far fa-newspaper"></span> Daily News</h2>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="input-group">
    <div class="input-group-addon">
    <span class="far fa-hand-point-right"></span>
  </div>
  <select class="form-control list-inline" data-show-icon="true" v-on:change="sourceChanged">
    <option data-content="<i class= 'far fa-hand-point-right'></i>"</option>
    <option value="">Select News Source </option>
    <option v-bind:value="source.id" v-for="source of sources">{{source.name}}</option>
  </select>
  </div>
  <div v-if="source">
      <h6>{{source.description}}</h6>
      <a v-bind:href="source.url" class="btn btn-lg btn-primary btn-block" target="blank">Go To {{source.name}} Website</a>
      <ul v-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>
    </div><!-- /.btn-primary -->
    </div><!-- /.jumbotron -->
  </div><!-- /.sourceselection -->
</template>

<script>

export default {
      name: 'SourceSelection',
      data () {
        return {
          sources: [],
          source: '',
          errors: []
  }
},
created () {
  this.axios.get('https://newsapi.org/v2/sources?language=en&apiKey=30fdd9c8493742eebe75a786fc36f1bd')
    .then(response => {
      this.sources = response.data.sources
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

    methods: {
      sourceChanged: function (e) {
        for (var i=0; i<this.sources.length; i++) {
          if (this.sources[i].id == e.target.value) {
            this.source = this.sources[i];
  }
}
    this.$emit('sourceChanged', e.target.value);
  }
},
}

</script>

<style scoped>

body{
  font-family: 'Avenir','Montserrat','Lato', arial, sans-serif;
}
.jumbotron {
  padding: 2rem 25rem 2rem 25rem;
  zoom: 125%;
  height: auto;
  border-top: .5px solid lightgoldenrodyellow;
  border-radius: .5em;
  /*background-color: #3491e4;*/
  font-family: 'Montserrat', 'Avenir', sans-serif;
  font-weight: bold;
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #052440, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#052440, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.form p {
  text-shadow: 1px .75px 0 #052440;
  color:lightgoldenrodyellow;
}
h1,h2 {
  font-family: 'Montserrat','Avenir','Lato', arial, sans-serif;
  margin-top: -1rem;
  margin-bottom: 10px;
  text-shadow: 1px .75px 0 #052440;
  color:lightgoldenrodyellow;
  text-align: center;
  font-weight: bolder;
  /*font-family: 'Lato', arial, sans-serif;*/
  font-size: 3.65rem;
}
h4{
  text-shadow: 1px .75px 0 #052440;
  color:lightgoldenrodyellow;
  text-align: center;
  font-size: 2rem;
  margin: -1rem 0 1rem 10rem;
}
h6{
  line-height: 1.1em;
  font-weight: 500;
  color:#072137;
  font-size: 1.25rem;
  padding:  0;
  margin-top: 7px;
  margin-bottom: 4px;
}
.btn-primary{
  display:block; /* change this from inline-block */
  width:auto; /* setting the width */
  margin:0 auto; /* this will center  it */
  font-weight: 500;
  font-family: 'Avenir','Montserrat','Lato', arial, sans-serif;
  font-size:1.1em;
  color:lightgoldenrodyellow;
  border:none;
  text-align:center;
  border-radius:.5em;
  background: #000000;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #052440, #000000);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top,#052440, #4a5f72); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border:1px solid lightgoldenrodyellow;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
}
.btn-primary:hover {
  border:1px solid #072137;
  background:#1576cc;
  color: #072137;

}
.btn-primary:focus {
  text-decoration: none;
}
select.form-control {
  color: #555;
  font-family: 'Avenir','Montserrat','Lato', arial, sans-serif;
  font-size: 2rem;
  font-weight: 500;
  height: 4.5rem;
  /*background-color: lightgoldenrodyellow;*/
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #97a5ae, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#97a5ae, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /*color:#2b3b50;*/
}
select.form-control:hover {
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #44cc74, #009cf8);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#44cc74, #009cf8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.far {
  position:relative;
  font-size: 1em;
  /*top:1.2rem;
  right: 1rem;*/
  font-weight: 500;
}
.input-group-addon{
  background-color: lightgoldenrodyellow;
  color:#2b3b50;
  background: #fff1e5;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #97a5ae, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom,#97a5ae, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

/******* IPHONE 6 ********/
@media only screen and (max-width: 337px) and (min-width: 320px){
.jumbotron  {
  zoom:100%;
  height: auto;
}
h2 {
  font-family: 'Montserrat','Avenir','Lato', sans-serif;
  margin-top: -1.5rem;
  font-size: 3.2rem;
  font-weight: bolder;
}
h4 {
  font-family: "Avenir";
  font-size: 2rem;
  margin: -1rem 0 1rem 6rem;
}
h6 {
  font-family: "Avenir";
  font-weight:500;
  font-size: 1.45rem;
}
.fa-newspaper-o {
  font-size: 1.75em;
}
.btn-primary{
  margin-top: 1rem;
  width:auto;
  font-size: 1.5rem;
}
}
/***********   *************/

@media only screen and (max-width: 360px) and (min-width: 337px){
.jumbotron  {
  zoom:100%;
  height: auto;
  padding: 1rem 2rem 1.5rem 2rem;
}
h2 {
  font-family: 'Montserrat','Avenir','Lato', arial, sans-serif;
  margin-top: 0rem;
  font-size: 2.9rem;
  font-weight: bolder;
}
h4 {
  font-family: "Avenir";
  font-size: 2rem;
  margin: -1rem 0 1rem 6rem;
}
h6 {
  font-family: "Avenir";
  font-weight:500;
  font-size: 1.45rem;
}
.fa-newspaper-o {
  font-size: 1.75em;
}
.btn-primary{
  margin-top: 1rem;
  width:auto;
  font-size: 1.5rem;
}
}

@media (max-width: 389px) and (min-width: 361px){
.jumbotron  {
  zoom:115%;
  height: auto;
  padding: 1rem 2rem 1.5rem 2rem;
}
h2 {
  font-family: "Avenir";
  margin-top: -1.5rem;
  font-size: 3.2rem;
}
h4 {
  font-family: "Avenir";
  font-size: 2rem;
  margin: -1rem 0 .5rem 6rem;
}
h6 {
  line-height: 1.75rem;
  font-family: "Avenir";
  font-weight:500;
  font-size: 1.45rem;
}
.btn-primary{
  margin-bottom: 1rem;
  font-weight: 700;
  font-family: "Avenir";
  width: auto;
  font-size: 1.37rem;
}
}

@media (max-width: 436px) and (min-width: 390px){

.jumbotron  {
  zoom:115%;
  height: auto;
  padding: 1rem 2rem 1.5rem 2rem;
}
h2 {
  font-family: "Avenir";
  margin-top: -1.5rem;
  font-size: 3.2rem;
}
h4 {
  font-family: "Avenir";
  font-size: 2rem;
  margin: -1rem 0 .5rem 6rem;
}
h6 {
  line-height: 1.75rem;
  font-family: "Avenir";
  font-weight:500;
  font-size: 1.45rem;
}
.btn-primary {
  margin-top: 1rem;
  font-weight: 700;
  font-family: "Avenir";
  width: auto;
  font-size: 1.37rem;
}
}

@media (max-width: 469px) and (min-width: 437px){

.jumbotron  {
  zoom:115%;
  height: auto;
  padding: 1rem 2rem 1.5rem 2rem;
}
h2 {
  font-family: "Avenir";
  margin-top: -1.5rem;
  font-size: 3.2rem;
}
h4 {
  font-family: "Avenir";
  font-size: 2rem;
  margin: -1rem 0 .5rem 6rem;
}
h6 {
  line-height: 1.75rem;
  font-family: "Avenir";
  font-weight:500;
  font-size: 1.45rem;
}
.btn-primary{
  margin-bottom: 1rem;
  font-weight: 700;
  font-family: "Avenir";
  width: auto;
  font-size: 1.37rem;
}
}
@media (max-width: 510px) and (min-width: 469px){

.jumbotron  {
  zoom:115%;
  height: auto;
  padding: 1rem 2rem 1.5rem 2rem;
}
h2 {
  font-family: "Avenir";
  margin-top: -1.5rem;
  font-size: 3.2rem;
}
h4 {
  font-family: "Avenir";
  font-size: 2rem;
  margin: -1rem 0 .5rem 6rem;
}
h6 {
  line-height: 1.75rem;
  font-family: "Avenir";
  font-weight:500;
  font-size: 1.45rem;
}
.btn-primary{
  margin-bottom: 1.5rem;
  font-weight: 700;
  font-family: "Avenir";
  width: auto;
  font-size: 1.55rem;
}
}
@media (max-width: 717px) and (min-width: 511px){

.jumbotron  {
  zoom:115%;
  height: auto;
  padding: 1rem 6rem 1rem 8rem;
}
h2 {
  font-family: "Avenir";
  margin-top: 0;
  font-size: 3.2rem;
}
h4 {
  font-family: "Avenir";
  font-size: 2rem;
  margin: -1rem 0 .5rem 6rem;
}
h6 {
  line-height: 1.75rem;
  font-family: "Avenir";
  font-weight:500;
  font-size: 1.4rem;
}
.btn-primary {
  font-weight: 700;
  font-family: "Avenir";
  width: auto;
  font-size: 1.65rem;
}
}
@media (max-width: 743px) and (min-width: 718px){

.jumbotron  {
  zoom:115%;
  height: auto;
}
h2 {
  margin-top: -1.5rem;
  font-size: 3.2rem;
}
h4 {
  font-family: "Avenir";
  font-size: 2rem;
  margin: -1rem 0rem .5rem 6rem;
}
h6 {
  line-height: 1.75rem;
  font-family: "Avenir";
  font-weight:500;
  font-size: 1.45rem;
}
.btn-primary{
  font-weight: 700;
  font-family: "Avenir";
  width: auto;
  font-size: 1.6rem;
}
}
</style>
