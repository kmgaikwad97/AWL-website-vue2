<template>
  <div>
    <ContactUsBanner/>
    <ContactUsMain/>
    <ContactUsAddress/>
    <Map/>
    <Footer/>
  </div>
</template>

<script>
import ContactUsBanner from '../components/ContactUsBanner.vue'
import ContactUsMain from '../components/ContactUsMain.vue'
import ContactUsAddress from '../components/ContactUsAddress.vue'
import Map from '../components/Map.vue'
import Footer from '../components/Footer.vue'
export default {
    components:{
        ContactUsBanner,
        ContactUsMain,
        ContactUsAddress,
        Map,
        Footer
    }
}
</script>

<style>
    .black-footer{
        margin-top: -6px;
    }
</style>