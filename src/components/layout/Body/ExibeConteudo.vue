<template>
  <div class="col-lg-7 col">
    <figure class="figure">
      <img src="#" class="figure-img img-fluid img-rounded" alt="...">
    </figure>
    <div id='markdown' class="col-lg-7" :value='texto'>
      <vue-markdown >{{ texto }}</vue-markdown>
    </div>
    <div id="carousel-generic" class="carousel slide col-lg-7" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-generic" data-slide-to="1"></li>
        <li data-target="#carousel-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active">
          <img src="" alt="">
          <div class="carousel-caption">

          </div>
        </div>

      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-generic" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
      </a>
      <a class="right carousel-control" href="#carousel-generic" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExibeConteudo',
  data: () => {
    return {
      texto: '# ExibeConteudo'
    }
  }
}
</script>
