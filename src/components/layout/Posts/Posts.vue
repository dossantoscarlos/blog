<template>
  <div>
    {{ init }}
    <div class="container">
      todos os post
    </div>
    <div class="container">
      <ul class="pagination">
        <li><a href="#">&laquo;</a></li>
        <li><a href="#">&raquo;</a></li>
      </ul>
      <!-- niveis, basico, intermediario, avancado -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Posts',
  data: () => {
    return {
      title: 'Todos os posts'
    }
  },
  computed: {
    init: () => {
      const varTitle = document.getElementById('title')
      if (varTitle.innerHTML === '') {
        varTitle.innerHTML = 'Posts'
      } else {
        varTitle.innerHTML = 'Posts'
      }
    }
  }
}
</script>
