<template>
<div>
  <BespokeDevBanner/>
  <Footer/>
</div>
</template>

<script>
import BespokeDevBanner from '../components/BespokeDevBanner.vue'
import Footer from '../components/Footer.vue'
export default {
    name:"BespokeDev",
    components:{
      Footer,
      BespokeDevBanner
    }
}
</script>

<style>

</style>