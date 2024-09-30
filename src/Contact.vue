<script setup>
import NavBar from './components/NavBar.vue'
import Logo from './components/icons/Logo.vue'
import Submission_Form from './components/Submission_Form.vue'
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <div class="flex justify-between items-center relative z-30">
      <RouterLink to="/">
        <Logo class="h-20 my-2" />
      </RouterLink>
      <NavBar />
    </div>
    <div class="m-6">
      <div class="flex flex-row gap-8 h-full items-center justify-between">
        <div class="fleax flex-col">
          <h1 class="text-white md:text-5xl text-3xl font-semibold my-4 text-shadow shadow-[#212121]">
            Contact US
        </h1>
        <h2 class="text-white md:text-2xl text-shadow-sm shadow-black font-normal">
            
        </h2>
        </div>
      <Submission_Form />
      </div>
    </div>
  </div>
</template>