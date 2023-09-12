<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="portada col shadow d-flex align-items-center justify-content-center"
      >
        <div class="titulo">
          <h2>Construyendo Futuros en 3D: Tu Visión, Nuestra Realidad</h2>
        </div>
      </div>
    </div>
    <div class="p-5">
      <p class="fs-3">
        Bienvenidos a ConstruModerna: Tu Socio en la Transformación Digital
      </p>

      <p class="fs-3">
        En ConstruModerna, nos apasiona la innovación y la transformación
        digital en el mundo de la construcción y el diseño moderno. Somos
        apasionados por el modelado 3D, el renderizado, la animación 3D, los
        videos de arquitectura 3D, la realidad virtual y los hologramas 3D.
      </p>

      <p class="fs-3">
        Nuestra misión es llevar tus proyectos y visiones arquitectónicas al
        siguiente nivel, utilizando las tecnologías más avanzadas disponibles.
        Creemos que la combinación de la creatividad y la tecnología puede dar
        vida a ideas extraordinarias, y estamos comprometidos a hacer
        precisamente eso para cada uno de nuestros clientes.
      </p>
    </div>
    <div>
        <div class="row">
            <h3>Lo que Hacemos</h3>
            <h4>
              En ConstruModerna, ofrecemos una amplia gama de servicios
              especializados para ayudarte a lograr tus objetivos en el ámbito de la
              construcción y el diseño moderno. Nuestros servicios incluyen:
            </h4>
        </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="card m-3">
            <div class="card-body">
              <h5 class="card-title text-end">Modelado 3D:</h5>
              <p class="card-text text-end">
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
              <h5 class="card-title text-start">Renderizado:</h5>
              <p class="card-text text-start">
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
              <h5 class="card-title text-end">Animación 3D:</h5>
              <p class="card-text text-end">
                Aportamos vida y movimiento a tus diseños, lo que facilita la
                comunicación de conceptos complejos y da vida a tus proyectos.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card m-3">
            <div class="card-body">
              <h5 class="card-title text-start">Hologramas 3D:</h5>
              <p class="card-text text-start">
                Rompemos barreras al ofrecer presentaciones sorprendentes y
                holográficas de tus proyectos.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card m-3">
            <div class="card-body">
              <h5 class="card-title text-end">Realidad Virtual:</h5>
              <p class="card-text text-end">
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
              <h5 class="card-title text-start">Videos de Arquitectura 3D:</h5>
              <p class="card-text text-start">
                Creamos videos cautivadores que ofrecen recorridos virtuales por
                tus diseños, sumergiendo a tus clientes en una experiencia
                inmersiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h4>Nuestra Visión</h4>

      <p>
        En ConstruModerna, nuestra visión es liderar el camino en la integración
        de la tecnología de vanguardia en la industria de la construcción y el
        diseño. Creemos que la creatividad y la innovación deben estar en el
        corazón de cada proyecto, y estamos comprometidos a superar tus
        expectativas en cada paso del camino.
      </p>
    </div>
    <div>
      <p>Únete a Nosotros en el Viaje de la Construcción Moderna</p>

      <p>
        Estamos emocionados de ser tu socio en la construcción moderna y el
        diseño de vanguardia. ¡Únete a nosotros en este emocionante viaje de
        transformación digital y descubre cómo ConstruModerna puede hacer
        realidad tus sueños arquitectónicos!
      </p>
    </div>
    <div class="servicios">
      <ul>
        <li>Modelado 3D de alta precisión.</li>
        <li>Renders fotorealistas de calidad excepcional.</li>
        <li>Animaciones 3D cautivadoras para videojuegos y presentaciones.</li>
        <li>Asesoramiento en visualización arquitectónica.</li>
        <li>Colaboración creativa en proyectos de diseño.</li>
      </ul>
    </div>
    <div class="accion">
      <p>
        ¿Listo para dar vida a tu visión? ¡Nos encantaría trabajar contigo!
        Ponte en contacto hoy mismo para discutir tu proyecto y cómo podemos
        ayudarte a lograr resultados impresionantes. Estamos listos para
        convertir tus ideas en realidad.
      </p>
    </div>
    <div class="contacto">
      <ul>
        <li>Telefono: +57-3224452460</li>
        <li>Correo: Gabrielportu+construmoderna@gmail.com</li>
        <li>Ubicacion: Medellin - Antioquia - Colombia.</li>
      </ul>
    </div>
  </div>
</template>

<script>
import carrouselDos from "@/components/carrouselDos.vue";
export default {
  name: "accion",
  components: {
    carrouselDos,
  },

};
</script>

<style scoped>
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
}
.presentacion p {
  font-size: 30px;
}
.card {
    background-color: rgba(255, 255, 255, 0);
    border: none;
}

</style>