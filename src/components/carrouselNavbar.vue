<template>
<div class="container-fluid">
    <div class="carrousel">
        <div class="elemento">
            <router-link to="/obras" class="mr-3">
                <img  src="@/assets/img/CONSTRUCCION.jpg" alt="">
            </router-link>
            <h5>Obras</h5>
        </div>
        <div class="elemento">
            <router-link to="/pinturas" class="mr-3">
                <img  src="@/assets/img/PinturasP.jpg" alt="">
            </router-link>
            <h5>Pinturas</h5>
        </div>
        <div class="elemento">
            <router-link to="/plomeria" class="mr-3">
                <img  src="@/assets/img/plomeria2.jpg" alt="">
            </router-link>
            <h5>Plomeria</h5>
        </div>
        <div class="elemento">
            <router-link to="/metales" class="mr-3">
                <img  src="@/assets/img/estructurametalica.jpg" alt="">
            </router-link>
            <h5>Metales</h5>
        </div>
        <div class="elemento">
            <router-link to="/electricidad" class="mr-3">
                <img  src="@/assets/img/electricidad.jpeg" alt="">
            </router-link>
            <h5>Electricidad</h5>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name:'carrouseMenu'
}
</script>

<style scoped>

.carrousel {
    height: 140px;
    margin-top: 5%;
    padding: 5px;
    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
}

.elemento {
    flex: 1 0 auto;
    margin: 0 10px;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
}
.elemento img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 2px solid white;
}

@media screen and (min-width: 1024px) {
    .carrousel {
        height: 260px;
    }
    .elemento {
        height: 200px;
        width: 200px;
    }
    
    .elemento img {
        height: 200px;
        width: 200px;
    }
}

</style>