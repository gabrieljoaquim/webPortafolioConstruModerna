<template>
  <div>
    <h1>Reserva de motociclistas</h1>
    <div class="time-horas">
      <div v-for="(hora, index) in horas" :key="index" :class="{ 'time-hora': true, 'available': hora.available, 'reserved': !hora.available }" @click="reserve(index)">
        {{ horas }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'HelloWorld',
  data() {
    return {
      horas: []
    }
  },
  methods: {
    reserve(index) {
      if (this.horas[index].available) {
        this.horas[index].available = false
      } else {
        this.horas[index].available = true
      }
    }
  },
  mounted() {
    // Initialize time slots
      let horaInicio = moment().hour(8).minute(0); // hora de inicio
      let horaFin = moment().hour(20).minute(0); // hora de fin
      let delta = moment().duration(30, 'minutes'); // intervalo de 30 minutos

      while (horaInicio <= horaFin) {
        this.horas.push(horaInicio.format('HH:mm')); // agregar hora al arreglo
        horaInicio.add(delta); // avanzar en el intervalo de tiempo
      }
  }
}
</script>

<style>
.time-slots {
  display: flex;
  flex-wrap: wrap;
}

.time-slot {
  width: 25%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  text-align: center;
  cursor: pointer;
}

.available {
  background-color: green;
  color: white;
}

.reserved {
  background-color: red;
  color: white;
  cursor: not-allowed;
}
</style>