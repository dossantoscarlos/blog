<template>
    <div>
        <section>
            <article>
              <h2>{{ pergunta }}</h2>
              <div>
                <input type="radio" name='radio1' v-bind:value="questao" />
              </div>
              <button type="button">Confirmar</button>
            </article>
        </section>
    </div>
</template>
<script>
export default {
    name: 'Question',
    data: () => {
        return {
            pergunta: 'pergnta 1',
            questao: 'questao'
        }
    }
}
</script>
