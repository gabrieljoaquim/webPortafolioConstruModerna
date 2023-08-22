<template>
  <div class="home container">
    <presentacion/>
  </div>
</template>

<script>
// @ is an alias to /src
import presentacion from '@/components/presentacion.vue'

export default {
  name: 'HomeView',
  components: {
    presentacion,
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
