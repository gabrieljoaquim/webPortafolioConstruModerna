<template>
  <div class="carpinteria">
    <servicios id="servicios" class="col-sm-12 col-md-3 position-fixed"/>
    <div class="row my-3 justify-content-around">

      <div class="col-8">
        <!-- Encabezado -->
        <div class="img d-flex align-items-center justify-content-center">
          <h1>¡Bienvenidos a la seccion de Carpintería!</h1>
        </div>

        <!-- Introducción -->
        <p>
          Si buscas la combinación perfecta de habilidad artesanal y diseño
          moderno, has llegado al lugar adecuado. Soy un carpintero con 5 años
          de experiencia en la creación de muebles y proyectos de carpintería
          personalizados. Mi pasión por la madera y mi compromiso con la calidad
          se reflejan en cada pieza que creo.
        </p>

        <!-- Nuestros Servicios -->
        <h2>Nuestros Servicios de Carpinteria en ConstruModerna.</h2>
        <ul>
          <li>
            <strong>Muebles a medida:</strong> Desde mesas y sillas hasta
            armarios y camas, diseñamos y construimos muebles que se adaptan
            perfectamente a tu espacio y estilo.
          </li>
          <li>
            <strong>Restauración de muebles:</strong> ¿Tienes muebles antiguos
            que necesitan una segunda vida? Con nuestra experiencia en
            restauración, podemos devolverles su esplendor original.
          </li>
          <li>
            <strong>Carpintería de exteriores:</strong> Desde pérgolas hasta
            terrazas de madera, creamos espacios al aire libre hermosos y
            funcionales.
          </li>
          <li>
            <strong>Reparaciones y mantenimiento:</strong> Si tienes muebles o
            estructuras dañadas, estamos aquí para reparar y mantener tu
            inversión en madera.
          </li>
        </ul>

        <!-- Nuestra Filosofía -->
        <h2>Nuestra Filosofía</h2>
        <p>
          En sector de Carpintería, creemos en la calidad, la atención al
          detalle y la satisfacción del cliente. Cada proyecto es único, y
          trabajamos estrechamente contigo para comprender tus necesidades y
          visiones. Utilizamos las mejores maderas y técnicas de carpintería
          para garantizar que cada pieza que creamos sea duradera y hermosa.
        </p>

        <!-- Galería de Proyectos -->
        <h2>Galería de Proyectos</h2>
        <p>
          En nuestro sitio web, te ofrecemos una galería de proyectos donde
          podrás explorar ejemplos de nuestros trabajos anteriores. Desde
          diseños modernos hasta piezas de estilo clásico, estamos seguros de
          que encontrarás inspiración para tu próximo proyecto. Además, te
          brindamos la posibilidad de visualizar de manera virtual cómo lucirá
          tu proyecto, lo que te ayudará a tomar decisiones más informadas
          acerca del acabado final. Tu visión se convierte en una realidad
          tangible con nuestra asistencia.
        </p>

        <!-- Contáctanos -->
        <h2>Contáctanos</h2>
        <p>
          Si estás listo para llevar a cabo tu proyecto de carpintería o
          simplemente quieres discutir una idea, no dudes en ponerte en contacto
          con nosotros. Estamos aquí para hacer tus sueños de madera realidad.
        </p>

        <!-- Agradecimiento -->
        <p>
          Gracias por visitar construmoderna. Esperamos tener la oportunidad de
          trabajar contigo y crear piezas de madera que superen tus
          expectativas.
        </p>

        <contacto />
      </div>
    </div>
  </div>
</template>

<script>
import contacto from "@/components/contacto.vue";
import servicios from "@/components/servicios.vue";

export default {
  name: "Electricidad",
  components: {
    contacto,
    servicios,
  },
};
</script>

<style scoped>
.row {
  padding-top: 10vh;
  padding-bottom: 10vh;
}

.container {
  margin: 0 auto; /* Centra el contenido en pantallas grandes */
  padding: 20px; /* Espaciado interior general */
}
.img {
  background-image: url("@/assets/img/MaderaPared.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
}

h1,
h2 {
  text-align: center; /* Centra los títulos */
}

p {
  font-size: 16px; /* Tamaño de fuente predeterminado para párrafos */
  line-height: 1.5; /* Espaciado entre líneas */
}

ul {
  list-style: none; /* Elimina viñetas de las listas */
  padding: 0; /* Elimina el relleno predeterminado de las listas */
}
li {
  padding-bottom: 10px;
  color: darkgray;
}
li strong {
  color: rgb(255, 255, 255);
}

/* Ajustes para dispositivos móviles */
@media screen and (max-width: 767px) {
  .container {
    padding: 10px; /* Reducción del espaciado interior en dispositivos móviles */
  }
  .img {
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: center;
    width: 100%;
    height: 400px;
  }
  p {
    font-size: 14px; /* Reducción del tamaño de fuente para párrafos en dispositivos móviles */
  }
  #servicios{
    margin-top: 50px;
  }
}
</style>
