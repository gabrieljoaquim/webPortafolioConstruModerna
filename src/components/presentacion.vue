<template>
  <div class="row">
    <div class="col-md">
      <div class="presentacion shadow rounded">
        <h1>{{ nombre }}</h1>
      <h4>¡Bienvenido a mi portafolio!</h4>

        <p>¡Hola! Me complace presentarme como un profesional altamente capacitado en el campo del diseño y desarrollo, con una pasión por Vue.js y el diseño 3D y renderizado. Soy un diseñador 3D y renderista con experiencia en proyectos de arquitectura, diseño de interiores, mobiliario y otros ámbitos del diseño. Además, también me especializo como programador con un enfoque del 50% en Vue.js.</p>

        <p>Como programador con experiencia en Vue.js, puedo desarrollar aplicaciones web interactivas y funcionales que se adapten a tus necesidades específicas. Utilizando Vue.js, puedo crear interfaces de usuario dinámicas y elegantes, implementar componentes reutilizables y optimizar el rendimiento de las aplicaciones web. Mi objetivo es crear experiencias interactivas y atractivas para los usuarios, combinando habilidades tanto en desarrollo frontend como en diseño.</p>

        <p>En cuanto a mi experiencia en diseño 3D y renderizado, puedo crear modelos detallados y precisos utilizando las últimas herramientas y técnicas de modelado. Mi experiencia en proyectos de arquitectura y diseño de interiores me ha permitido perfeccionar mis habilidades y alcanzar resultados sobresalientes. Como renderista, me apasiona crear imágenes realistas que transmitan la esencia y la visión de cada diseño. Utilizo técnicas avanzadas de iluminación, texturizado y postproducción para dar vida a tus modelos, generando renders impactantes y profesionales.</p>

        <p>Mi objetivo es brindarte un servicio personalizado y de alta calidad, asegurándome de cumplir con tus expectativas y requisitos tanto en el desarrollo con Vue.js como en el diseño 3D y renderizado. Estoy comprometido a trabajar contigo para crear diseños únicos y funcionales que combinen lo mejor de ambos mundos.</p>

        <p>Si estás interesado en colaborar conmigo o deseas discutir tus proyectos, no dudes en ponerte en contacto. Estaré encantado de hablar contigo y explorar cómo puedo ayudarte a alcanzar tus objetivos de diseño y desarrollo con Vue.js y el diseño 3D.</p>

        <p>¡Gracias por visitar mi portafolio y considerar mi trabajo!</p>
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
    <!-- <div class="col-md-6 fixed-bottom fised-md">
      <div class="card bg-dark text-white" style="position: absolute; bottom: 0; width: 100%;">
        <div class="card-header bg-primary">Información de contacto</div>
        <div class="card-body">
          <p>Correo electrónico: {{ email }}</p>
          <p>Teléfono: {{ telefono }}</p>
          <p>Sitio web: {{ sitioWeb }}</p>
        </div>
      </div>
    </div> -->
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
  },
  methods: {
    
  },
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