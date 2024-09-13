<script setup>
import { defineAsyncComponent } from 'vue'

const Hero = defineAsyncComponent(() => import('./components/Hero.vue'))
const License_banner = defineAsyncComponent(() => import('./components/license_banner.vue'))
const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <Hero header="Contact" subheader="Subheader" />
    <License_banner />

    <FooterComponent />
  </div>
</template>
