<template>
  <!-- ******FOOTER****** -->
  <footer class="footer">
    <div class="container text-center">
      <!--/* footer content here*/-->
      <small class="copyright">
        <i class="fa fa-newspaper-o" aria-hidden="true"></i>
        <a
          href="https://www.billvas.com"
          data-toggle="tooltip"
          title="Visit my portfolio site at billvas.com"
        >Created by Bill Vasilopoulos</a>
        <i class="fas fa-sun" aria-hidden="true"></i>
      </small>
      <back-to-top class="scroll-placement" bottom="5rem" right="55rem">
        <button type="button" class="btn btn-info btn-to-top">
          <i class="fa fa-chevron-up"></i>
        </button>
      </back-to-top>
    </div>
    <!--//container-->
  </footer>
  <!--//footer-->
</template>
<script>
export default {
  name: "FootComp"
};
</script>
<style scoped>
/* ======= Footer =======*/
.footer {
  color: lightgoldenrodyellow;
  margin-top: -0.55rem;
  padding: 0.65em 0;
  border-top: 0.5px solid lightgoldenrodyellow;
  border-radius: 0.5rem;
  background: #fff1e5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #052440,
    #f0f2f0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #052440,
    #f0f2f0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.footer .copyright {
  line-height: 2em;
  color: #a1aab4;
  font-size: 14px;
}
.footer a {
  color: lightgoldenrodyellow;
  font-family: "montserrat", "avenir", helvetica;
}
.footer a:hover {
  color: #082542;
}

.fa,
.fas {
  font-size: 2rem;
  position: relative;
  top: 0.3rem;
  color: lightgoldenrodyellow;
}
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
  background: -webkit-linear-gradient(
    to bottom,
    #1576cc,
    #f0f2f0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #1576cc,
    #f0f2f0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-color: #052440;
}
.btn-to-top:hover {
  background: -webkit-linear-gradient(
    to bottom,
    #95727e,
    #f0f2f0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #95727e,
    #f0f2f0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.btn-info {
  color: #fff;
  background-color: #2a9cff;
  border-color: #052440;
}
.scroll-placement {
  bottom: 15px !important;
  right: 15px !important;
}
@media only screen and (max-width: 768px) and (min-width: 320px) {
  .footer .fa-newspaper-o {
  }
  .btn-to-top {
    width: 50px;
    height: 50px;
    padding: 10px 14px;
    border-radius: 50%;
    font-size: 20px;
    line-height: 22px;
  }
  .scroll-placement {
    bottom: 13px !important;
    right: 8px !important;
  }
}
</style>
