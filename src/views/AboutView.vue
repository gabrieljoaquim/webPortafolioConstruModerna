<template>
  <div class="about">
    <h1>Lista de Motosiclistas.</h1>
    <RegistroUsuarios/>
    <listaMotosiclista/>
  </div>
</template>

<script>
import listaMotosiclista from '@/components/listaMotosiclista.vue'
import RegistroUsuarios from '@/components/RegistroUsuarios.vue'

export default {
  name: 'About',
  components: {
    listaMotosiclista,
    RegistroUsuarios

  }
}
</script>