<template>
  <div class="galeria">
    <h1 class="mt-5">Galería</h1>
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
name:"galería",
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
        title:"Lobby",
        body:"Este emocionante proyecto surgió de la necesidad de un cliente que deseaba visualizar cómo se vería el lobby de su edificio, que aún se encontraba en una fase de diseño inicial. El cliente tenía una visión clara de un espacio elegante y acogedor que reflejara la sofisticación y la hospitalidad de su establecimiento. Nuestra misión consistía en convertir esa visión en una representación realista y detallada del lobby, brindándole la confianza necesaria para tomar decisiones informadas y garantizar que el área de recepción y espera se convirtiera en un punto de encuentro inolvidable para los visitantes."
      },
      {
        imagen: require("@/assets/imagenes3d/oficina.png"),
        title:"Oficina",
        body:"Este proyecto surgió de la necesidad de nuestro cliente de crear un espacio de oficina funcional y atractivo. Trabajando en estrecha colaboración con nuestro cliente, logramos transformar su oficina en un espacio moderno y funcional. Nuestra misión era convertir su visión de un entorno de trabajo inspirador en una realidad palpable. Optimizamos la disposición del mobiliario y la iluminación para mejorar la eficiencia y la comodidad, seleccionamos colores y elementos de diseño que reflejaban la identidad de la empresa y creamos un ambiente agradable para el equipo. El resultado final superó las expectativas del cliente, convirtiendo la oficina en un lugar que inspira a los empleados y atrae a clientes y colaboradores, contribuyendo al éxito empresarial."
      },
      {
        imagen: require("@/assets/imagenes3d/cocinaModernaImagen.png"),
        title:"Cocina",
        body:"Nuestro proyecto de diseño de una cocina moderna con baldosas hexagonales y mármol se originó a partir de la visión del cliente de crear un espacio culinario que fusionara la funcionalidad con la elegancia. Trabajamos en estrecha colaboración para comprender sus necesidades y preferencias, y nos enfocamos en la elección de baldosas hexagonales que añadieran un toque de estilo único y en el mármol que aportara un lujo sutil. El resultado fue una cocina moderna, con un diseño sofisticado que cumplió con creces las expectativas del cliente, creando un ambiente que combina la belleza y la eficiencia culinaria en perfecta armonía."
      },
      {
        imagen: require("@/assets/img/Ap2.jpg"),
        title:"Apartamento 75m",
        body:"Este emocionante proyecto surgió de la necesidad de un cliente que deseaba visualizar cómo se vería su apartamento, adquirido en su fase de obra gris, antes de tomar decisiones cruciales en cuanto a su diseño y terminaciones. En particular, el cliente tenía un gran interés en obtener una vista previa de la cerámica que tenía en mente para el revestimiento y en elegir el color perfecto para los muebles de su cocina. Nuestra misión fue convertir su visión en una representación realista y detallada, brindándole la confianza necesaria para tomar decisiones informadas y garantizar que su espacio se convirtiera en el lugar de sus sueños."
      },
      {
        imagen: require("@/assets/imagenes3d/iglesia1.png"),
        title:"Ecenario",
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
        title:"Taquilla",
        body:"Nuestro proyecto de diseño para una taquilla de loterías surgió de la necesidad de nuestro cliente de exhibir de manera atractiva la perfilería de aluminio y la combinación de colores distintiva de su empresa. Trabajando en estrecha colaboración, creamos una taquilla que no solo cumplió con su objetivo funcional, sino que también se convirtió en un elemento destacado en su establecimiento. El diseño realzó la identidad de la empresa, y la perfilería de aluminio se integró perfectamente en la estética general, logrando una combinación de forma y función que resaltó la imagen de la marca y ofreció una experiencia atractiva a los clientes."
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