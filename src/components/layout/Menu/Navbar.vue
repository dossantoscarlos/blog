<template>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"></a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="nav navbar-nav">
          <li class="active"></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><router-link :to="{ name: 'home.blog'}">Blog</router-link></li>
          <li><router-link :to="{ name: 'home.portifolio'}">Portifolio</router-link></li>
          <li><router-link :to="{ name: 'home.contado'}">Fale Conosco</router-link></li>
          <li><router-link :to="{ name: 'home.about'}">Quem Somos</router-link></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>
<script>
  export default {
    name: 'Navbar'
  }
</script>
