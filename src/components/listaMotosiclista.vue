<template>
    <div>
      <h1>Reserva de motociclistas</h1>
      <div class="time-slots">
        <div v-for="(slot, index) in timeSlots" :key="index" :class="{ 'time-slot': true, 'available': slot.cantidadDisponible > 0, 'reserved': slot.cantidadDisponible === 0 }" @click="reserve(index)">
          {{ slot.horaInicio }} - {{ slot.horaFin }}
          <p>{{ slot.cantidadDisponible }} motociclistas disponibles</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  class IntervaloTiempo {
    constructor(horaInicio, horaFin, cantidadTotalMotociclistas) {
      this.horaInicio = horaInicio;
      this.horaFin = horaFin;
      this.cantidadTotalMotociclistas = cantidadTotalMotociclistas;
      this.usuarios = [];
    }
  
    get cantidadDisponible() {
      return this.cantidadTotalMotociclistas - this.usuarios.length;
    }
  
    agregarUsuario(usuario) {
      this.usuarios.push(usuario);
    }
  
    quitarUsuario(usuario) {
      const index = this.usuarios.indexOf(usuario);
      if (index !== -1) {
        this.usuarios.splice(index, 1);
      }
    }
  }
  
  export default {
    name:'listaMotosiclista',
    data() {
      return {
        timeSlots: []
      }
    },
    methods: {
      reserve(index) {
        const slot = this.timeSlots[index];
        if (slot.cantidadDisponible > 0) {
          const usuario = prompt('Por favor ingrese su nombre:');
          if (usuario) {
            slot.agregarUsuario(usuario);
          }
        }
      }
    },
    mounted() {
      // Initialize time slots
      for (let i = 0; i < 12; i++) {
        let horaInicio = i < 12 ? `${i + 8}:00 am` : `${i - 12 + 8}:00 pm`;
        let horaFin = i < 12 ? `${i + 8}:30 am` : `${i - 12 + 8}:30 pm`;
        const intervaloTiempo = new IntervaloTiempo(horaInicio, horaFin, 8);
        this.timeSlots.push(intervaloTiempo);
      }
        // Initialize users
        const usuarios = ['Usuario 1', 'Usuario 2', 'Usuario 3', 'Usuario 4', 'Usuario 5', 'Usuario 6', 'Usuario 7', 'Usuario 8', 'Usuario 9', 'Usuario 10'];
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