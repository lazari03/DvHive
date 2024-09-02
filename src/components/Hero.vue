<script setup>
import Logo from './icons/Logo.vue'
import NavBar from './NavBar.vue'
import Submission_Form from './Submission_Form.vue'

defineProps(['header', 'subheader'])
</script>

<template>
  <div class="bg-[#212121] h-screen w-full font-montserrat">
    <div class="flex justify-between">
      <Logo class="h-20 my-2" />
      <NavBar />
    </div>
    <div class="flex justify-between m-6 items-center h-fill">
      <div class="w-2/4 mb-36 ml-5">
        <h1 class="text-white text-5xl my-4 drop-shadow-md">{{ header }}</h1>
        <h2 class="text-white text-lg drop-shadow-md w-4/5 font-normal">{{ subheader }}</h2>
      </div>
      <Submission_Form class="w-1/3" :formData="formData" @submit="handleSubmit" />
    </div>
  </div>
</template>
