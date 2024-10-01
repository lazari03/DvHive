<script setup>
import Logo from './icons/Logo.vue'
import NavBar from './NavBar.vue'
import Submission_Form from './Submission_Form.vue'
import hero_bg from './icons/hero_bg.vue'
import Navigation from './Nav.vue'

defineProps(['header', 'subheader'])
</script>

<template>
  <div class="bg-[#212121] md:h-screen w-full font-montserrat relative pb-5 z-10 h-full">
    <div
      class="md:bg-[url('src/assets/images/HeroBg.jpg')] md:bg-cover lg:bg-contain opacity-15 w-full h-full absolute z-0"
    ></div>
    <Navigation />
    <div class="flex justify-between p-6 items-center h-fit relative z-10 lg:flex-row flex-col">
      <div class="lg:w-2/4 lg:mb-36 mb-11 lg:text-left text-center">
        <h1 class="text-white md:text-5xl text-3xl font-semibold my-4 text-shadow shadow-[#212121]">
          {{ header }}
        </h1>
        <h2 class="text-white md:text-lg text-shadow-sm shadow-black font-normal">
          {{ subheader }}
        </h2>
      </div>
    </div>
    <hero_bg class="ml-10" />
  </div>
</template>
