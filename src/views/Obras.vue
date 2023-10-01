<template>
  <div>
    <div class="row justify-content-around">
      <servicios class="servicios"/>
      <h2>Obras</h2>
      <div class="col-8">
        <h2>Trabajos en Obra Negra:</h2>
        
        <p>
          <strong>Cimentación:</strong> Preparación y construcción de la base o cimientos del edificio.
        </p>

        <p>
          <strong>Estructura de Concreto:</strong> Construcción de muros, columnas y losas de concreto armado que forman la estructura principal del edificio.
        </p>
        
        <p>
          <strong>Mampostería:</strong> Instalación de ladrillos o bloques de concreto para levantar muros y divisiones interiores.
        </p>

        <p>
          <strong>Instalaciones Eléctricas y Sanitarias:</strong> Preparación de los conductos y tuberías empotrados en las paredes y suelos para cableado eléctrico y fontanería.
        </p>

        <p>
          <strong>Hormigón Armado:</strong> Reforzamiento de estructuras de concreto con barras de acero.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import servicios from '@/components/servicios.vue'

export default {
    name:'Obras',
    components:{
      servicios  
    }
}
</script>

<style scoped>
      .servicios{

      }
</style>