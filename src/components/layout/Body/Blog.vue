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
              <p>Veja como hospedar seu site na heroku.com passo a passo</p>
              <router-link
                :to="{ name: 'home.post', params: { titulo: 'hospedando site no heroku', id: 1  }}"
                 type='submit' class="btn btn-success borderButton" >Veja mais</router-link>
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
        { key: 1 }, { key: 2 }, { key: 3 }, { key: 4 }
      ]
    }
  }
}
</script>
<style>
  .borderButton{
    border: 0;
    border-color: none
  }
</style>
