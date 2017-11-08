<template>
  <div id="carousel-generic" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-generic" data-slide-to="1"></li>
      <li data-target="#carousel-generic" data-slide-to="2"></li>
    </ol>
    <CarroselImg />
    <!-- Controls -->
    <!-- <a class="left carousel-control" href="#carousel-generic" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="right carousel-control" href="#carousel-generic" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
    </a> -->
  </div>
</template>
<script>
import CarroselImg from '@/components/layout/Body/CarroselImg'
export default {
  name: 'Slide',
  components: {
    CarroselImg
  }
}
</script>
