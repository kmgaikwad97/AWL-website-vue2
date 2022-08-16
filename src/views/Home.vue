<template>
<div>

    <Carousel />
    <HomeMain />
    <div class="main-ele">
        <MainGrid />
    </div>
    <Footer />
</div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import HomeMain from "../components/HomeMain.vue"
import MainGrid from "../components/MainGrid.vue"
import Footer from "../components/Footer.vue"
export default {
    name: "Home",
    components: {
        Carousel,
        HomeMain,
        MainGrid,
        Footer
    }
}
</script>

<style>
.main-ele {
    width: 100% !important;
    /* padding: 20px; */
    /* margin: 0 auto !important; */
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
