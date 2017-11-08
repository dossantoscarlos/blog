<template>
  <form class='form-group' method="post">
    <p>
      <label>Nome: </label>
      <input type='text' class='form-control' required />
    </p>
    <p>
      <label>Email: </label>
      <input type='email' class='form-control' required/>
    </p>
    <p>
      <label><abbr title="telefone">Tel.</abbr>: </label>
      <input type='text' class='form-control' required/>
    </p>
    <p>
      <label>Mensagem: </label>
      <textarea name="name" rows="8" cols="80" class='form-control'></textarea>
    </p>
    <button type='submit' class="btn btn-lg btn-primary">Submit</button>
  </form>
</template>
<script>
export default {
  name: 'FormContado'
}
</script>
