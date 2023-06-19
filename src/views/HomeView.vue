<template>
  <div class="home container">
    <img class="border borde-3 rounded-circle" width="200" height="250" alt="foto" src="../assets/fotoCarnet.png">
    <presentacion/>
    <nuevaLista/>
  </div>
</template>

<script>
// @ is an alias to /src
import nuevaLista from '@/components/nuevaLista.vue'
import presentacion from '@/components/presentacion.vue'

export default {
  name: 'HomeView',
  components: {
    nuevaLista,
    presentacion
  }
}
</script>

<style scoped>
img {
  margin-top: 20px;
}
</style>
