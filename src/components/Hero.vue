<script setup>
import Logo from './icons/Logo.vue'
import NavBar from './NavBar.vue'
import Submission_Form from './Submission_Form.vue'
</script>

<template>
  <div class="bg-[#212121] h-screen w-screen font-montserrat">
    <div class="flex justify-between">
      <Logo class="h-20 my-2" />
      <NavBar />
    </div>
    <div class="flex justify-between m-6 items-center">
      <div class="w-fit mb-36 ml-5">
        <h1 class="text-white text-6xl my-2">Header</h1>
        <h2 class="text-white text-3xl">Subheader</h2>
      </div>
      <Submission_Form :formData="formData" @submit="handleSubmit" />
    </div>
  </div>
</template>
