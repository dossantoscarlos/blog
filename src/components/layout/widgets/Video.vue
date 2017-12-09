<template>
  <div class="col-lg-12">
    <div class='col-lg-12'>
        <slot name='titulo'>
          <a :href="url" target="_blank" class="link"></a>
        </slot>
      <slot name='frame'></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Video',
  data: () => {
    return {
      link: 'https://www.youtube.com/embed/ESdMYaEZAvQ',
      url: 'https://youtu.be/ESdMYaEZAvQ',
      titulo: 'teste'
    }
  }
}
</script>
