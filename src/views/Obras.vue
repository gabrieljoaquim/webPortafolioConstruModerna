<template>
  <div>
    <div class="row justify-content-center mt-5">
      <div class="row">
        <h2>Trabajos en Obra Negra:</h2>
        
        <div class="col-ms-12 col-md">
          <div class="card">
            <img src="@/assets/img/simientos1.jpg" class="card-img-top col-sm-8" alt="simientos1">
            <div class="card-body">
              <p class="card-text">
                <strong>Cimentación:</strong> Preparación y construcción de la base o cimientos del edificio.
              </p>
            </div>
          </div>
        </div>

        <div class="col-ms-12 col-md">
          <div class="card">
            <img src="@/assets/img/estructuraConcreto.jpg" class="card-img-top" alt="estructuraConcreto">
            <div class="card-body">
              <p class="card-text">
                <strong>Estructura de Concreto:</strong> Construcción de muros, columnas y losas de concreto armado que forman la estructura principal del edificio.
              </p>
            </div>
          </div>
        </div>

        <div class="col-ms-12 col-md">
          <div class="card">
            <img src="@/assets/img/CONSTRUCCION.jpg" class="card-img-top" alt="simientos1">
            <div class="card-body">
              <p class="card-text">
                <strong>Mampostería:</strong> Instalación de ladrillos o bloques de concreto para levantar muros y divisiones interiores.
              </p>
            </div>
          </div>
        </div>

        <div class="col-ms-12 col-md">
          <div class="card">
            <img src="@/assets/img/instalacionElectrica.jpg" class="card-img-top" alt="instalacionElectrica">
            <div class="card-body">
              <p class="card-text">
                <strong>Instalaciones Eléctricas:</strong> Preparación de los conductos y tuberías empotrados en las paredes y suelos para cableado eléctrico.
              </p>
            </div>
          </div>
        </div>

        <div class="col-ms-12 col-md">
          <div class="card" style="width: 18rem;">
            <img src="@/assets/img/instalacionSanitaria.jpg" class="card-img-top" alt="instalacionSanitaria">
            <div class="card-body">
              <p class="card-text">
                <strong>Instalaciones Sanitarias:</strong> Preparación de los conductos y tuberías empotrados en las paredes y suelos para fontanería, aguas negras y blancas.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>


export default {
    name:'Obras',

}
</script>

<style scoped>
.card{
  background: rgba(11, 83, 69, 1);
  color: aliceblue;
}
</style>