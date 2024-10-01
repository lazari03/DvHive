<script setup>
import White_bee from './icons/white_bee.vue'
</script>

<template>
  <div class="flex items-center flex-row h-fit justify-center relative w-full my-24">
    <router-link to="/intake-form">
      <div
        class="lg:py-6 lg:px-12 py-3 px-12 bg-[#FDCE83] rounded-full flex-row w-fit h-fit justify-center items-center z-0 relative overflow-hidden"
      >
        <White_bee class="absolute z-10 left-0 top-0 fill-white h-14 lg:h-20" />
        <span
          class="text-[#212121] text-xs lg:text-xl font-semibold uppercase z-20 relative lg:ml-20 text-right ml-9"
          >Claim Your Free Consultation</span
        >
        <div
          class="absolute top-0 z-0 w-[120%] h-full bg-[url('src/assets/images/honyecomb.svg')] bg-cover bg-center bg-repeat mix-blend-overlay"
        ></div>
      </div>
    </router-link>
  </div>
</template>
