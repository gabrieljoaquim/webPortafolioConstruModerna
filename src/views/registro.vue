<template>
<div class="container">
    <img src="@/assets/logo.png" class="card-img-top" alt="..." style="width: 300px;">
    <div class="card" style="width: 100%;">
    <div class="card-body mt-5">
        <p class="card-text">Este registro se utiliza para actualizar nuestra base de datos de clientes y brindarte acceso a nuestras promociones. De esta manera, estarás siempre informado acerca de las ofertas y descuentos que tenemos para ti.</p>
    </div>
    </div>
    <div class="seccion">
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Correo" aria-label="Correo" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Telefono" aria-label="Telefono" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Clave" aria-label="Clave" aria-describedby="basic-addon1">
    </div>
    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Confirme Clave" aria-label="Confrime Clave" aria-describedby="basic-addon1">
    </div>
    <div class="mb-3 form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
            Asepto terminos.
        </label>
    </div>
    <div class="input-group mb-3 d-grid gap-2">
        <button type="button" class="btn btn-primary btn-sm">Enviar</button>
    </div>
    </div>
</div>
</template>

<script>
export default {
name: 'registro',

}
</script>

<style scoped>

    .seccion{
        height: 400px;
        padding-top: 100px;
    }
    .card{
        background: none;
    }
</style>