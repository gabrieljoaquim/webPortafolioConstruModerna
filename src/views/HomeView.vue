<template>
  <div class="home container">
    <presentacion/>
    <carrousel/>
  </div>
</template>

<script>
// @ is an alias to /src
import presentacion from '@/components/presentacion.vue'
import carrousel from '@/components/carrouselNavbar.vue'

export default {
  name: 'HomeView',
  components: {
    presentacion,
    carrousel
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
