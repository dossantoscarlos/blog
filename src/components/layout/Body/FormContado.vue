<template>
  <form class='form-group' method="post">
    <p>
      <label>Nome: </label>
      <input type='text' class='form-control' v-model='name' required />
    </p>
    <p>
      <label>Email: </label>
      <input type='email' class='form-control' v-model='email' required/>
    </p>
    <p>
      <label>
        <abbr title="telefone">Tel.</abbr>:
      </label>
      <input type='phone' class='form-control' v-model='tel' required/>
    </p>
    <p>
      <label>Mensagem: </label>
      <textarea name="name" rows="8" cols="80" class='form-control' v-model='mensagem'></textarea>
    </p>
    <button type='button' @click='enviarContado' class="btn btn-lg btn-primary">Submit</button>
  </form>
</template>
<script>
import { contadoRef } from '@/firebase'
import modal from '@/components/layout/widgets/modal'
export default {
  name: 'FormContado',
  components: {
    modal
  },
  data: () => {
    return {
      name: '',
      email: '',
      mensagem: '',
      tel: ''
    }
  },
  methods: {
    enviarContado () {
      contadoRef.push({
        name: this.name,
        email: this.email,
        mensagem: this.mensagem,
        tel: this.tel
      }).then(result => {
        if (result.key != null) {
          alert('Salvo com sucesso !!!\nEm breve entraremos em contado.')
          this.$router.push('blog')
        }
      }).catch(err => {
        if (err.message === 'PERMISSION_DENIED: Permission denied') {
          alert('Contact o administrador de seu site error: PERMISSAO NEGADA')
        }
      })
    }
  }
}
</script>
