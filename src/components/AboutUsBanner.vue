<template>
<div>
    <div class="our-service-img">
        <img src="../assets/images/desktop1.jpg" class="image-size" alt="">
    </div>
    
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.image-size {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: 0 -302px;
}

@media screen and (max-width: 991px) {
    .image-size {
        /* min-height: 50vh !important; */
        max-width: 100% !important;
        object-position: 0 0px;
    }
}
</style>
