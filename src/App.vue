<template>
  <transition name="fadeInDownBig">
    <div class="animated fadeInDownBig">
      <div class="container" id="app">
        <HeadNav></HeadNav>
        <router-view/>
      </div>
    </div>
  </transition>
</template>
<script>
import HeadNav from '@/components/HeadNav'
export default {
  name: 'app',
  components: {
    HeadNav:HeadNav
  }
}
</script>
<style>
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
    background-color: #082542;
    -webkit-animation: colorchange 7s; /* Chrome and Safari */
}
@keyframes colorchange{
      0%   {background: #052440;}
      50%  {background: #082542;}
      100%  {background: #082542;}
}
@-webkit-keyframes colorchange{ /* Safari and Chrome - necessary duplicate */
      0%   {background: #052440;}
      50%  {background: #082542;}
      100%  {background: #082542;}
}
#app {
    padding: 1px 0 1px 0;
}
.jumbotron{
    margin-bottom: 3px;
}
</style>
