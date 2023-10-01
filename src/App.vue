<template>
  <div class="app">
    <navbar class="navbar"></navbar>
    <router-view class="container"/>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue"

export default{
  name: "Principal",
  components: {
    navbar,
  }
}

</script>

<style>
.app {
  /* background: linear-gradient(-45deg, #1b1b1b, #525151, #333333);; */
  background-color: #1f1f1f; /*Fondo oscuro*/
  color: #ffffff; /* Texto blanco */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: white; */
  height: 100%;
  padding-bottom: 10vh;
}
.container {
  margin: 20px; /* Margen para separar elementos del fondo */
  padding: 20px; /* Espaciado interno para separar contenido */
  background: linear-gradient(-45deg, #1b1b1b, #525151, #333333);
  border-radius: 5px; /* Bordes redondeados para los contenedores */
  box-shadow: inset 0 0 10px rgba(255, 255, 0, 0.5);
}
.navbar{
  position: fixed;
  top: 0;
  z-index: 1000;
}
a:hover,
button:hover {
  cursor: pointer;
}

</style>
