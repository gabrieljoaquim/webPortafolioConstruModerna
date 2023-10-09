<template>
    <div class="modal pt-5 mt-5" v-if="showModal">
      <div class="modal-content mb-5 mt-5">
        <div class="row d-flex justify-content-evenly"  v-if="selectedCard.images">
            <div v-for="(image, imgIndex) in selectedCard.images" :key="imgIndex"  class="col-md-6 col-sm-10">
                  <img class="shadow-sm mt-5" :src="image" alt=""  style="width: 25rem;">
            </div>
        </div>
        <div class="row d-flex justify-content-evenly"  v-else-if="selectedCard.imagen">          
            <div class="col-md-6 col-sm-10">
              <img :src="selectedCard.imagen" alt="">
            </div>
        </div>
        <h2>{{ selectedCard.title }}</h2>
        <p>{{ selectedCard.body }}</p>
        <div class="row d-flex justify-content-center">
          <div class="col-md-6 col-sm-10">
            <video v-if="selectedCard.video" :src="selectedCard.video" controls style="width: 30rem;"></video>
          </div>
        </div>
        <button class="btn btn-warning" @click="closeModal">Cerrar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ModalInfo",
    props: {
      showModal: Boolean,
      selectedCard: Object
    },
    methods: {
      closeModal() {
        this.$emit("close");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos CSS para el modal */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .modal-content {
    background-color: rgba(199, 249, 204, 1);
    padding: 20px;
    margin-top: 25px;
    border-radius: 5px;
    color: black;
  }
  .modal-content img{
    width: 500px;
  }
 
  </style>
