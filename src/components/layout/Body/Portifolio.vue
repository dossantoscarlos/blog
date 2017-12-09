<template>
  <div class="container">
    {{init}}
    <div class="col-lg-6" v-for='value in portifolioArray'>
      <!-- Carousel
        ================================================== -->
        <div v-bind:id="portifolio['id']" class="carousel slide" data-ride="carousel">
          <!-- Indicators -->
            <ol class="carousel-indicators">
              <li   :data-target="value['hashtag']" data-slide-to="0" class="active"></li>
              <li v-bind:data-target="value['hashtag']" data-slide-to="1"></li>
              <li v-bind:data-target="value['hashtag']" data-slide-to="2"></li>
              <li v-bind:data-target="value['hashtag']" data-slide-to="3"></li>
              <li v-bind:data-target="value['hashtag']" data-slide-to="4"></li>
            </ol>
          <div class="carousel-inner" role="listbox">
            <!--Imagem Inicial2-->
            <div class="item active">
              <img class="first-slide img-rounded img-responsive"  src="../../../assets/logo.png" alt="First slide">
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
            <a class="left carousel-control" v-bind:href="value['hashtag']" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" v-bind:href="value['hashtag']" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
        </div><!-- /.carousel -->
        <dl>
          <dt>{{value['titulo']}}</dt>
            <dd class="text-justify">
              {{ value['texto'] }}
            </dd>
          </dl>
        <p>
          <a href='' class="btn btn-md btn-success">Ver mais...</a>
        </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Portifolio',
  data: () => {
    return {
      rotulo: 'portifolio'
    }
  },
  methods: {
    assets (asset) {
    //  return '../../../assets/portifolio/websites/negabranca/'.concat(asset)
    }
  },
  computed: {
    init: function () {
      var varTitle = document.getElementById('title')
      if (varTitle.innerHTML === '') {
        varTitle.innerHTML = 'Todos os portifolios'
      } else {
        varTitle.innerHTML = 'Todos os portifolios'
      }
    }
  }
}
</script>
<style>
/* Carousel base class */
.carousel {
  height: 80vh;
  margin-bottom: 60px;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  z-index: 10;
}
/* Declare heights because of positioning of img element */
.carousel .item {
  height: 100vh;
  background-color: #777;
}
.carousel-inner > .item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 40vw;
  height: 100vh;
}
.carousel-caption p {
    margin-bottom: 20px;
    font-size: 21px;
    line-height: 1.4;
  }
</style>
