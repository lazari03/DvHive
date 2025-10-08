<script setup>
import Submission_Form from './Submission_Form.vue'
import hero_bg from './icons/hero_bg.vue'
import Navigation from './Nav.vue'
import Rating from './icons/Rating.vue'

defineProps(['header', 'subheader'])
</script>

<template>
  <div class="bg-[#212121] md:h-fit lg:h-fit w-full font-montserrat relative pb-5 z-10 h-full">
    <div
      class="lg:bg-contain opacity-40 w-full h-full absolute z-0"
      v-if="$route.path !== '/contact'"
    ></div>
    <div class="h-32"></div>
    <Navigation />
    <!-- Desktop mode -->
    <div class="hidden md:flex justify-between p-6 items-center h-fit relative z-10 lg:flex-row flex-col">
      <div class="lg:w-2/4 mb-11 lg:text-left text-center">
        <h1
          class="text-white md:text-5xl text-3xl font-semibold my-4 text-shadow shadow-[#212121] w-fit text-balance"
        >
          {{ header }}
        </h1>
        <h2
          class="text-white md:text-2xl shadow-black font-normal"
          style="text-shadow: 3px 1px 4px black"
        >
          {{ subheader }}
        </h2>
        <div class="flex justify-center lg:block">
          <Rating class="w-1/2 lg:w-1/3 m-0 h-auto" v-if="$route.path === '/'" />
        </div>
      </div>
      <Submission_Form class="lg:w-1/3 w-full" :formData="formData" @submit="handleSubmit" />
    </div>
    <!-- Mobile mode -->
    <div class="flex flex-col md:hidden p-6 items-center h-fit relative z-10">
      <h1 class="text-white text-3xl font-semibold my-4 text-shadow shadow-[#212121] w-fit text-balance">
          {{ header }}
        </h1>
      <Submission_Form class="w-full mb-6" :formData="formData" @submit="handleSubmit" />
      <div class="w-full text-center">
        <h2 class="text-white text-base shadow-black font-normal mb-4" style="text-shadow: 3px 1px 4px black">
          {{ subheader }}
        </h2>
        <div class="flex justify-center">
          <Rating class="w-1/2 m-0 h-auto" v-if="$route.path === '/'" />
        </div>
      </div>
    </div>
    <hero_bg class="ml-10 mt-[100%] md:mt-0" />
  </div>
</template>
