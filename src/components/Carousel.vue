<template>
<div>
    <!-- <h1>Hello</h1> -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <!-- <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="carousel-btn active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" class="carousel-btn" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" class="carousel-btn" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> -->
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/images/one.jpg" class="carousel-length carousel-display carousel-img d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src="../assets/images/two.jpg" class="carousel-length carousel-display carousel-img d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
                <img src="../assets/images/three.jpg" class="carousel-length carousel-display carousel-img d-block w-100" alt="..." />
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* .carousel-btn{
    display: none;
} */
.centered {
    left: 0;
    position: absolute;
    text-align: center;
    top: 50%;
    width: 100%;
}

.design {
    text-align: center;
    color: #000 !important;
    font-weight: 900 !important;
    font-size: 30px !important;
}

.carousel-indicators>button {
    background-color: orange !important;
}

.carousel-display {
    max-width: 100vw !important;
    height: 260px !important;
}

@media screen and (max-width: 576px) {
    .carousel-length {
        max-width: 100% !important;
        height: 350px !important;
    }

    .design {
        font-size: 20px !important;
        padding: 0 7px !important;
    }
}

@media screen and (max-width: 768px) {
    .carousel-length {
        height: 450px !important;
    }

    .design {
        font-size: 24px !important;
        padding: 0 12px;
    }
}
</style>
