<template>
  <div class="col-lg-12">
    <div class="col-lg-6">
    <Slide />
      <dl>
        <dt>Descricao</dt>
        <dd class="text-justify">Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.</dd>
        </dl>
        <a href='' class="btn btn-md btn-success">Ver mais...</a>
  </div>
</div>
</template>
<script>
import Slide from '@/components/layout/Body/Slide'
export default {
  name: 'Portifolio',
  components: {
    Slide
  },
  data: () => {
    return {
      rotulo: 'portifolio'
    }
  }
}
</script>
<style>

</style>
