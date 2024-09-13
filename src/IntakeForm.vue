<script setup>
import { defineAsyncComponent } from 'vue'

const Hero_Intake = defineAsyncComponent(() => import('./components/Hero_Intake.vue'))
const License_banner = defineAsyncComponent(() => import('./components/license_banner.vue'))
const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <Hero_Intake header="Intake Form" subheader="Subheader" />
    <License_banner />
    <FooterComponent />
  </div>
</template>
