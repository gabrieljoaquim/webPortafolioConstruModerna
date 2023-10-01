<template>
  <div class="servicios">
    <div class="menuPequenoServicios col-12 d-block d-sm-none">
      <div class="row">
      <button class="btn btn-success d-grid gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseServicios" aria-expanded="false" aria-controls="collapseServicos">
        servicios
      </button>
      <div
          class="collapse col-12" id="collapseServicios"
        >
        <div class="col-sm-12">
          <h5 class="fs-6" @click="mostrarServicio('modelado3d')">
            Planificación
          </h5>
        </div>
        <div>
          <h5 class="fs-6" @click="mostrarServicio('obras')">
            Albañilería
          </h5>
        </div>
          <h5 class="fs-6" @click="mostrarServicio('plomeria')">
            Plomería
          </h5>
          <h5 class="fs-6" @click="mostrarServicio('electricidad')">
            Electricidad
          </h5>
          <h5 class="fs-6" @click="mostrarServicio('pinturas')">
            Pintura
          </h5>
          <h5 class="fs-6" @click="mostrarServicio('metales')">
            Soldadura
          </h5>
          <h5 class="fs-6" @click="mostrarServicio('aluminios')">
            Aluminios
          </h5>
          <h5 class="fs-6" @click="mostrarServicio('revestimientos')">
            Enchapes
          </h5>
          <h5 class="fs-6" @click="mostrarServicio('carpinteria')">
            Carpintería
          </h5>

      </div>
    </div>
    </div>

    <div class="menuGrandeServicios col-sm-12 d-none d-sm-block">
      
      <div class="row">
        <p class="text-center fs-2 mb-3">Nuestros Servicios</p>
        <p class="fs-5 p-3">
          En ConstruModerna, ofrecemos una amplia gama de servicios especializados
          en el ámbito de la construcción y el diseño moderno. Algunos de nuestros
          servicios clave incluyen:
        </p>
      </div>
  
      <div class="row">
        <div class="col-sm">
          <div
            class="card m-3"
            @click="mostrarServicio('modelado3d')"
            style="cursor: pointer"
          >
            <div class="card-body">
              <h5 class="card-title text-end fs-4">
                Modelado 3D y Planificación:
              </h5>
              <p class="card-text text-end fs-6">
                Transformamos tus ideas en modelos tridimensionales detallados que
                te permiten visualizar y planificar proyectos de construcción con
                precisión.
              </p>
            </div>
          </div>
        </div>
  
        <div class="col-sm">
          <div
            class="card m-3"
            @click="mostrarServicio('obras')"
            style="cursor: pointer"
          >
            <div class="card-body">
              <h5 class="card-title text-start fs-4">Albañilería:</h5>
              <p class="card-text text-start fs-6">
                Realizamos obras de albañilería en general, incluyendo obras
                negras y grises, para brindar solidez y estructura a tus
                proyectos.
              </p>
            </div>
          </div>
        </div>
  
        <div class="col-sm">
          <div
            class="card m-3"
            @click="mostrarServicio('plomeria')"
            style="cursor: pointer"
          >
            <div class="card-body">
              <h5 class="card-title text-end fs-4">Plomería:</h5>
              <p class="card-text text-end fs-6">
                Ofrecemos servicios de plomería tanto para aguas blancas como
                negras, garantizando un sistema de agua eficiente y confiable.
              </p>
            </div>
          </div>
        </div>
  
        <div class="col-sm">
          <div
            class="card m-3"
            @click="mostrarServicio('electricidad')"
            style="cursor: pointer"
          >
            <div class="card-body">
              <h5 class="card-title text-start fs-4">
                Electricidad Residencial:
              </h5>
              <p class="card-text text-start fs-6">
                Realizamos instalaciones eléctricas residenciales seguras y
                eficientes, brindando energía confiable para tus proyectos.
              </p>
            </div>
          </div>
        </div>
  
        <div class="col-sm">
          <div
            class="card m-3"
            @click="mostrarServicio('pinturas')"
            style="cursor: pointer"
          >
            <div class="card-body">
              <h5 class="card-title text-end fs-4">Pintura y Acabados:</h5>
              <p class="card-text text-end fs-6">
                Destacamos la estética de tus proyectos con nuestros servicios de
                pintura y acabados de alta calidad.
              </p>
            </div>
          </div>
        </div>
  
        <div class="col-sm">
          <div
            class="card m-3"
            @click="mostrarServicio('metales')"
            style="cursor: pointer"
          >
            <div class="card-body">
              <h5 class="card-title text-start fs-4">Herrería y Soldadura:</h5>
              <p class="card-text text-start fs-6">
                Realizamos trabajos de herrería y soldadura, incluyendo rejas,
                escaleras, puertas y estructuras metálicas de alta calidad.
              </p>
            </div>
          </div>
        </div>
  
        <div class="col-sm">
          <div
            class="card m-3"
            @click="mostrarServicio('aluminios')"
            style="cursor: pointer"
          >
            <div class="card-body">
              <h5 class="card-title text-end fs-4">
                Ventanería en Aluminio y Vidrio:
              </h5>
              <p class="card-text text-end fs-6">
                Instalamos ventanas y puertas de alta calidad en aluminio y
                vidrio, proporcionando soluciones estéticas y funcionales.
              </p>
            </div>
          </div>
        </div>
  
        <div class="col-sm">
          <div
            class="card m-3"
            @click="mostrarServicio('revestimientos')"
            style="cursor: pointer"
          >
            <div class="card-body">
              <h5 class="card-title text-start fs-4">
                Enchapes en Cerámicas y Porcelanato:
              </h5>
              <p class="card-text text-start fs-6">
                Realizamos instalaciones de enchapes en cerámicas y porcelanato,
                mejorando la estética y la durabilidad de tus espacios.
              </p>
            </div>
          </div>
        </div>
  
        <div class="col-sm">
          <div
            class="card m-3"
            @click="mostrarServicio('carpinteria')"
            style="cursor: pointer"
          >
            <div class="card-body">
              <h5 class="card-title text-end fs-4">Carpintería:</h5>
              <p class="card-text text-end fs-6">
                Realizamos trabajos de carpintería, incluyendo la instalación de
                puertas, ventanas, muebles y otras estructuras de madera a medida
                para tus proyectos.
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
  name: "servicios",
  methods: {
    mostrarServicio(servicio) {
      this.$router.push({ name: servicio });
    },
  },
};
</script>

<style scoped>
.card {
  background: rgba(11, 83, 69, 0.9);
  border: none;
  box-shadow: 0 0 10px rgba(245, 245, 174, 0.5);
}
.servicios {
  background-color: rgba(8, 8, 8, 0.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8) ;
}
@media screen and (max-width: 768px) {
  
}
</style>