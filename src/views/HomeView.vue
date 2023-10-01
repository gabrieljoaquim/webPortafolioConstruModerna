<template>
  <div class="home container-fluid">
    <div class="row">
      <div
        class="portada col shadow d-flex align-items-center justify-content-center"
      >
        <div class="titulo p-4 rounded">
          <h2>Construcción y Diseño: Transformando Tu Visión en Realidad</h2>
        </div>
      </div>
    </div>
    <div class="row pt-3 pt-md-5">
      <p class="fs-2 fs-md-3">
        Bienvenidos a ConstruModerna: Tu Socio en la Transformación de tus
        Sueños.
      </p>

      <div class="presentacion">
        <p class="fs-5">
          En <strong class="unstyled">ConstruModerna</strong>, no solo construimos edificaciones,
          creamos sueños y transformamos ideas en realidad. Nos enorgullece ser
          tu socio en la construcción y diseño moderno, y aquí está cómo hacemos
          que tus proyectos sean extraordinarios:
        </p>

        <ol class="description fs-6 p-5 list-unstyled">
          <li>
            <strong>Diseño y Planificación:</strong> Comenzamos por sentarnos
            contigo, escuchar tus ideas y sueños, y luego utilizamos nuestra
            experiencia y creatividad para diseñar proyectos que superen tus
            expectativas. Nuestro proceso de planificación es meticuloso y
            preciso, utilizando el modelado 3D para visualizar cada detalle
            antes de comenzar la construcción.
          </li>

          <li>
            <strong>Construcción de Calidad:</strong> Nuestra experiencia en
            albañilería, plomería, electricidad y más garantiza que cada aspecto
            de tu proyecto se construya con los más altos estándares de calidad.
            Desde las obras negras hasta las grises, nos aseguramos de que tu
            estructura sea sólida y duradera.
          </li>

          <li>
            <strong>Diseño Interior y Acabados:</strong> No nos detenemos en la
            estructura básica. Nuestro equipo de expertos en diseño de
            interiores se encarga de los acabados, la pintura, los enchapes y
            los detalles finales. Cada rincón de tu proyecto reflejará belleza y
            funcionalidad.
          </li>

          <li>
            <strong>Ventanería y Carpintería:</strong> Instalamos ventanas y
            puertas de alta calidad en aluminio y vidrio para que tu espacio sea
            estéticamente agradable y eficiente energéticamente. Nuestra
            carpintería crea muebles y estructuras de madera a medida, agregando
            calidez y estilo a tus proyectos.
          </li>

          <li>
            <strong>Herrería y Soldadura:</strong> Realizamos trabajos de
            herrería y soldadura, incluyendo rejas, escaleras, puertas y
            estructuras metálicas de alta calidad que no solo son funcionales,
            sino también estéticamente impresionantes.
          </li>

          <li>
            <strong>Servicios Especiales:</strong> También ofrecemos servicios
            especiales como instalación de techos, canoas y más, asegurándonos
            de que cada detalle esté cuidadosamente ejecutado.
          </li>
        </ol>

        <div class="row justify-content-around pb-5">
            <img id="imgPresentacion" class="col-3" src="@/assets/imagenes3d/cocinaModernaImagen.png" alt="">
            <img id="imgPresentacion" class="col-3" src="@/assets/imagenes3d/cosinaPequeña.png" alt="">
            <img id="imgPresentacion" class="col-3" src="@/assets/imagenes3d/lovyTerminado.png" alt="">
        </div>

        <p class="fs-5">
          En ConstruModerna, creemos que la combinación de la creatividad y la
          tecnología puede dar vida a ideas extraordinarias. Estamos
          comprometidos a llevar tus proyectos y visiones arquitectónicas al
          siguiente nivel, utilizando las tecnologías más avanzadas disponibles.
        </p>

      </div>
    </div>
    <div class="servicios shadow p-1">
      <div class="row">
        <p class="text-center fs-2 mb-3">Nuestros Servicios</p>
        <p class="fs-5 p-3">
          En ConstruModerna, ofrecemos una amplia gama de servicios
          especializados en el ámbito de la construcción y el diseño moderno.
          Algunos de nuestros servicios clave incluyen:
        </p>
      </div>

      <div class="row">
        <div class="col-sm-6">
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
                Transformamos tus ideas en modelos tridimensionales detallados
                que te permiten visualizar y planificar proyectos de
                construcción con precisión.
              </p>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
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

        <div class="col-sm-6">
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

        <div class="col-sm-6">
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

        <div class="col-sm-6">
          <div
            class="card m-3"
            @click="mostrarServicio('pinturas')"
            style="cursor: pointer"
          >
            <div class="card-body">
              <h5 class="card-title text-end fs-4">Pintura y Acabados:</h5>
              <p class="card-text text-end fs-6">
                Destacamos la estética de tus proyectos con nuestros servicios
                de pintura y acabados de alta calidad.
              </p>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
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

        <div class="col-sm-6">
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

        <div class="col-sm-6">
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

        <div class="col-sm-6">
          <div
            class="card m-3"
            @click="mostrarServicio('carpinteria')"
            style="cursor: pointer"
          >
            <div class="card-body">
              <h5 class="card-title text-end fs-4">Carpintería:</h5>
              <p class="card-text text-end fs-6">
                Realizamos trabajos de carpintería, incluyendo la instalación de
                puertas, ventanas, muebles y otras estructuras de madera a
                medida para tus proyectos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="vision row mt-5 p-2 shadow d-flex align-items-center justify-content-center"
    >
      <div class="vis">
        <h4 class="col-2 w-100 fs-2">Nuestra Visión</h4>

        <p class="col-10 p-3 lh-lg fs-3">
          En ConstruModerna, nuestra visión es liderar el camino en la
          integración de la tecnología de vanguardia en la industria de la
          construcción y el diseño. Creemos que la creatividad y la innovación
          deben estar en el corazón de cada proyecto, y estamos comprometidos a
          superar tus expectativas en cada paso del camino.
        </p>
      </div>
    </div>

    <div class="accion mt-5">
      <p class="fs-3 p-5">
        ¿Listo para dar vida a tu visión? ¡Nos encantaría trabajar contigo!
        Ponte en contacto hoy mismo para discutir tu proyecto y cómo podemos
        ayudarte a lograr resultados impresionantes. Estamos listos para
        convertir tus ideas en realidad.
      </p>
    </div>

    <contacto />
  </div>
</template>

<script>
// @ is an alias to /src
import contacto from "@/components/contacto.vue";

export default {
  name: "HomeView",
  components: {
    contacto,
  },
  methods: {
    mostrarServicio(servicio) {
      this.$router.push({ name: servicio });
    },
  },
};
</script>

<style scoped>
.home {
  align-content: center;
  width: 100vw;
}
.container-fluid {
  color: white;
}
.portada {
  background-image: url("@/assets/imagenes3d/TH·-1800.effectsResult.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 800px;
}
.titulo {
  text-align: center;
  color: white;
  background-color: rgba(22, 22, 22, 0.5);
  /* box-shadow: 0 0 30px rgba(255, 255, 0, 0.5); */
}
.presentacion p {
  font-size: 30px;
}
.card {
  background: rgba(11, 83, 69, 0.9);
  border: none;
  box-shadow: 0 0 10px rgba(245, 245, 174, 0.5);
}
.servicios {
  background-color: rgba(8, 8, 8, 0.3);
}
.vision {
  background-image: url("@/assets/imagenes3d/cocinaModernaImagen.png");
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center bottom;
  text-align: center;
}
.vis {
  background-color: rgba(22, 22, 22, 0.7);
  padding-top: 20px;
}
.vis p {
  width: 100%;
}
img {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
strong{
  color: rgb(35, 250, 207);
}
strong.unstyled {
  color: inherit;
}
@media screen and (max-width: 768px) {
  p {
    text-align: justify; /* Alineación justificada en dispositivos móviles */
    font-size: 12px; /* Tamaño de letra más pequeño en dispositivos móviles */
  }
  .portada {
    background-image: url("@/assets/imagenes3d/TH·-1800.effectsResult.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    width: 100%;
    height: 400px;
  }
  .vision {
    height: auto;
    width: auto;
  }
  .description {
    background: rgba(0, 22, 22, 0.5);
  }
}
</style>
