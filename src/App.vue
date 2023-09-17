<template>
  <div class="app">
    <navbar class="navbar"></navbar>
    <router-view class="container-fluid"/>
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
  background: linear-gradient(-45deg, #1b1b1b, #525151, #333333);;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  height: 100%;
}
.navbar{
  position: fixed;
  top: 0;
  z-index: 1000;
}

</style>
