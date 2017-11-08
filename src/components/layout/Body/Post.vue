<template>
  <section class="col-lg-10 col-lg-push-2">
      <header class="col-lg-10 center-block">
        <figure class="figure">
          <img src="../../../assets/php.jpg" class="img-fluid img-responsive" alt="...">
          <figcaption class="figure-caption text-muted"><b>Foto: {{ titulo }}</b></figcaption>
          <div class="text-muted">
            <b>
              Dia da postagem: {{ dataPostagem }}<br/>
              Hora da postagem:{{ datas }}<br/>
              Autor: {{ autor }}<br/>
            </b>
          </div>
        </figure>
      </header>
      <article>
        <dl>
          <dt class="col-lg-10">
            <h2 class="text-center">
              <b>{{ titulo.toUpperCase() }}</b>
              <hr/>
            </h2>
          </dt>
          <dd class="text-justify col-lg-10" >
            <p v-for='n in 5' class="col-lg-12">
              {{ post }}
            </p>
        </dd>
        </dl>
      </article>
      <!-- 0800 7212054
      www.paguefacil.com.br
      parcela 177 / 200 / -->
      <div class="col-lg-12 " id='voltar'>
        <router-link :to="{ name: 'home.blog'}" class="col-lg-2 col-lg-push-4 btn btn-lg btn-primary">
          Voltar...</router-link>
      </div>
    </section>
</template>
<script>
const dataMes = new Date()
let hora = dataMes.getHours() + ':' + dataMes.getMinutes()
export default {
  props: {
    titulo: {
      default: null
    },
    id: {
      default: null
    }
  },
  name: 'Post',
  data: () => {
    return {
      post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      dataPostagem: '23/11/2300',
      autor: 'Carlos Eduardo',
      datas: hora
    }
  }
}
</script>
<style scoped>
  img {
    height: 250px;
    width: 1080px;
  }
  .sublinhado {
      text-decoration:underline;
  }
  #voltar{
    margin-top: 2.5%
  }
</style>
