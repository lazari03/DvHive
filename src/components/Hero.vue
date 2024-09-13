<script setup>
import Logo from './icons/Logo.vue'
import NavBar from './NavBar.vue'
import Submission_Form from './Submission_Form.vue'
import hero_bg from './icons/hero_bg.vue'

defineProps(['header', 'subheader'])
</script>

<template>
  <div class="bg-[#212121] md:h-fit lg:h-screen w-full font-montserrat relative pb-5 z-10 h-full">
    <div
      class="md:bg-[url('src/assets/images/automobile-3734397_1920.jpg')] lg:bg-contain opacity-15 w-full h-full absolute z-0"
    ></div>
    <div class="flex justify-between items-center relative z-30">
      <Logo class="h-20 my-2" />
      <NavBar />
    </div>
    <div class="flex justify-between p-6 items-center h-fit relative z-10 lg:flex-row flex-col">
      <div class="lg:w-2/4 lg:mb-36 mb-11 lg:text-left text-center">
        <h1 class="text-white md:text-5xl text-3xl font-semibold my-4 text-shadow shadow-[#212121]">
          {{ header }}
        </h1>
        <h2 class="text-white md:text-2xl text-shadow-sm shadow-black font-normal">
          {{ subheader }}
        </h2>
      </div>
      <Submission_Form class="lg:w-1/3 w-full" :formData="formData" @submit="handleSubmit" />
    </div>
    <hero_bg class="ml-10" />
  </div>
</template>
