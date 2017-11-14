<template>
  <div class="col-lg-12">
    <div class='col-lg-12'>
      <a :href="url" target="_blank" class="link">
        <h3 class="text-center col-lg-12">{{ titulo }}</h3>
      </a>
      <iframe class="center-block" width="560" height="315" :src="link"
      frameborder="0" allowfullscreen></iframe>
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
