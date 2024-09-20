<script setup>
import Claim_btn from './claim_btn.vue'
import Claim_btn_consultation from './claim_btn_consultation.vue'
import Logo_black from './icons/Logo_black.vue'

defineProps({
  price: Number,
  features: Array
})
</script>

<template>
  <div class="flex flex-col w-full bg-[#FDCE83] justify-between rounded-lg shadow">
    <div class="p-6">
      <div class="flex items-center justify-between">
        <Logo_black class="w-12 h-12" />
        <span class="text-xl font-semibold">${{ price }}</span>
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
