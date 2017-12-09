<template>
<div>
    <section class='col-lg-4'>
        <header>
            <img src='' alt='ICON' v-bind:title='titulo' />
        </header>
        <article>
            <dl>
                <dt>{{ titulo }}</dt>
                <dd>{{ texto }}</dd>
            </dl>
        </article>
    </section>
</div>
</template>
<script>
export default {
  name: 'Quiz',
  data: () => {
    return {
      titulo: 'titulo',
      texto: 'texto'
    }
  }
}
</script>
