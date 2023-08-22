<template>
  <div>
    <h3 class="p-3">Proyectos.</h3>
    <div class="row p-4">
      <div class="col col-md-3">
        <section class="nav flex-column">
          <div class="card m-3" style="width: 18rem;" v-for="proyecto in proyectos" :key="proyecto.id">
              <img :src="proyecto.img" class="card-img-top custom-img" :alt="proyecto.nombre"/>
              <div class="card-body">
                <h5 class="card-title">
                  <router-link :to="`/${proyecto.importName}`">{{ proyecto.nombre }}</router-link>
                </h5>
                <p class="card-text">{{ proyecto.descripcion }}</p>
              </div>
            </div>
        </section>
      </div>
      <div class="col col-md-9">
        <div v-if="$route.params.id === 'landingPage'">
          <landing-page></landing-page>
        </div>
        <div v-else-if="$route.params.id === 'listaMotosiclista'">
          <listaMotosiclista></listaMotosiclista>
        </div>
        <div v-else-if="$route.params.id === 'nuevaLista'">
          <nuevaLista></nuevaLista>
        </div>
        <div v-else-if="$route.params.id === 'calculadora'">
          <calculadora></calculadora>
        </div>
        <div v-else>
          <h4>Nada.</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import landingPage from "@/components/landingPage.vue";
import listaMotosiclista from "@/components/listaMotosiclista.vue";
import nuevaLista from "@/components/nuevaLista.vue";
import listaDeProyectos from "@/components/listaDeProyectos.vue"
import calculadora from "@/components/calculadora.vue"

export default {
  name: "proyectos",
  components: {
    landingPage,
    listaMotosiclista,
    nuevaLista,
    listaDeProyectos,
    calculadora
  },
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
          importName: 'proyectos/nuevaLista'
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

</style>