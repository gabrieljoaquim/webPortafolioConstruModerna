<template>
  <div class="row">
    <div class="col-md p-1">

        <div class="presentacion shadow rounded" style="width: 22rem;">
          <div class="cabesa d-flex justify-content-center m-2">
            <img class="border borde-3 rounded-circle" width="200" height="250" alt="foto" src="../assets/fotoCarnet.png"/>
          </div>
          <div class="card-body">
            <h5 class="card-title">¡Bienvenido a mi portafolio!</h5>
            <p class="card-text">¡Hola! Me complace presentarme como un profesional altamente capacitado en el campo del diseño y desarrollo.</p>
            <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  Imformacion...
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  Soy un profesional altamente capacitado en diseño y desarrollo, con especialización en Vue.js y diseño 3D. Mi experiencia abarca proyectos de arquitectura, diseño interior y desarrollo web interactivo. Combino mi destreza en programación con Vue.js para crear aplicaciones web dinámicas y elegantes, y mi experiencia en diseño 3D me permite crear modelos precisos y renders realistas mediante técnicas avanzadas. Mi objetivo es fusionar estas habilidades para ofrecer un servicio personalizado y de alta calidad que cumpla tus expectativas en ambos campos. Si estás interesado en colaborar o discutir proyectos, no dudes en contactarme. ¡Gracias por considerar mi trabajo!
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

          <div v-if="importName == 'landingPage'">
            <h2>{{ importName }}</h2>
            <landingPage/>
          </div>
          <div v-else-if="importName == 'listaMotosiclista'">
            <listaMotosiclista/>
          </div>
          <div v-else-if="importName == 'nuevaLista'">
            <nuevaLista/>
          </div>
          <div v-else></div>


      <div class="habilidades">
        <h3>Habilidades</h3>
        <ul>
          <li>Vue.js</li>
          <li>Node.js</li>
          <li>Modelado 3D</li>
          <li>Renderizado</li>
        </ul>
      </div>
      <div>
        <listaDeProyectos/>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import landingPage from '@/components/landingPage.vue'
  import listaMotosiclista from '@/components/listaMotosiclista.vue'
  import nuevaLista from '@/components/nuevaLista.vue'
  import listaDeProyectos from '@/components/listaDeProyectos.vue'

export default {
  name: "presentacion",
  
  props:['importName'],
  components: {
    landingPage,
    listaMotosiclista,
    nuevaLista,
    listaDeProyectos
  }
 }


</script>
  <style scoped>
  .container {
  background: rgba(200, 200, 200, 0.3);
}
.row {
  margin-top: 50px;
}

.presentacion {
  background: rgba(200, 200, 200, 0.3);
  border: 2px solid white;
}

.habilidades {
  margin-top: 30px;
}

.proyectos {
  margin-top: 30px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

/* .fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translateX(50%);
  margin: 20px;
  z-index: 9999;
} */

@media (min-width: 768px) {
  .fixed-md {
    position: fixed;
  }
}

.popup {
  position: fixed;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  background-color: white;
  z-index: 9999;
  overflow: auto;
}
</style>