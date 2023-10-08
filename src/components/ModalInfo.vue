<template>
    <div class="modal" v-if="showModal">
      <div class="modal-content">
        <div class="row">
            <div class="col-md-6 col-sm-10">
                <img :src="selectedCard.imagen" alt="">
            </div>
        </div>
        <h2>{{ selectedCard.title }}</h2>
        <p>{{ selectedCard.body }}</p>
        <button @click="closeModal">Cerrar</button>
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
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    color: black;
  }
  .modal-content img{
    width: 500px;
  }
  </style>
