<template>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link class="navbar-brand" to="/"><i class="fa fa-home" aria-hidden="true"></i> Daily News and Weather</router-link>
    </div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="navbar-collapse collapse" data-toggle="collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><router-link to="/about">About<span class="sr-only">(current)</span></router-link></li>
        <li><router-link to="/contact">Contact<span class="sr-only">(current)</span></router-link></li>
      </ul>
      </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
    export default {
      name: 'HeadNav'
}
</script>

<style scoped>
.navbar-nav>li>a{
    color:lightgoldenrodyellow;
    font-weight:bold;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
}
.navbar-nav>li>a:hover {
   /*color: #9cd1ff;*/
    color: #44cc74;
}
.navbar-nav>li>a:focus {
    text-decoration: none;
}
.navbar-brand {
    color: lightgoldenrodyellow;
    font-weight:bold;
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
}
.navbar-brand:hover {
    /*color: #9cd1ff;*/
    color: #44cc74;
}
.navbar {
    font-weight: 500;
    font-size: 1.25em;
    font-family: 'Montserrat','Lato', arial, sans-serif;
    margin-bottom: .25rem;
    border-top: .5px solid lightgoldenrodyellow;
    border-radius: .5rem;
    background: -webkit-linear-gradient(to bottom, #052440, #274969);
    background: linear-gradient(to bottom,#052440, #274969);
}
h2{
    text-align: center;
    font-weight:bold;
    margin-bottom: 10px;
}

</style>
