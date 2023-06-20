<template>
  <nav class="navbar navbar-expand-lg bg-indigo-700 fixed-top">
    <div class="container-fluid d-flex flex-row-reverse">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo01">
        <a class="text-indigo-100 d-flex justify-content-center align-items-center" href="#">
          <img class="logo" src="./assets/logo.png" alt="">
          <h4>Construmoderna</h4>
        </a>
        <div class="navbar-nav">
          <router-link to="/" class="mr-3">Presentacion</router-link>
          <router-link to="/proyecto3d/cocinaModerna" class="mr-3">Proyectos 3D</router-link>
          <router-link to="/proyectos/landingPage" class="mr-3">Proyectos Vue.js</router-link>
        </div>
      </div>
     </div>
  </nav>

    <router-view class="vista"/>

    <section>
      <br/>
    </section>

</template>


<style>
#app {
  background: linear-gradient(-45deg, #ffeb3b, #74efff, #9c27b0);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1b1b1b;
}

nav {
  background-color: var(--bs-cyan-500);
  padding: 25px;
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);
}

nav a {
  font-weight: bold;
  color: #a8c8e7;
}

nav a.router-link-exact-active {
  color: #5eadf8;
}

.logo{
  width: 100px;
}

.vista {
  margin-top: 115px;
}
</style>
