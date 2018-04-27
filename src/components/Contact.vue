<template>

    <div class="container">
      <div class="primary col-md-12 col-sm-12 col-xs-12">
        <h1>Contact Me</h1>
            <div class="content"><p>{{msg}}</p>
            <div class= "row">
                <ul class="social list-inline">
                    <li><a href="https://www.facebook.com/facebook" data-toggle="tooltip" title="Visit me on Facebook" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.instagram.com/" data-toggle="tooltip" title="Visit me on Instagram" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.linkedin.com/" data-toggle="tooltip" title="Look me up on LinkedIn"target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="https://github.com/bvasilop" data-toggle="tooltip" title="Check out my projects on Github" target="_blank"><i class="fa fa-github-alt" aria-hidden="true"></i></a></li>
                    <li><a href="https://slack.com/" data-toggle="tooltip" title="Let's chat on Slack"><i class="fa fa-slack" aria-hidden="true"></i></a></li>
                    <li class="last-item"><a href="mailto:bvasilop@gmail.com" target="_blank" data-toggle="tooltip" title="Send me an Email"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></li>
                </ul>
            </div><!--//profile-->
            </div>
            </div>

            <div class="row">
         <a class="btn btn-cta-primary" a href="https://www.billvas.com" data-toggle="tooltip" title="Visit my portfolio site at billvas.com"> <i class="fa fa-address-card" aria-hidden="true"></i>&nbsp;Bill Vasilopoulos</a>
        </div><!--//container-->


        <!--<img src="../assets/weather.png" class="img-responsive" id="weather-icon" height= "165" width= "155" alt="Cloud image">
         <img src="../assets/news.png" class="img-responsive" id="news-icon" height= "135" width= "130" alt="Cloud image">-->



          </div><!--//content-->
        </div><!--//bootstrap sizing-->




</div> <!--//container-->
 </div>
 </footer>



</template>

<script>
import FootComp from '@/components/FootComp'
  export default {
    name: 'Contact',
    components: {
},
    data () {
      return{
        msg: "If you are interested in connecting with me about other web projects, I'd love to hear from you!"
      }
    }
  }
</script>

<style scoped>
/* ======= Base ======= */
body {
    font-family: 'Lato', arial, sans-serif;
    /*background-color: #263140;*/
    background-color: #082542;
    /*background: #000000;  /* fallback for old browsers */
    /*background: -webkit-linear-gradient(to top, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    /*background: linear-gradient(to top, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     -webkit-animation: colorchange 7s; /* Chrome and Safari */
    }
    @keyframes colorchange
    {
      0%   {background: #299cff;}
      50%  {background: #082542;}
      100%  {background: #082542;}
    }
    @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
    {
      0%   {background: #299cff;}
      50%  {background: #082542;}
      100%  {background: #082542;}
    }
p{
  font-style: bolder;
  font-size:3rem;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color:#072137;
  text-shadow: -.5px .5px 0 #FFFFFF;
}
h1{
  margin-top: 0em;
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: bolder;
  font-family: 'Avenir','Lato', arial, sans-serif;
  color:#072137;
  text-align: center;
  text-shadow: -.5px .5px 0 #FFFFFF;
}
a.btn-cta-primary {
  width: 19.4rem;
  height: 4.5rem;
  border-radius: .95rem;
  background: #273241;
  border: 1.5px solid #263140;
  color: #9cd1ff;
  font-weight: 600;
  text-transform: uppercase;
}
a {
  margin-top: 20px;
  background: #072137;
  border: 1.5px solid #263140;
  width: 36px;
  height: 36px;
  display: inline-block;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
  -moz-background-clip: padding;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  color: #9cd1ff;
  text-align: center;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
}
a:hover {
  background:lightgoldenrodyellow;
  color: #273241;
}
a:focus {
  text-decoration: none;
}
a.btn-cta-primary{
background:#072137;
  color: #9cd1ff;
}
  a.btn-cta-primary:hover {
  background:lightgoldenrodyellow;
  color: #072137;
}
.btn-primary:focus {
  text-decoration: none;
}
.container{
  text-align:center;
    height: 20em;
    width: auto;
    padding: 2.5em 9.5em 1em 9.5em;
    border-top: 1px solid #f8b500;
    border-radius: .5em;
    /*background-color: #3491e4;*/
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    font-size: 1.35em;
    background: #fff1e5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #1576cc, #F0F2F0);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #1576cc, #F0F2F0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     -webkit-animation: colorchange 15s; /* Chrome and Safari */
    }
    @keyframes colorchange
    {
      0%   {background: lightgoldenrodyellow;}
      25%  {background: #f8b500;}
      50%  {background: orange;}
      75%  {background: lightcoral;}
      100% {background: plum;}
    }
    @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
    {
       0%  {background: lightgoldenrodyellow;}
      25%  {background: #f8b500;}
      50%  {background: orange;}
      75%  {background: lightcoral;}
      100% {background: plum;}
    }
.fa {
  margin-top:8.5px;
}

@media only screen and (max-width: 360px) and (min-width: 320px){
  .container  {
    padding: 1rem 1rem 0rem 1rem ;
    height: 32rem;
}
  h1{
    font-size: 3rem;
    margin-bottom: 1rem;
    margin-top:0rem;
  }
  .img-responsive{
  height: 5.8rem;
  width: 5.8rem;
}
  p{
    font-size:2rem;
  }
}
@media only screen and (max-width: 412px) and (min-width: 360px){
.container  {
    padding: 2.5em .5em .5em .5em ;
    height: auto;
}
h1{
    margin-bottom: 0rem;
    margin-top:-3rem;
    font-size: 3rem;
}
p {
  font-size: 2rem;
  margin-bottom: 1rem;
}
}
@media only screen and (max-width: 513px) and (min-width: 413px){
   .container  {
    padding: 1rem 1rem 0rem 1rem ;
    height: 30rem;
}
  h1{
    font-size: 3rem;
    margin-bottom: 1rem;
    margin-top:0rem;
  }
  .img-responsive{
  height: 5.8rem;
  width: 5.8rem;
}
  p{
    font-size:2rem;
     padding-top:0rem;
  }
}
@media only screen and (max-width: 555px) and (min-width: 514px){
   .container  {
    padding: 1rem 1rem 0rem 1rem ;
    height: 27rem;
}
  h1{
    font-size: 3rem;
    margin-bottom: 1rem;
    margin-top:0rem;
  }
  .img-responsive{
  height: 5.8rem;
  width: 5.8rem;
}
  p{
    font-size:2rem;
     padding-top:0rem;
  }
}
@media only screen and (max-width: 767px) and (min-width: 556px){
  .container  {
    padding: 1rem 10rem 0rem 10rem ;
    height: 28.5rem;
}
  h1{
    font-size: 3rem;
    margin-bottom: 1rem;
    margin-top:0rem;
  }
  .img-responsive{
  height: 5.8rem;
  width: 5.8rem;
}
  p{
    font-size:2rem;
     padding-top:0rem;
  }
}
@media only screen and (max-width: 992px) and (min-width: 768px){
  .container  {
    padding: 1rem 10rem 0rem 10rem ;
    height: 37rem;
}
h1{
    font-size: 4.5rem;
    margin-bottom: 1rem;
    margin-top:1rem;
}
}
@media only screen and (max-width: 3000px) and (min-width: 993px){
  .container  {
    padding: 1rem 20rem 0rem 20rem ;
    height: 33rem;
}
h1{
    font-size: 4.5rem;
    margin-bottom: 1rem;
    margin-top:1rem;
}
}
</style>
