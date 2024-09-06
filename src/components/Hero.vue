<script setup>
import Logo from './icons/Logo.vue'
import NavBar from './NavBar.vue'
import Submission_Form from './Submission_Form.vue'
import hero_bg from './icons/hero_bg.vue'

defineProps(['header', 'subheader'])
</script>

<template>
  <div class="bg-[#212121] h-screen w-full font-montserrat relative pb-5">
    <div
      class="bg-[url('src/assets/images/automobile-3734397_1920.jpg')] bg-contain opacity-15 w-full h-full absolute z-0"
    ></div>
    <div class="flex justify-between relative z-10">
      <Logo class="h-20 my-2" />
      <NavBar />
    </div>
    <div class="flex justify-between p-6 items-center h-fill relative z-10">
      <div class="w-2/4 mb-36 ml-5">
        <h1 class="text-white text-5xl my-4 drop-shadow-xl">{{ header }}</h1>
        <h2 class="text-white text-lg drop-shadow-xl w-4/5 font-normal">{{ subheader }}</h2>
      </div>
      <Submission_Form class="w-1/3" :formData="formData" @submit="handleSubmit" />
    </div>
    <hero_bg />
  </div>
</template>
