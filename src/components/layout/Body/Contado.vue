<template>
  <div class="col-lg-12">
  <div class='contado col-xs-12 col-lg-6'>
    <div class='col-lg-12'>
      <h1><small>Contado</small></h1>
      <hr/>
      <address class="text-justify">
        <p>Email: <a href='mailto:anjoazrael10@gmail.com'>portifoliosTi@gmail.com</a></p>
        <p>CNPJ: 00000000000000000</p>
        <p>Facebook: PortifoliosTI</p>
        <p>Telefone: <a href='tel:+5521997894564'>(21) 9999 - 9999</a></p>
        <p>Skype: <a href='callto:+5521997894564'>Ligar para Portifolios Ti</a></p>
      </address>
    </div>
    <div class="col-lg-12">
      <div>
      <hr/>
        <img src='../../../assets/logo.png' alt='mapa do google' title='mapa google' class='center-block img-responsive img-rounded' />
      </div>
      <hr/>
    </div>
  </div>
  <div class="col-lg-6 rounded-right">
    <h1><small>Entre em contado conosco</small></h1>
    <hr/>
    <FormContado />
  </div>
</div>
</template>
<script>
import FormContado from '@/components/layout/Body/FormContado'
export default {
  name: 'Contado',
  components: {
    FormContado
  }
}
</script>
