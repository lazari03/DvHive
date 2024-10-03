<script setup>
import Claim_btn_consultation from './claim_btn_consultation.vue'
import Logo_black from './icons/Logo_black.vue'

defineProps({
  price: Number,
  title: String,
  features: Array
})
</script>

<template>
  <div class="flex flex-col w-full bg-[#FDCE83] justify-between rounded-2xl shadow">
    <div class="p-6">
      <div
        class="flex items-center justify-between h-40 bg-custom-gradient-2 px-4 py-12 rounded-xl overflow-clip relative"
      >
        <div class="flex flex-col w-full justify-center items-center">
          <span class="text-xl font-semibold z-10 text-white text-center">{{ title }}</span>
          <span class="text-4xl font-bold text-black z-10">${{ price }}</span>
        </div>
        <Logo_black class="w-16 h-16 z-10" />
        <div
          class="absolute top-0 left-0 h-full rounded-xl z-0 bg-[url('https://raw.githubusercontent.com/dcifligu/consultation_images/854ee906e89d4c6ff4f57885000fbcd42945073b/honyecomb.svg')] w-[150%] bg-cover bg-center bg-repeat mix-blend-overlay"
        ></div>
      </div>
      <h1 class="text-xl text-center my-4">Includes:</h1>
      <ul class="flex-grow">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="relative pl-6 my-2 before:content-['•'] before:absolute before:left-0"
        >
          {{ feature }}
        </li>
      </ul>
    </div>
    <Claim_btn_consultation class="w-full" :showBee="false" />
  </div>
</template>
