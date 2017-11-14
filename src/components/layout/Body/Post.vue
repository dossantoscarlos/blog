<template>
  <section class="col-lg-10 col-lg-push-2" >
    <div v-for='(value, index) in posts'>
      <header class="col-lg-10 center-block" >
        <figure class="figure">
          <img src="../../../assets/php.jpg" class="img-fluid img-responsive" alt="...">
          <figcaption class="figure-caption text-muted"><b>Foto: {{ value['titulo'] }}</b></figcaption>
          <div class="text-muted">
            <b>Dia da postagem: {{ value['dataPostagem'] }} <br/>
              Hora da postagem: {{ value['hora'] }} <br/>
              Autor: {{ value['autor'] }}<br/></b>
          </div>
        </figure>
      </header>
      <article>
        <dl>
          <dt class="col-lg-10">
            <h2 class="text-center">
              <b>{{ maiuscula(value['titulo'])}}</b>
              <hr/>
            </h2>
          </dt>
          <dd class="text-justify col-lg-10" >
            <p v-for='n in 5' class="col-lg-12">
              {{ value['publicacao'] }}
            </p>
            <Video titulo='post' />
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
    </div>
  </section>
</template>
<script>
import { postsRef } from '@/firebase'
import Video from '@/components/layout/widgets/Video'
export default {
  props: [ 'titulo', 'id' ],
  name: 'Post',
  components: { Video },
  data: () => {
    return {
      rotulo: 'Heroku',
      dataPostagem: '233o3',
      horaPostagem: '2333232',
      autor: 'casdadada',
      postagem: 'adadadada'
    }
  },
  firebase: {
    posts: postsRef
  },
  methods: {
    dbPostagem () {
      postsRef.orderByChild('2232331').equalTo('heroku').on('value', function (snapshot) {
        console.log(snapshot.val())
      })
    },
    maiuscula (valor) {
      return valor.toUpperCase()
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
