<script setup>
import Submission_Form from './Submission_Form.vue'
import hero_bg from './icons/hero_bg.vue'
import Navigation from './Nav.vue'
import { routeLocationKey } from 'vue-router'

defineProps(['header', 'subheader'])
</script>

<template>
  <div class="bg-[#212121] md:h-fit lg:h-fit w-full font-montserrat relative pb-5 z-10 h-full">
    <div
      class="md:bg-[url('src/assets/images/HeroBg.jpg')] lg:bg-contain opacity-40 w-full h-full absolute z-0"
      v-if="$route.path !== '/contact'"
    ></div>
    <div
      class="md:bg-[url('src/assets/images/ContactBg.jpeg')] lg:bg-cover opacity-40 w-full h-full absolute z-0"
      v-else
    ></div>
    <Navigation />
    <div class="flex justify-between p-6 items-center h-fit relative z-10 lg:flex-row flex-col">
      <div class="lg:w-2/4 mb-11 lg:text-left text-center">
        <h1
          class="text-white md:text-5xl text-3xl font-semibold my-4 text-shadow shadow-[#212121] w-fit text-balance"
        >
          {{ header }}
        </h1>
        <h2 class="text-white md:text-2xl text-shadow-sm shadow-black font-normal">
          {{ subheader }}
        </h2>
      </div>
      <Submission_Form class="lg:w-1/3 w-full" :formData="formData" @submit="handleSubmit" />
    </div>
    <hero_bg class="ml-10" v-if="$route.path !== '/contact'" />
  </div>
</template>
