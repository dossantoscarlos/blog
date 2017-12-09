<template>
  <div>
  <!-- Carousel
    ================================================== -->
    <div v-bind:id="id" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
        <ol class="carousel-indicators">
          <li v-bind:data-target="idRest" data-slide-to="0" class="active"></li>
          <li v-bind:data-target="idRest" data-slide-to="1"></li>
          <li v-bind:data-target="idRest" data-slide-to="2"></li>
        </ol>
      <div class="carousel-inner" role="listbox">
        <!--Imagem Inicial2-->
        <div class="item active">
          <img class="first-slide img-rounded img-responsive"  src="../../../assets/portifolio/websites/negabranca/1.png" alt="First slide">
        </div>
        <div class="item">
          <img class="second-slide img-rounded img--responsive" src="../../../assets/portifolio/websites/negabranca/2.png" alt="Second slide">
        </div>
        <div class="item">
          <img class="third-slide img-rounded img-responsive" src="../../../assets/portifolio/websites/negabranca/3.png" alt="Third slide">
        </div>
        <div class="item">
          <img class="four-slide img-rounded img-responsive" src="../../../assets/portifolio/websites/negabranca/4.png" alt="Four slide">
        </div>
        <div class="item">
          <img class="five-slide img-rounded img-responsive" src="../../../assets/portifolio/websites/negabranca/5.png" alt="Five slide">
        </div>
      </div>
        <a class="left carousel-control" v-bind:href="idRest" role="button" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" v-bind:href="idRest" role="button" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div><!-- /.carousel -->
</div>
</template>
<script>
import CarroselImg from '@/components/layout/Body/CarroselImg'
export default {
  name: 'Slide',
  components: {
    CarroselImg
  },
  data: () => {
    return {
      id: 'myCarousel',
      idRest: '#myCarousel'
    }
  }
}
</script>
