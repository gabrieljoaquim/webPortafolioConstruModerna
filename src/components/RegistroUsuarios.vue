<template>
    <div>
      <h2>Registro de usuarios</h2>
      <form @submit.prevent="registrarUsuario">
        <label>
          Nombre:
          <input type="text" v-model="nombre" required>
        </label>
        <label>
          Correo electrónico:
          <input type="email" v-model="correo" required>
        </label>
        <button type="submit">Registrar</button>
      </form>
      <p v-if="usuarioRegistrado">Usuario registrado correctamente.</p>
      <p v-if="errorRegistro">Ha ocurrido un error al registrar el usuario.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        correo: '',
        usuarioRegistrado: false,
        errorRegistro: false
      }
    },
    methods: {
      async registrarUsuario() {
        try {
          // Aquí iría el código para enviar los datos del usuario al servidor
          // En este ejemplo, simplemente marcamos el usuario como registrado
            const db = firebase.firestore();
            const usuario = {
            nombre: this.nombre,
            correo: this.correo,
            fechaRegistro: new Date()
            };
            await db.collection('usuarios').add(usuario);
          this.usuarioRegistrado = true;
          this.errorRegistro = false;
        } catch (error) {
          console.error(error);
          this.usuarioRegistrado = false;
          this.errorRegistro = true;
        }
      }
    }
  }
  </script>
  
  <style>
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 10px;
  }
  
  input, button {
    padding: 5px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    margin-top: 10px;
  }
  </style>