<template>
  <div>
    <p></p>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">Parabens</h3>
      <div slot="body">
        Mensagem enviada com sucesso
      </div>
      <div slot="footer">
        <button class="modal-default-button" @click="">OK</button>
      </div>
    </modal>
  </div>
</template>
<script>
export default {
  name: 'Modal'
}
</script>
