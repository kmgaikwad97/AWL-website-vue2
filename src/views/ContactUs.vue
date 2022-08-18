<template>
  <div>
    <ContactUsBanner />
    <ContactUsMain />
    <ContactUsAddress />
    <Map />
    <FooterContact />
  </div>
</template>

<script>
import ContactUsBanner from "../components/ContactUsBanner.vue";
import ContactUsMain from "../components/ContactUsMain.vue";
import ContactUsAddress from "../components/ContactUsAddress.vue";
import Map from "../components/Map.vue";
import FooterContact from "../components/FooterContact.vue";
export default {
  components: {
    ContactUsBanner,
    ContactUsMain,
    ContactUsAddress,
    Map,
    FooterContact,
  },
};
</script>

<style>
.black-footer {
  margin-top: -6px;
}
</style>