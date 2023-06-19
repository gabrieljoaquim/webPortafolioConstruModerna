<template>
  <div>
    <div class="proyectos">
        <h3>Proyectos destacados</h3>
        <div class="row">
          <div class="col d-flex justify-content-around">
            <div class="card" style="width: 18rem;" v-for="proyecto in proyectos" :key="proyecto.id">
              <img :src="proyecto.img" class="card-img-top custom-img" :alt="proyecto.nombre"/>
              <div class="card-body">
                <h5 class="card-title">
                  <router-link :to="`/${proyecto.importName}`">{{ proyecto.nombre }}</router-link>
                </h5>
                <p class="card-text">{{ proyecto.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
    name:"listaDeProyectos",
    data() {
    return {
      nombre: "Gabriel Joaquim",
      titulo: "Desarrollador de Vue.js y modelador 3D",
      descripcion:
        "Soy un programador con experiencia en Vue.js, Node.js, y modelado 3D y renderizado. Me encanta crear aplicaciones web interactivas y visualmente atractivas.",
      proyectos: [
        {
          id: 1,
          nombre: "LandingPage",
          img: require("@/assets/landingPage.png"),
          descripcion: "Descubre el poder de Vue.js y transforma tus ideas en experiencias web excepcionales.",
          importName: 'proyectos/landingPage'
        },
        {
          id: 2,
          nombre: "Formulario de contactos",
          img: require("@/assets/formularioContacto.png"),
          descripcion: "Conéctate con nosotros en segundos y déjanos ayudarte a hacer realidad tus proyectos.",
          importName: 'proyectos/listaMotosiclista'
        },
        {
          id: 3,
          nombre: "Calculadora",
          img: require("@/assets/calculadora.png"),
          descripcion: "Calcula rápidamente tus números con nuestra intuitiva calculadora: precisión y facilidad al alcance de tus dedos.",
          importName: 'proyectos/calculadora'
        },
      ],
    };
  },
}
</script>

<style>
.card {
  margin-left: 20px;
  width: 100%;
}

.card-header {
  font-size: 1.2rem;
  font-weight: bold;
}
.custom-img {
  width: 100%;
  height: 200px; /* Ajusta la altura según tus necesidades */
  object-fit: cover;
}
.card-body {
  font-size: 1.1rem;
}
</style>