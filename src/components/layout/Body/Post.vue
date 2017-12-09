<template>
  <section class="col-lg-10 col-lg-push-2" >
      {{init_post}}
      <div>
      <header class="col-lg-10 center-block" >
        <figure class="figure">
          <img src="#" class="img-fluid img-responsive" alt="..." id='banner'>
          <figcaption class="figure-caption text-muted" ><b id='tituloPagina'>tituloPagina</b></figcaption>
          <div class="text-muted">
            <b id='dataPostagem'>datapostagem</b><br/>
              <b id='hora'>hora</b><br/>
              <b id='autor'>autor</b><br/>
          </div>
        </figure>
      </header>
      <article>
        <dl>
          <dt class="col-lg-10">
            <h2 class="text-center">
              <b id='tituloDois'>Titulo dois</b>
              <hr/>
            </h2>
          </dt>
          <dd class="text-justify col-lg-10" >
            <div id='publicacao' class="col-lg-12"></div>
            <V-Video>
              <slot slot='titulo'>
                <a href="#" target="_blank" class="btn-link" id='url'>
                  <h3 class="text-center" id='tituloUrl'>titulo</h3>
                </a>
              </slot>
              <slot slot='frame'>
              <iframe class="center-block" width="560" height="315" src="https://youtube.com"
              frameborder="0" allowfullscreen id='link'></iframe>
            </slot>
            </v-Video>
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
import VVideo from '@/components/layout/widgets/Video'
export default {
  props: [ 'to', 'titulo', 'id' ],
  name: 'Post',
  components: { VVideo },
  computed: {
    init_post: function () {
      var varTitle = document.getElementById('title')
      varTitle.innerHTML = this.maiuscula(this.$props.titulo)
      var key = this.$props.titulo.replace(/ /g, '-')
      postsRef.once('value').then(function (snapshot) {
        if (snapshot.child(key).exists()) {
          // variaveis que serao consumida pelo firebase
          const tituloPagina = document.getElementById('tituloPagina')
          const tituloUrl = document.getElementById('tituloUrl')
          const tituloDois = document.getElementById('tituloDois')
          const hora = document.getElementById('hora')
          const autor = document.getElementById('autor')
          const publicacao = document.getElementById('publicacao')
          const link = document.getElementById('link')
          const url = document.getElementById('url')
          const dataPostagem = document.getElementById('dataPostagem')
          const banner = document.getElementById('banner')
          // fim das variaveis
          var listaTeste = snapshot.child(key).val()
          tituloPagina.innerHTML = 'Titulo: ' + listaTeste['titulo'].toUpperCase()
          tituloUrl.innerHTML = listaTeste['titulo'].toUpperCase()
          tituloDois.innerHTML = listaTeste['titulo'].toUpperCase()
          hora.innerHTML = 'Hora: ' + listaTeste['hora']
          autor.innerHTML = 'Autor: ' + listaTeste['autor']
          publicacao.innerHTML = listaTeste['publicacao']
          dataPostagem.innerHTML = 'Data: ' + listaTeste['dataPostagem']
          url.href = listaTeste['url']
          link.src = listaTeste['link']
          banner.src = listaTeste['imgBanner']
        } else {
          let protocolo = window.location.protocol
          let hosts = window.location.host
          window.location.href = protocolo + '//' + hosts + '/error/404'
        }
      }).catch(err => {
        console.log('Error: ', err.message)
      })
    }
  },
  firebase: {
    posts: postsRef
  },
  methods: {
    maiuscula (valor) {
      if (valor != null || valor === 'undefined') {
        return valor.toUpperCase()
      }
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
