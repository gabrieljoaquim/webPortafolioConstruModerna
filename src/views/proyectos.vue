<template>
  <div>
    <h3>Proyectos. {{ $route.params.id }}</h3>
    <div class="row">
      <div class="col col-md-3">
        <section class="nav flex-column">
            <router-link  class="nav-item" :to="proyecto.name" v-for="(proyecto, index) of proyectos" :key="index ">
                
                <div class="card" style="width: 18rem;">
                    <img src="@/assets/logo.png" class="card-img-top" alt="proyecto.id">
                    <div class="card-body">
                        <h5 class="card-title">{{ proyecto.name }}</h5>
                        <p class="card-text">{{ proyecto.description }}</p>
                        <button>{{ proyecto.name }}</button>
                    </div>
                </div>


            </router-link>
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

export default {
  name: "proyectos",
  components: {
    landingPage,
    listaMotosiclista,
    nuevaLista,
  },
  data() {
    return {
      proyectos: [
        {
          id: 1,
          name: "landingPage",
          description: "Descripcion del proyecto: LandingPage.",
        },
        {
          id: 2,
          name: "listaMotosiclista",
          description: "Descripcion del proyecto: listaMotosiclista.",
        },
        {
          id: 1,
          name: "nuevaLista",
          description: "Descripcion del proyecto: nuevaLista.",
        },
      ],
    };
  },
};
</script>

<style>
.col-md-9 {
    background: rgba(200,200,200,0.5);
}
</style>