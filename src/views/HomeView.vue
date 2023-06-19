<template>
  <div class="home container">
    <img class="border borde-3 rounded-circle" width="200" height="250" alt="foto" src="../assets/fotoCarnet.png">
    <presentacion/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <nuevaLista/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import nuevaLista from '@/components/nuevaLista.vue'
import presentacion from '@/components/presentacion.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    nuevaLista,
    presentacion
  }
}
</script>

<style scoped>
.container {
  padding-top: 120px;
}

img {
  margin-top: 20px;
}

</style>
