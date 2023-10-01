<template>
  <div class="revestimientos">
    <div class="row justify-content-around">
      <servicios class="col-sm-12 col-md-3 position-fixed"/>
      <h2>Revestimientos.</h2>
      <div class="col-8">

      </div>
    </div>
    <div class="row justify-content-around">
      <contacto class="col-6"/>
    </div>
  </div>
</template>

<script>
import servicios from '@/components/servicios.vue'
import contacto from '@/components/contacto.vue'

export default {
  name: "revestimientos",
  components:{
    servicios,
    contacto
  }
}
</script>

<style>

</style>