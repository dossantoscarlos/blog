<template>
  <main class="container main">
    {{init}}
    <div class='centralizar'>
      <h1 class="text-center">Page not Found</h1>
        <center>
          <p class='text-center'>
            Click a baixo para ser redirecionado para a pagina principal !!!
          </p>
          <router-link :to="{ name: 'home.blog' }" class="btn btn-lg btn-success" >redirect</router-link>
        </center>
    </div>
  </main>
</template>
<script>
export default {
  name: 'error404',
  computed: {
    init: function () {
      const title = document.getElementById('title')
      title.innerHTML = '404'
    }
  }
}
</script>
<style scoped>
  .main{
    height: 61.6vh !important
  }
  .centralizar{
    margin: 0 auto !important;
    border: 4px solid #CCC0;
    margin-top: 10% !important;
    max-width: 330px;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 2px 2px 3px 3px #CCF;
    padding: 20px;
    margin: 0 auto;
  }
  div.centralizar{
      display: block;
  }
</style>
