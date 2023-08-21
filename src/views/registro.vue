<template>
<div class="container-fluid">
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
        <button type="button" class="btn btn-primary btn-sm">Small button</button>
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

    .container-fluid{
        height: 100vh;
    }
    .seccion{
        height: 400px;
        padding-top: 100px;
    }
</style>