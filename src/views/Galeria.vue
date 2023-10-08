<template>
  <div class="galeria">
    <h1 class="mt-5">Galeria.</h1>
    <div class="row d-flex justify-content-around">
      <div class="col-4" v-for="(item, index) in miGaleria" :key="index">
        <div class="card" style="width: 18rem;">
          <img :src="item.imagen" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{item.body}}</p>
            <button @click="showModal(item)">Mostrar Detalles</button>
          </div>
        </div>
      </div>
    </div>

    <ModalInfo :showModal="modalVisible" :selectedCard="selectedCard" @close="closeModal" />
  
  </div>
</template>

<script>
import ModalInfo from "@/components/ModalInfo.vue";

export default {
name:"galeria",
components: {
    ModalInfo
  },
data() {
  return{
    modalVisible: false, 
    selectedCard: null,
    miGaleria:[
      {
        imagen: require("@/assets/imagenes3d/lovyTerminado.png"),
        title:"Lovy Terminado.",
        body:"Si prefieres utilizar un ciclo for tradicional en el método JavaScript de tu componente, puedes hacerlo de la siguiente manera."
      },
      {
        imagen: require("@/assets/imagenes3d/oficina.png"),
        title:"oficina.",
        body:"Si prefieres utilizar un ciclo for tradicional en el método JavaScript de tu componente, puedes hacerlo de la siguiente manera."
      },
      {
        imagen: require("@/assets/imagenes3d/cocinaModernaImagen.png"),
        title:"cocinaModernaImagen.",
        body:"Si prefieres utilizar un ciclo for tradicional en el método JavaScript de tu componente, puedes hacerlo de la siguiente manera."
      },
    ]
  };
},
methods: {
    showModal(card) {
      this.modalVisible = true;
      this.selectedCard = card;
    },
    closeModal() {
      this.modalVisible = false;
      this.selectedCard = null;
    }
  }
}
</script>

<style scoped>
.card{
  background: rgba(11, 83, 69, 1);
  color: aliceblue;
}
</style>