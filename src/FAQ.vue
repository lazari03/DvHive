<script setup>
import { defineAsyncComponent } from 'vue'

const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
const FAQ = defineAsyncComponent(() => import('./components/FAQ.vue'))
const NavBar = defineAsyncComponent(() => import('./components/NavBar.vue'))
const Logo = defineAsyncComponent(() => import('./components/icons/Logo.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <div class="flex justify-between items-center relative z-30">
      <Logo class="h-20 my-2" />
      <NavBar />
    </div>
    <FAQ />
    <FooterComponent />
  </div>
</template>
