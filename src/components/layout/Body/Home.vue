<template>
  <div>
    <header>
      <Navbar />
    </header>
    <div class="container">
      <router-view />
    </div>
    <div class="footer-central">
      <div class="container footer-one">
        <div class='col-xs-12 col-lg-12 text-center'>
          <h5><b class='color'>{{ text }}</b></h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/layout/Menu/Navbar'
export default {
  props: ['to'],
  name: 'Home',
  components: {
    Navbar
  },
  data: () => {
    return {
      text: 'Administre seu site onde voce estiver.'
    }
  }
}
</script>
<style scoped>
header{
  height: auto;
}
html{
  padding: 0 !important;
  margin: 0 !important;
}

.footer-central{
    margin-top: 10%;
    background-color: #CCC;
  }
  .footer-one{
    color:#000;
  }
  .color{
    color: #000
  }
  .contado{
    font-size: 16pt;
    padding-left: 20px !important;
  }
</style>
