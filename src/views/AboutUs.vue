<template>
<div>
    <AboutUsBanner />
    <AboutOurCompany />
    <Footer/>
</div>
</template>

<script>
import AboutUsBanner from "../components/AboutUsBanner.vue";
import AboutOurCompany from "../components/AboutOurCompany.vue";
import Footer from "../components/Footer.vue";
export default {
    components: {
        AboutUsBanner,
        Footer,
        AboutOurCompany,
    },
};
</script>

<style>
</style>
