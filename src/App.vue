<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
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
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </div>
     </div>
  </nav>
  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #a8c8e7;
}

nav a.router-link-exact-active {
  color: #4268b9;
}

.logo{
  width: 100px;
}
</style>
