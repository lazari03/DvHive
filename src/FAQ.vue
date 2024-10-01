<script setup>
import { defineAsyncComponent } from 'vue'

const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
const FAQ = defineAsyncComponent(() => import('./components/FAQ.vue'))
const Navigation = defineAsyncComponent(() => import('./components/Nav.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <Navigation />
    <FAQ />
    <FooterComponent />
  </div>
</template>
