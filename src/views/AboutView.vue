<template>
  <div class="about">
    <!-- <h1>Lista de Motosiclistas.</h1>
    <RegistroUsuarios/>
    <listaMotosiclista/> -->
    <landingPage/>
  </div>
</template>

<script>
import listaMotosiclista from '@/components/listaMotosiclista.vue'
import RegistroUsuarios from '@/components/RegistroUsuarios.vue'
import landingPage from '@/components/landingPage.vue'

export default {
  name: 'About',
  components: {
    listaMotosiclista,
    RegistroUsuarios,
    landingPage

  }
}
</script>