<template>
  <div>
    <figure class="figure">
      <img src="#" class="figure-img img-fluid img-rounded">
    </figure>
    <dl>
      <dt>Dashboard</dt>
      <dd>
          Aplicacao para quem deseja um exelente dashboard
          leve e objetiva
      </dd>
    </dl>
    <router-link :to="{ name: 'home.exibeconteudo' , params: { diretorio: 'android' , id: '1' }}"
    class="btn btn-success">Veja...</router-link>
  </div>
</template>
<script>
export default {
  name: 'Android',
  data: function () {
    return {
      texto: 'ANDROID'
    }
  },
  computed: {
    init () {
      const varTitle = document.getElementById('title')
      if (varTitle.innerHttml === '') {
        console.log(window.locale)
      } else {
        console.log(window.locale)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
