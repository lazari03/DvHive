<script setup>
import White_bee from './icons/white_bee.vue'
</script>

<template>
  <div class="flex justify-center items-center md:w-3/4 w-fit m-auto my-24">
    <router-link
      to="/intake-form"
      class="relative lg:w-2/6 bg-[#FDCE83] rounded-full overflow-hidden flex w-fit m-6 items-center"
    >
      <White_bee class="pt-2 fill-white" />
      <span
        class="relative z-10 text-[#212121] lg:text-xl md:text-2xl sm:text-3xl text-sm font-semibold mx-4"
      >
        Claim Your Free Consultation
      </span>
      <div
        class="absolute z-0 w-[150%] h-full bg-[url('src/assets/images/honyecomb.svg')] bg-cover bg-center bg-repeat mix-blend-overlay"
      ></div>
    </router-link>
  </div>
</template>
