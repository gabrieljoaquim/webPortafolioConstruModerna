<template>
  <div class="row">
    <div class="col-md">
      <h1>{{ nombre }}</h1>
      <h4>¡Bienvenido a mi portafolio!</h4>

        <p>Me complace presentarme como un profesional altamente capacitado en el campo del diseño y desarrollo. Soy un diseñador 3D y renderista con experiencia en proyectos de arquitectura, diseño de interiores, mobiliario y otros ámbitos del diseño. Además, también me desempeño como diseñador web y programador junior especializado en Vue.js.</p>

        <p>Con una sólida formación y habilidades técnicas, me dedico a crear modelos detallados y precisos utilizando las últimas herramientas y técnicas de modelado 3D. Mi experiencia en proyectos de arquitectura y diseño de interiores me ha permitido perfeccionar mis habilidades y alcanzar resultados sobresalientes.</p>

        <p>Como renderista, me apasiona crear imágenes realistas que transmitan la esencia y la visión de cada diseño. Utilizando técnicas avanzadas de iluminación, texturizado y postproducción, puedo dar vida a tus modelos, creando renders impactantes y profesionales. Trabajo con software de vanguardia y domino herramientas como V-Ray y SketchUp para lograr resultados fotorealistas.</p>

        <p>Además de mi experiencia en el campo del diseño 3D, también tengo conocimientos en diseño web y programación. Como programador junior especializado en Vue.js, puedo desarrollar aplicaciones web interactivas y funcionales que se adapten a tus necesidades específicas.</p>

        <p>Mi objetivo es brindarte un servicio personalizado y de alta calidad, asegurándome de cumplir con tus expectativas y requisitos. No importa el tamaño de tu proyecto, estoy comprometido a trabajar contigo para crear diseños únicos e impresionantes que destaquen.</p>

        <p>Si estás interesado en colaborar conmigo o deseas discutir tus proyectos, no dudes en ponerte en contacto. Estaré encantado de hablar contigo y explorar cómo puedo ayudarte a alcanzar tus objetivos de diseño.</p>

        <p>¡Gracias por visitar mi portafolio!</p>
      <div class="habilidades">
        <h3>Habilidades</h3>
        <ul>
          <li>Vue.js</li>
          <li>Node.js</li>
          <li>Modelado 3D</li>
          <li>Renderizado</li>
        </ul>
      </div>
      <div class="proyectos">
        <h3>Proyectos destacados</h3>
        <ul>
          <li v-for="proyecto in proyectos" :key="proyecto.id">
            <a :href="proyecto.enlace">{{ proyecto.nombre }}</a>
            <p>{{ proyecto.descripcion }}</p>
          </li>
        </ul>
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
export default {
  name: "presentacion",
  data() {
    return {
      nombre: "Gabriel Joaquim",
      titulo: "Desarrollador de Vue.js y modelador 3D",
      descripcion:
        "Soy un programador con experiencia en Vue.js, Node.js, y modelado 3D y renderizado. Me encanta crear aplicaciones web interactivas y visualmente atractivas.",
      proyectos: [
        {
          id: 1,
          nombre: "Proyecto 1",
          descripcion: "Descripción del proyecto 1.",
          enlace: "https://proyecto1.com",
        },
        {
          id: 2,
          nombre: "Proyecto 2",
          descripcion: "Descripción del proyecto 2.",
          enlace: "https://proyecto2.com",
        },
        {
          id: 3,
          nombre: "Proyecto 3",
          descripcion: "Descripción del proyecto 3.",
          enlace: "https://proyecto3.com",
        },
      ],
    };
  },
};
</script>
  <style scoped>
.row {
  margin-top: 50px;
}

/* .card {
  margin-left: 20px;
  width: 100%;
} */

/* .card-header {
  font-size: 1.2rem;
  font-weight: bold;
} */

/* .card-body {
  font-size: 1.1rem;
} */

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
</style>