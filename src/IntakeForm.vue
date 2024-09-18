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
    <div class="flex flex-col w-full m-6 text-2xl text-white">
      <div class="m-6">
        <div class="flex flex-col gap-3 relative">
          <h1 class="text-white text-5xl font-semibold my-4 text-shadow shadow-[#212121]">
            Intake Form
          </h1>

          <span class="text-4xl"> We Help You Recover Your Vehicle's Value </span>
          <span class="text-4xl relative z-20">
            <RouterLink
              to="/contact"
              class="relative hover:after:duration-500 duration-500 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-1/6 after:h-[3px] after:bg-[#FDCE83] after:rounded-full after:transform after:-translate-x-1/2 after:transition-all hover:after:w-full after:z-0"
            >
              Contact Us Today!
            </RouterLink>
          </span>
        </div>
        
      </div>
    </div>
    <Intake_form />
    <FooterComponent />
  </div>
</template>
