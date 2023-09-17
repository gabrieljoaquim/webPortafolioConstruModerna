<template>
  
    <nav class="navbar navbar-expand-md navbar-dark position-fixed">
      <div class="container-fluid">
        <span class="">
          <h2 class="navbar-brand fs-2">ConstruModerna.</h2>
        </span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Presentacion</router-link>  
            </li>
            <li class="nav-item">  
              <router-link class="nav-link" to="/proyectos3d/cocinaModerna">Proyectos 3D</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/proyectos/landingPage">Proyectos Vue.js</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/registro">Registro</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="whatLink">
      <a class="btn-wsp" href="https://api.whatsapp.com/send?phone=573224452460">
        <img class="whatssap" src="@/assets/whatssap.png" alt="contacto">
      </a>
    </div>

</template>

<script>
export default {
  name: 'navbar'

}
</script>

<style scoped>
nav {
  background-color: rgba(22, 22, 22, 0.95);
  width: 100%;
}
.btn-wsp {
  position: fixed;
  width: 80px;
  height: 80px;
  line-height: 50px;
  bottom: 30px;
  right: 30px;
  border-radius: 50px;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.5);
}

.btn-wsp:hover {
  background: #fff;
}
.whatssap {
  width: 80px;
}
.whatLink{ 
  z-index: 1000;
}
</style>