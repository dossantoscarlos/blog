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
        <a class="navbar-brand" href="/">Blog My</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="" class="dropdown-toggle" data-toggle="dropdown">Posts <b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{ name: 'home.blog' }">Destaque da semana</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'home.posts' }">Todos os Posts</router-link>
              </li>
            </ul>
          </li>
          <li class='dropdown'>
            <a href='#' class="dropdown-toggle" data-toggle="dropdown">Portifolios</a>
            <ul class="dropdown-menu">
              <li>
                <router-link :to="{ name: 'home.portifolio'}">Todos os Portifolios</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'home.android' } ">Android</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'home.websites' }">Websites</router-link>
              </li>
            </ul>
          </li>
          <li><router-link :to="{ name: 'home.contado'}">Fale Conosco</router-link></li>
          <li><router-link :to="{ name: 'home.about'}">Quem Somos</router-link></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>
<script>
export default {
  props: ['to'],
  name: 'Navbar'
}
</script>
