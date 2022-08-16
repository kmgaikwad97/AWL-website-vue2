<template>
  <div>
    
    <ServiceBanner/>
    <ServiceMain/>
    <ServiceGrid/>
    <Footer/>
  </div>
</template>

<script>
import ServiceBanner from '../components/ServiceBanner.vue'
import ServiceMain  from "../components/ServiceMain.vue"
import ServiceGrid from "../components/ServiceGrid.vue"
import Footer from "../components/Footer.vue"
export default {
    name:"Home",
    components:{
        ServiceBanner,
        ServiceMain,
        ServiceGrid,
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