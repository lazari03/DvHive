<script setup>
import { defineAsyncComponent } from 'vue'
import Intake_form from './components/Intake_form.vue'
import NavBar from './components/NavBar.vue'
import Logo from './components/icons/Logo.vue'
const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <div class="flex justify-between items-center relative z-30">
      <Logo class="h-20 my-2" />
      <NavBar />
    </div>
    <div class="flex flex-col w-full m-6">
      <h1 class="text-white text-5xl font-semibold my-4 text-shadow shadow-[#212121]">
        Intake Form
      </h1>
    </div>
    <Intake_form />
    <FooterComponent />
  </div>
</template>
