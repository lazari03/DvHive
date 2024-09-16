<script setup>
import { defineAsyncComponent } from 'vue'

const Hero_Intake = defineAsyncComponent(() => import('./components/Hero_Intake.vue'))
const License_banner = defineAsyncComponent(() => import('./components/license_banner.vue'))
const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
const text_middle = defineAsyncComponent(() => import('./components/text_middle.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <Hero_Intake header="We Help You Recover Your Vehicle's Value" subheader="Contact Us Today!" />
    <License_banner />
    <text_middle
      title="Explore the Appraisal Service Tailored to Your Needs. From Free Quotes to In-Depth Evaluations, We’ve Got You Covered."
      subtitle=" "
    />
    <FooterComponent />
  </div>
</template>
