<template>
  <div class="home container-fluid">
    <!-- <presentacion/> -->

    <div class="row">
      <div
        class="portada col shadow d-flex align-items-center justify-content-center"
      >
        <div class="titulo p-4 rounded">
          <h2>Construyendo Futuros en 3D: Tu Visión, Nuestra Realidad</h2>
        </div>
      </div>
    </div>
    <div class="row pt-3 pt-md-5">
      <p class="fs-2 fs-md-3">
        Bienvenidos a ConstruModerna: Tu Socio en la Transformación Digital
      </p>

      <p class="fs-4">
        En ConstruModerna, nos apasiona la innovación y la transformación
        digital en el mundo de la construcción y el diseño moderno. Somos
        apasionados por el modelado 3D, el renderizado, la animación 3D, los
        videos de arquitectura 3D, la realidad virtual y los hologramas 3D.
      </p>

      <p class="fs-4">
        Nuestra misión es llevar tus proyectos y visiones arquitectónicas al
        siguiente nivel, utilizando las tecnologías más avanzadas disponibles.
        Creemos que la combinación de la creatividad y la tecnología puede dar
        vida a ideas extraordinarias, y estamos comprometidos a hacer
        precisamente eso para cada uno de nuestros clientes.
      </p>
    </div>
    <div class="servicios shadow p-1">
        <div class="row">
            <p class="text-center fs-2 mb-3">Lo que Hacemos</p>
            <p class="fs-5 p-3">
              En ConstruModerna, ofrecemos una amplia gama de servicios
              especializados para ayudarte a lograr tus objetivos en el ámbito de la
              construcción y el diseño moderno. Nuestros servicios incluyen:
            </p>
        </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card m-3">
            <div class="card-body">
              <h5 class="card-title text-end fs-4">Modelado 3D:</h5>
              <p class="card-text text-end fs-6">
                Transformamos tus conceptos en modelos tridimensionales
                detallados y realistas que te permiten visualizar y perfeccionar
                tu diseño antes de la construcción.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card m-3">
            <div class="card-body">
              <h5 class="card-title text-start fs-4">Renderizado:</h5>
              <p class="card-text text-start fs-6">
                Creamos imágenes fotorrealistas y videos que muestran tu
                proyecto en su máxima expresión, permitiéndote presentarlo de
                manera efectiva a tus clientes y colaboradores.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card m-3">
            <div class="card-body">
              <h5 class="card-title text-end fs-4">Animación 3D:</h5>
              <p class="card-text text-end fs-6">
                Aportamos vida y movimiento a tus diseños, lo que facilita la
                comunicación de conceptos complejos y da vida a tus proyectos.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card m-3">
            <div class="card-body">
              <h5 class="card-title text-start fs-4">Hologramas 3D:</h5>
              <p class="card-text text-start fs-6">
                Rompemos barreras al ofrecer presentaciones sorprendentes y
                holográficas de tus proyectos.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card m-3">
            <div class="card-body">
              <h5 class="card-title text-end fs-4">Realidad Virtual:</h5>
              <p class="card-text text-end fs-6">
                Te llevamos al futuro con experiencias de realidad virtual que
                permiten a tus clientes explorar tus diseños como si estuvieran
                realmente allí.
              </p>
            </div>
          </div>
        </div>   
        <div class="col-sm-6">
          <div class="card m-3">
            <div class="card-body">
              <h5 class="card-title text-start fs-4">Videos de Arquitectura 3D:</h5>
              <p class="card-text text-start fs-6">
                Creamos videos cautivadores que ofrecen recorridos virtuales por
                tus diseños, sumergiendo a tus clientes en una experiencia
                inmersiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="vision row mt-5 p-2 shadow d-flex align-items-center justify-content-center">
      <div class="vis">
        <h4 class="col-2 w-100 fs-2">Nuestra Visión</h4>

        <p class="col-10 p-3 lh-lg fs-3">
          En ConstruModerna, nuestra visión es liderar el camino en la integración
          de la tecnología de vanguardia en la industria de la construcción y el
          diseño. Creemos que la creatividad y la innovación deben estar en el
          corazón de cada proyecto, y estamos comprometidos a superar tus
          expectativas en cada paso del camino.
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
    <contacto/>
    <carrouselMenu/>
  </div>
</template>

<script>
// @ is an alias to /src
import presentacion from '@/components/presentacion.vue'
import carrouselMenu from '@/components/carrouselNavbar.vue'
import contacto from '@/components/contacto.vue'

export default {
  name: 'HomeView',
  components: {
    presentacion,
    carrouselMenu,
    contacto
  }
}
</script>

<style scoped>
.home {
  align-content: center;
  width: 100vw;
}
img {
  margin-top: 30px;
}

.container-fluid{
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
  background-color: rgba(22, 22, 22, 0.3);
}
.presentacion p {
  font-size: 30px;
}
.card {
    background: rgba(22, 22, 22, 0.95);
    border: none;
}
.servicios {
  background-color: rgba(8, 8, 8, 0.3);
}
.vision{
  background-image: url("@/assets/imagenes3d/cocinaModernaImagen.png");
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-position: center bottom;
  text-align: center;
}
.vis{
  background-color: rgba(22, 22, 22, 0.7);
  padding-top: 20px;
}
.vis p{
  width: 100%;
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
              .vision{
                height: auto;
                width: auto;
              }
         }

</style>
