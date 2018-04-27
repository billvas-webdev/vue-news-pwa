<template>

    <div class="container">
      <div class="primary col-md-12 col-sm-12 col-xs-12">
        <img src="../assets/news.png" class="img-responsive" id="news-icon" height= "130" width= "127" alt="Newspaper image">
         <img src="../assets/weather.png" class="img-responsive" id="weather-icon" height= "165" width= "155" alt="Cloud image">
        <h1>Daily News and Weather</h1></br>
      </div><!--//container-->
    <div class="content"><p>{{msg}}</p>
    </div><!--//content-->
    </div><!--//bootstrap sizing-->

</template>

<script>
  export default {
    name: 'About',
    data () {
      return{
        msg: "This project is a responsive web application that leverages Vue JS, Axios, Node JS, OpenWeatherMap API and News API. Hosted on a secure network to allow for service workers, local storage and IndexedDB to cache content and allow resources to be available offline. It also provides up to the minute, searchable weather and news content from over 50 news sources and access to the news organization's websites."
      }
    }
  }
</script>

<style scoped>
/* ======= Base ======= */
h1{
  margin-top: -1rem;
  font-size: 5rem;
  text-transform: uppercase;
  font-weight:bolder;
  font-family: 'Avenir','Lato', arial, sans-serif;
  text-align: center;
  text-shadow: -.5px .5px 0 #FFFFFF;
}
p{
  font-size: 2.25rem;
  color:#072137;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-weight:700 ;
   text-shadow: -0.5px .25px 0 #FFFFFF;
  /*text-shadow: -1px .5px 0 #FFFFFF;*/
}
.container{
  text-align:center;
    height: 21em;
    width: auto;
    padding: 2em 9em 1em 9em;
    border-top: 1px solid #f8b500;
    border-radius: .5em;
    /*background-color: #3491e4;*/
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    font-size: 1.35em;
    background: #fff1e5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #f8b500, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #f8b500, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    animation: colorchange 5s; /* animation-name followed by duration in seconds*/
        /* you could also use milliseconds (ms) or something like 2.5s */
    -webkit-animation: colorchange 15s; /* Chrome and Safari */
    }
    @keyframes colorchange
    {
      0%   {background: plum;}
      25%  {background: #f8b500;}
      50%  {background: orange;}
      75%  {background: lightcoral;}
      100% {background: lightgoldenrodyellow;}
    }
    @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
    {
      0%   {background: plum;}
      25%  {background: #f8b500;}
      50%  {background: orange;}
      75%  {background: lightcoral;}
      100% {background: lightgoldenrodyellow;}
    }
#weather-icon{
  float:right;
  margin-top: -1.5rem;
  -webkit-filter: invert(70%);
  filter: invert(2%);
}
#news-icon{
  margin-top: -1rem;
  -webkit-filter: invert(80%);
  filter: invert(20%);
  float: left;
}
/******* IPHONE 6 ********/
@media (max-width: 375px){
  .container  {
    padding: .5em 0.5em 1em 0.5em;
  }
}
/***********   *************/
@media (max-width: 414px){
  .container  {
    padding: 0.5em 0.5em 1em 0.5em;
    height:40em;
}
}
/*********** IPHONE 6 Landscape **********/
@media (max-width: 667px){
  .container  {
    padding: 0.5em 0.5em 1em 0.5em;
    height:23em;
}
h1{
  font-size: 2em;
}
.img-responsive{
  height: 5em;
  width: 5em;
}
}
/********** IPHONE PLUS Landscape **********/
@media (max-width: 736px){
  .container  {
    padding: 0.5em 0.5em 1em 0.5em;
  }
}
/******** TABLET IPAD LG ********/
@media (max-width: 768px){
  .container  {
    padding: 0.5em 0.5em 1em 0.5em;
  }
}
/******* IPAD Pro ********/
@media (max-width: 1200px){
  .container  {
    height: 38rem;
    padding: 1.5em 2.5em 0em 2.5em;
  }
}
@media (max-width: 991px){
  .container  {
    height: 36rem;
    padding: 1.5em 2.5em 0em 2.5em;
  }
  h1{
    font-size: 4rem;
    margin-bottom: -1rem;
    margin-top:0rem;
  }
  #weather-icon{
    margin-top: 0.1rem;
    height: 11.5rem;
    width: 11.5rem;
}
  #news-icon{
    margin-top: 0.15rem;
    height: 9.5rem;
    width: 9.5rem;
}
}
@media only screen and (max-width: 414px) and (min-width: 359px){
  .container  {
    padding: 1rem 1rem 0rem 1rem ;
    height: 44rem;
}
  h1{
    font-size: 2.65rem;
    margin-bottom: -1rem;
    margin-top:.25rem;
  }
  .img-responsive{
  height: 5.7rem;
  width: 5.7rem;
}
  p{
    font-size:2.05rem;
     padding-top:0rem;
  }
}
@media only screen and (max-width: 360px){
  .container  {
    padding: 1rem 1rem 0rem 1rem ;
    height: 41rem;
}
  h1{
    font-size: 2.4rem;
    margin-bottom: -rem;
    margin-top:0.35rem;
    line-height: 2.45rem;
  }
 #weather-icon{
    margin-top: 0.1rem;
    height: 9.5rem;
    width: 9.5rem;
}
  #news-icon{
    margin-top: 0.15rem;
    height: 7.5rem;
    width: 7.5rem;
}
  p{
    font-size:1.9rem;
     line-height: 2.45rem;
  }
}
@media only screen and (max-width: 359px) and (min-width: 320px){
  .container  {
    padding: 1rem .5rem 1rem 0.5rem ;
    height: 42rem;
}
  h1{
    font-size: 2.2rem;
    margin-bottom: -4rem;
    margin-top:0.35rem;
    line-height: 2.45rem;
  }
 #weather-icon{
    margin-top: 0.1rem;
    height: 8.5rem;
    width: 8.5rem;
}
  #news-icon{
    margin-top: 0.15rem;
    height: 6.5rem;
    width: 6.5rem;
}
  p{
    font-size:1.9rem;
     line-height: 2.45rem;
  }
}
@media only screen and (max-width: 767px) and (min-width: 568px){
  .container  {
    padding: 1rem 2rem 0rem 2rem ;
    height: 44rem;
}
  h1{
    font-size:3.5rem;
    margin-bottom: -1rem;
    margin-top:1rem;
  }
  #weather-icon{
    margin-top: .55rem;
    height: 13rem;
    width: 13rem;
}
  #news-icon{
    margin-top: .75rem;
    height: 11.5rem;
    width: 11.5rem;
}
  p{
    font-size: 2.4rem;
     padding-top:0rem;
     line-height: 3rem;
  }
}
@media only screen and (max-width: 567px) and (min-width: 416px){
  .container  {
    padding: 1rem 0.5rem 0rem 0.5rem ;
    height: 51rem;
}
 h1{
    font-size:2.75rem;
    margin-bottom: -1rem;
    margin-top:0rem;
  }
}
@media only screen and (max-width: 415px) and (min-width: 361px){
  .container  {
    padding: 1rem 1rem 0rem 1rem ;
    height: auto;
}
 h1{
    font-size:2.4rem;
    margin-bottom: -1rem;
    margin-top:.5rem;
  }
  #weather-icon{
    margin-top: .55rem;
    height: 9.5rem;
    width: 9.5rem;
}
  #news-icon{
    margin-top: .75rem;
    height: 8rem;
    width: 8rem;
}
}
</style>
