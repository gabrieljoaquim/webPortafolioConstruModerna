<template>
  <div class="home container-fluid">
    <!-- <presentacion/> -->
    <Accion/>
    <carrouselMenu/>
  </div>
</template>

<script>
// @ is an alias to /src
import presentacion from '@/components/presentacion.vue'
import Accion from '@/components/Accion.vue'
import carrouselMenu from '@/components/carrouselNavbar.vue'

export default {
  name: 'HomeView',
  components: {
    presentacion,
    Accion,
    carrouselMenu
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
