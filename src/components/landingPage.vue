<template>
  <div class="container-fluid">
    <!-- navegacion -->
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img
            src="@/assets/img/logogabriel.png"
            alt="logo"
            style="width: 20%"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nosotros</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- cuerpo -->
    <header class="main-header">
      <div class="backgarund-overlay text-white py-5">
        <div class="container">
          <div class="row">
            <div
              class="col-md-6 text-center jusitfy-content-center align-self-center"
            >
              <h1>CONSTRUCCIONES GJ</h1>
              <p>
                Somos un grupo de trabajadores independientes de la costruccion.
              </p>
              <a href="#" class="btn btn-outline-secondary btn-lg text-white">
                Saver Mas
              </a>
            </div>
            <div class="col-md-6">
              <img
                src="@/assets/img/1afb8b6e9b86a00b8cad2d2830e2dfb0.jpg"
                alt="muestra"
                width="400px"
                class="img-fluid d-none d-sm-block"
              />
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- newsletter -->
    <section class="bg-dark text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Ingrce su nombre"
            />
          </div>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control form-control-lg"
              placeholder="Ingrce su email"
            />
          </div>
          <div class="col-md-4">
            <button class="btn btn-primary btn-lg btn-block">
              Suscribete.
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- caracteristicas -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="card text-center border-primary">
              <div class="card-body">
                <h3>Albañileria</h3>
                <p>
                  Contamos con mas de 30 años de experiencia en la parte te obra
                  gris y obra blanca, con un exelente desempeño y terminaciones
                  1A.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center bg-primary text-white">
              <div class="card-body">
                <h3>Plomeria y Umedades</h3>
                <p>
                  trabajamos con todo tipo de tuverias tanto de aguas blancas
                  como aguas negras, destaqueos, y correcion de umedades
                  causadas por tuverias o por lluvias.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center border-primary">
              <div class="card-body">
                <h3>Electricidad</h3>
                <p>
                  Contamos con un equipo tecnico en electricidad, circuitos de
                  camaras, cercos electricos, purtas electricas, tanto comercial
                  como recidencial.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card text-center bg-primary text-white">
              <div class="card-body">
                <h3>Cerragerias</h3>
                <p>
                  Trabajamos tanto la soldadura de arco electrico para la
                  fabricacion de puertas, portones, ventanas, cercos y mas, como
                  la fabricacion he instalacion de puertas y ventanas en
                  aluminio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- abaut -->
    <section class="bg-light text-center">
      <div class="container">
        <div class="row">
          <div class="ml-5">
            <h3>¿Porque hacer su reforma con nosotros?</h3>
            <p>
              Por que, somos un grupo de personas con alto grado de
              responsabilidad y pertenencia, contamos con mas de 15 trabajadores
              independientes todos especialistas en algun tema y nos apoyamos
              entre si para que el conosimiento que alguno no tenga referente a
              un tema el otro lo pueda ayudar y asi cumplir a termino y
              satisfactoriamente todos los pryectos en los que tabajamos, somos
              perzonas onestas responsables y sobretodo trabajadoras con ganas
              de hacer el mejor exfuerso para que tu reforma sea de la mejor
              calidad.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- acordion -->
    <section class="container text-center p-5">
      <div class="row">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
              Transforma tu hogar en un oasis de ensueño con nuestro enfoque personalizado:
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>Convierte tu casa en el hogar de tus sueños con nuestra empresa de reformas. Nuestro enfoque personalizado garantiza que cada aspecto de tu proyecto sea cuidadosamente planificado y ejecutado según tus necesidades y preferencias. Desde el diseño hasta la selección de materiales y la mano de obra experta, nos aseguramos de que cada detalle sea perfecto para crear un oasis único y personalizado que refleje tu estilo y personalidad.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
              Experiencia y calidad inigualables respaldadas por nuestros clientes satisfechos: 
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>Nuestra empresa cuenta con una amplia experiencia en el sector de las reformas y hemos ganado la confianza y satisfacción de numerosos clientes. Nuestro historial de proyectos exitosos y testimonios positivos hablan por sí mismos. Nuestro equipo de profesionales altamente capacitados y especializados se esfuerza por brindar un servicio de calidad excepcional, utilizando los mejores materiales y técnicas de construcción. Confía en nosotros para transformar tu casa en un espacio impresionante y funcional que superará tus expectativas.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
              Comodidad y tranquilidad durante todo el proceso de reforma:
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p> Sabemos que las reformas en el hogar pueden ser estresantes, por lo que nos aseguramos de que el proceso sea lo más fluido y sin complicaciones posible. Nuestro equipo se encargará de todos los aspectos de la reforma, desde la planificación y el diseño hasta la gestión del proyecto y la coordinación de los diferentes gremios. Te mantendremos informado en cada etapa y nos comprometemos a cumplir con los plazos acordados. Con nuestra empresa, podrás disfrutar de la comodidad y tranquilidad de saber que tu hogar está en manos expertas y que el resultado final superará tus expectativas.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- equipos -->
    <section class="team text-center">
      <div class="container p-5">
        <h1 class="text-white">Equipo</h1>
        <p class="text-white">
            "Transformando espacios con maestría y dedicación, construimos más que edificios, creamos hogares llenos de vida. Nuestra experiencia, compromiso y atención al detalle garantizan resultados excepcionales que perduran en el tiempo. Confía en nosotros para construir tus sueños, superando tus expectativas en cada proyecto."
        </p>
        <div class="row">
          <!-- miembro -->
          <div class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <img
                  src="@/assets/img/plomeria.jpg"
                  class="img-fluid raunded-circle w-80"
                  alt="img"
                />
                <h3>Plomería:</h3>
                <p>
                    Nuestros expertos en plomería están capacitados para solucionar cualquier problema relacionado con tuberías, sistemas de agua y drenaje. Su habilidad y conocimiento aseguran resultados duraderos y eficientes, brindando tranquilidad a nuestros clientes.
                </p>
                <div class="d-flex flex-row justify-content-center">
                  <div class="p-4">
                    <a
                      href="https://www.facebook.com/gabrieleduardo.joaquinspadafora"
                      target="_blank"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <img
                  src="@/assets/img/albañileria.jpg"
                  class="img-fluid raunded-circle w-80"
                  alt="img"
                />
                <h3>Albañilería:</h3>
                <p>
                    Los albañiles de nuestra empresa son verdaderos artesanos en la construcción. Su destreza y dedicación se reflejan en cada detalle de sus obras, ya sea en la construcción de muros, pisos o estructuras complejas. Su compromiso con la calidad asegura resultados sólidos y estéticamente impresionantes.
                </p>
                <div class="d-flex flex-row justify-content-center">
                  <div class="p-4">
                    <a
                      href="https://www.facebook.com/gabrieleduardo.joaquinspadafora"
                      target="_blank"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <img
                  src="@/assets/img/cerrajeria.jpg"
                  class="img-fluid raunded-circle w-80"
                  alt="img"
                />
                <h3>Cerrajería:</h3>
                <p>
                    Nuestros cerrajeros son especialistas en seguridad y acceso. Desde la instalación de cerraduras de alta tecnología hasta la reparación y mantenimiento de sistemas de seguridad, su experiencia y conocimiento garantizan la protección de propiedades y la tranquilidad de nuestros clientes.
                </p>
                <div class="d-flex flex-row justify-content-center">
                  <div class="p-4">
                    <a
                      href="https://www.facebook.com/gabrieleduardo.joaquinspadafora"
                      target="_blank"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <img
                  src="@/assets/img/pisosPVC.jpg"
                  class="img-fluid raunded-circle w-80"
                  alt="img"
                />
                <h3>Pisos de PVC:</h3>
                <p>
                    Nuestro equipo especializado en pisos de PVC ofrece soluciones modernas y versátiles para revestir tus espacios. Con una amplia gama de diseños y colores, nuestros expertos en instalación aseguran un acabado impecable y duradero, brindando comodidad, resistencia y estilo a tu hogar o negocio.
                </p>
                <div class="d-flex flex-row justify-content-center">
                  <div class="p-4">
                    <a
                      href="https://www.facebook.com/gabrieleduardo.joaquinspadafora"
                      target="_blank"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div class="p-4">
                    <a href="#" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "landingPage",
};
</script>

<style scoped>
.container-fluid {
  margin-top: 10px;
  box-shadow: 0,0,10,black;
}
.navbar {
  background: rgba(39, 60, 117, 0.7);
  box-shadow: 2px 2px 5px black;
}

.navbar .nav-item .nav-link {
  color: #fff;
}
.main-header {
  position: relative;
  background-image: url(@/assets/img/fondo_plano.jpg);
  background-size: cover;
  min-height: 700px;
}
.backgarund-overlay {
  position: absolute;
  background: rgba(47, 54, 64, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
header .img-fluid {
  box-shadow: 4px 4px 7px black;
}
.team {
  background: rgba(39, 60, 117, 0.7);
}
</style>