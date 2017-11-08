<template>
  <div>
    <header class="text-center">
      <hr/>
      <div><h1>Destaques da semana</h1></div>
      <hr/>
    </header>
    <section class="text-justify col-md-12"  >
      <div class="col-lg-4" v-for="(itens , index ) in Item" :key="itens.index">
        <header>
          <img src="../../../assets/php.jpg" class="img-responsive" :alt="titulo" />
        </header>
        <article>
          <p><em>PHP sem framewok</em></p>
          <dl>
            <dt>Hospedando site no heroku</dt>
            <dd>
              <div>
                <p>Veja como hospedar seu site na heroku.com passo a passo</p>
                <router-link :to="{ name: 'home.post', params: { titulo: 'hospedando site no heroku', id: 1  }}" type='submit' class="btn btn-success">Veja mais</router-link>
                <button type="submit" class='btn btn-default' v-on:click='log(itens.index)'>Console</button>
              </div>
            </dd>
          </dl>
        </article>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Blog',
  data: () => {
    return {
      titulo: 'imagem',
      Item: [
        { key: 1 },
        { key: 2 },
        { key: 3 },
        { key: 4 },
        { key: 5 },
        { key: 6 }
      ]
    }
  },
  methods: {
    log: (src) => {
      console.log(src)
    }
  }
}
</script>
