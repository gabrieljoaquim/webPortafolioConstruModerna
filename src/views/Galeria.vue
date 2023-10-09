<template>
  <div class="galeria">
    <h1 class="mt-5">Galeria.</h1>
    <div class="row">
      <div class="col-md-4 col-sm-12 my-3 d-flex justify-content-around" v-for="(item, index) in miGaleria" :key="index">
        <div class="card" style="width: 25rem;">
          <img :src="item.imagen" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <!-- <p class="card-text">{{item.body}}</p> -->
            <button class="btn btn-primary" @click="showModal(item)">Mostrar Detalles</button>
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
        title:"Lovy.",
        body:"Si prefieres utilizar un ciclo for tradicional en el método JavaScript de tu componente, puedes hacerlo de la siguiente manera."
      },
      {
        imagen: require("@/assets/imagenes3d/oficina.png"),
        title:"Oficina.",
        body:"Si prefieres utilizar un ciclo for tradicional en el método JavaScript de tu componente, puedes hacerlo de la siguiente manera."
      },
      {
        imagen: require("@/assets/imagenes3d/cocinaModernaImagen.png"),
        title:"Cocina.",
        body:"Si prefieres utilizar un ciclo for tradicional en el método JavaScript de tu componente, puedes hacerlo de la siguiente manera."
      },
      {
        imagen: require("@/assets/img/Ap2.jpg"),
        title:"Apartamento 75 mts.",
        body:"Este emocionante proyecto surgió de la necesidad de un cliente que deseaba visualizar cómo se vería su apartamento, adquirido en su fase de obra gris, antes de tomar decisiones cruciales en cuanto a su diseño y terminaciones. En particular, el cliente tenía un gran interés en obtener una vista previa de la cerámica que tenía en mente para el revestimiento y en elegir el color perfecto para los muebles de su cocina. Nuestra misión fue convertir su visión en una representación realista y detallada, brindándole la confianza necesaria para tomar decisiones informadas y garantizar que su espacio se convirtiera en el lugar de sus sueños."
      },
      {
        imagen: require("@/assets/imagenes3d/iglesia1.png"),
        title:"Esenario.",
        body:"Este emocionante proyecto nació de las necesidades de un cliente que buscaba visualizar el resultado final de la nueva iglesia que tenía en mente, antes de embarcarse en la toma de decisiones clave relacionadas con su diseño y acabados. Específicamente, el cliente estaba particularmente interesado en obtener una vista previa del techo, que requería reparaciones, y en seleccionar cuidadosamente los colores para los muebles y los pisos. Nuestra misión consistió en materializar su visión, ofreciéndole una representación detallada y realista que le brindara la confianza necesaria para tomar decisiones bien fundamentadas y asegurarse de que su espacio se convirtiera en el lugar que siempre había imaginado.",
        video: require("@/assets/img/iglesia3.mp4")
      },
      {
        imagen: require("@/assets/img/gana1.png"),
        images: [
          require("@/assets/img/gana1.png"),
          require("@/assets/img/gana3.jpg"),
          require("@/assets/img/gana2.jpg"),
          require("@/assets/img/gana4.jpeg"),
          ],
        title:"Gana.",
        body:"Este emocionante proyecto nació de las necesidades de un cliente que buscaba visualizar el resultado final de la nueva iglesia que tenía en mente, antes de embarcarse en la toma de decisiones clave relacionadas con su diseño y acabados. Específicamente, el cliente estaba particularmente interesado en obtener una vista previa del techo, que requería reparaciones, y en seleccionar cuidadosamente los colores para los muebles y los pisos. Nuestra misión consistió en materializar su visión, ofreciéndole una representación detallada y realista que le brindara la confianza necesaria para tomar decisiones bien fundamentadas y asegurarse de que su espacio se convirtiera en el lugar que siempre había imaginado."
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