<template>
  <div class="modelado">
    <h2 class="p-3">{{nameVista}}</h2>
    <div class="row p-4">
      <div class="col col-md-3">
        <section class="nav flex-column">
          <div class="card m-3" style="width: 18rem;" v-for="proyecto3d in proyectos3d" :key="proyecto3d.id">
              <img :src="proyecto3d.img" class="card-img-top custom-img" :alt="proyecto3d.nombre"/>
              <div class="card-body">
                <h5 class="card-title">
                  <router-link :to="`/${proyecto3d.nameRuta}`">{{ proyecto3d.name }}</router-link>
                </h5>
                <p class="card-text">{{ proyecto3d.descripcion }}</p>
              </div>
            </div>
        </section>
      </div>
      <div class="col col-md-9">
        <div v-if="$route.params.id === 'cocinaModerna'">
          <cocinaModerna></cocinaModerna>
        </div>
        <div v-else-if="$route.params.id === 'lovyEspejos'">
          <lovyEspejos></lovyEspejos>
        </div>
        <div v-else-if="$route.params.id === 'muebleMetal'">
          <!-- <muebleMetal></muebleMetal> -->
        </div>
        <div v-else>
          <h4>Nada.</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lovyEspejos from '@/components/lovyEspejos.vue'
// import muebleMetal from '@/components/muebleMetal.vue'
import cocinaModerna from '@/components/cocinaModerna.vue'

export default {
  name: 'proyectos3d',
  data() {
    return{
      nameVista: 'Modelados 3d y renderizados.',
      descripcion: 'Descubre un mundo tridimensional lleno de creatividad y pasión. Sumérgete en mis proyectos 3D y déjate cautivar por las formas, texturas y colores que cobran vida en cada diseño. Desde escenarios virtuales hasta objetos sorprendentes, cada pieza es una expresión única de mi imaginación. ¡Explora y déjate inspirar por esta galería de dimensiones ilimitadas!',
      proyectos3d: [
        {
          id: 1,
          name: 'Cocima Moderna',
          img: require('@/assets/imagenes3d/cocinaTerminada.png'),
          descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda maxime omnis reprehenderit cupiditate autem non. Rerum debitis saepe nobis consectetur, consequuntur vitae dolorum quisquam illo veniam at repellat ad voluptatibus.',
          nameRuta: 'proyectos3d/cocinaModerna'
        },
        {
          id: 2,
          name: "lovyEspejos",
          img: require('@/assets/imagenes3d/lovyTerminado.png'),
          descripcion: "Calcula rápidamente tus números con nuestra intuitiva calculadora: precisión y facilidad al alcance de tus dedos.",
          nameRuta: 'proyectos3d/lovyEspejos'
        },
        {
          id: 3,
          name: "muebleMetal",
          img: require('@/assets/imagenes3d/muebleMetalImagen.png'),
          descripcion: "Calcula rápidamente tus números con nuestra intuitiva calculadora: precisión y facilidad al alcance de tus dedos.",
          nameRuta: 'proyectos3d/muebleMetal'
        },
      ],

    }
  },
  components: {
    cocinaModerna,
    // muebleMetal,
    lovyEspejos,
  },
  props: ['nameVista'],
}
</script>