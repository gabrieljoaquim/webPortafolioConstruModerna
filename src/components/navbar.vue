<template>

  <div class="navegador">

    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="">
          <img class="logo d-none d-md-block position-relative start-50" src="@/assets/logo.png" alt="logo">
          <h2 class="navbar-brand">ConstruModerna.</h2>
        </span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="mr-3">Presentacion</router-link>  
            </li>
            <li class="nav-item">  
              <router-link to="/proyectos3d/cocinaModerna" class="mr-3">Proyectos 3D</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/proyectos/landingPage" class="mr-3">Proyectos Vue.js</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="contacto">
      <a class="btn-wsp" href="https://api.whatsapp.com/send?phone=573224452460">
        <img class="whatssap" src="@/assets/whatssap.png" alt="contacto">
      </a>
    </div>

  </div>

</template>

<script>
export default {
  name: 'navbar'

}
</script>

<style>
.logo {
  width: 50px;
}

.btn-wsp {
  position: fixed;
  width: 50px;
  height: 50px;
  line-height: 50px;
  top: 30px;
  left: 30px;
  border-radius: 50px;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.3);
}

.btn-wsp:hover {
  background: #fff;
}
.whatssap {
  width: 50px;
}
</style>