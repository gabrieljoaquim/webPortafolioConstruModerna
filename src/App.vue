<template>
  <div class="app">
    <navbar></navbar>
    <carrouselMenu/>

    <router-view class="vista"/>

    <section>
      <br/>
    </section>
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue"
import carrouselMenu from "@/components/carrouselNavbar.vue"

export default{
  name: "Principal",
  components: {
    navbar,
    carrouselMenu
  }


}

</script>

<style>
.app {
  background: linear-gradient(-45deg, #333333, #999999, #666666);;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1b1b1b;
  height: 100%;
}
</style>
