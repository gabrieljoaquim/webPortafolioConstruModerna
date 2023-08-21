<template>
<div class="container-fluid">
    <div class="carrousel">
        <div class="elemento">
            <img  src="@/assets/img/CONSTRUCCION.jpg" alt="">
        </div>
        <div class="elemento">
            <router-link to="/pinturas" class="mr-3">
                <img  src="@/assets/img/cerrajeria.jpg" alt="">
            </router-link>
        </div>
        <div class="elemento">
            <img  src="@/assets/img/plomeria.jpg" alt="">
        </div>
        <div class="elemento">
            <img  src="@/assets/img/pisosPVC.jpg" alt="">
        </div>
        <div class="elemento">
            <img  src="@/assets/img/macrisal-practicable.jpg" alt="">
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

</style>