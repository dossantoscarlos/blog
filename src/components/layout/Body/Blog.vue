<template>
  <div>
    {{init}}
    {{preencher()}}
    <hr/><h1 class="text-center">Destaques da semana</h1><hr/>
    <div v-for="itens in post" :key='itens.index' >
      <div class="card col-lg-4">
        <figure>
          <img v-bind:src="itens['imgBanner']" class="card img-fluid img-rounded img-responsive" v-bind:alt='titulo'>
          <figcaption class='myFont'>{{itens['.key'].replace(/-/g, ' ').toUpperCase()}}</figcaption>
        </figure>
        <article>
          <dl>
            <dt class='titulo'>
              {{itens['.key'].replace(/-/g, ' ').toUpperCase()}}
            </dt>
            <dd>
              <div class='descricao' v-html="itens['descricao'] + '...' "></div>
              <router-link :to="{ name: 'home.post', params: { titulo: 'hospedando site no heroku' }}" type='submit' class="btn btn-success borderButton" >Veja mais</router-link>
            </dd>
          </dl>
          </article>
      </div>
    </div>
  </div>
</template>
<script>
import { postsRef } from '@/firebase'
export default {
  name: 'Blog',
  data: () => {
    return {
      title: 'Destaque da Semana',
      titulo: 'imagem',
      src: '',
      Item: [
        { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }
      ]
    }
  },
  firebase: {
    post: postsRef.orderByChild('data').limitToLast(6)
  },
  computed: {
    init: function () {
      var varTitle = document.getElementById('title')
      varTitle.innerHTML = 'Destaques da semana'
    }
  },
  methods: {
    preencher () {
      postsRef.on('child_added', function (snapshot, prevChildkey) {
        var newPost = snapshot.val()
        console.log(newPost)
      }, function (error) {
        console.log(error.code)
      })
    }
  }
}
</script>
<style>
  .borderButton{
    border: 0;
    border-color: none
  }
  .descricao{
    min-height: 15vh;
    padding-top: 6px;
  }
  .titulo{
    font-family:cursive;
    text-decoration: underline;
  }
  .myFont{
    font-style: italic;
    font-size: 8pt;
    padding-bottom: 10px;
    text-align: center;
  }
</style>
