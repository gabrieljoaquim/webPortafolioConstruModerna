<template>
  <div class="container">
    <h3 class="m-3">Nueva Lista</h3>
    <form class="row g-3 border border-3 rounded p-3">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Correo</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          v-model="email"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword4"
          v-model="password"
        />
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Direccion</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
          v-model="Address"
        />
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Direccion 2</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
          v-model="Address2"
        />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Ciudad</label>
        <input type="text" class="form-control" id="inputCity" v-model="City" />
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">State</label>
        <select id="inputState" class="form-select" v-model="State">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">Zip</label>
        <input
          type="text"
          class="form-control"
          id="inputZip"
          v-model="ZipCode"
        />
      </div>
      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="gridCheck"
            v-model="checkbox"
          />
          <label class="form-check-label" for="gridCheck"> Check me out </label>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" @:click.prevent="agregarRegistro">
          Agregar
        </button>
      </div>
    </form>

    <br />

    <section>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Correo</th>
            <th scope="col">Direccion</th>
            <th scope="col">Ciudad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rejistro, index) of rejistroUsuario" :key="index">
            <th scope="row">{{index + 1}}</th>
            <td>{{rejistro.email}}</td>
            <td>{{rejistro.Address}}</td>
            <td>{{rejistro.City}}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "nuevaLista",
  data() {
    return {
      email: "",
      password: "",
      Address: "",
      Address2: "",
      City: "",
      State: "",
      ZipCode: "",
      checkbox: false,
      rejistroUsuario: []
    };
  },
  methods: {
    agregarRegistro() {
      console.log("diste click")
    const nuevoRegistro = {
      email: this.email,
      password: this.password,
      Address: this.Address,
      Address2: this.Address2,
      City: this.City,
      State: this.State,
      ZipCode: this.ZipCode,
      checkbox: this.checkbox
    };

    this.rejistroUsuario.push(nuevoRegistro);
    console.log(nuevoRegistro)

    // Reinicia las variables a sus valores iniciales
    this.email = "";
    this.password = "";
    this.Address = "";
    this.Address2 = "";
    this.City = "";
    this.State = "";
    this.ZipCode = "";
    this.checkbox = false;
  }

  },
};
</script>

<style>
form {
  background: white;
  border-style: 3px solid;
}
</style>