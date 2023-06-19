<template>
  <div class="home container">
    <div class="cabesa d-flex justify-content-center">
      <img class="border borde-3 rounded-circle" width="200" height="250" alt="foto" src="../assets/fotoCarnet.png"/>
    </div>
    <presentacion/>
  </div>
</template>

<script>
// @ is an alias to /src
import presentacion from '@/components/presentacion.vue'

export default {
  name: 'HomeView',
  components: {
    presentacion
  }
}
</script>

<style scoped>
.home {
  align-content: center;
}
img {

  margin-top: 30px;
}
</style>
