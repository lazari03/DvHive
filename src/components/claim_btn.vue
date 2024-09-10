<script setup>
import White_bee from './icons/white_bee.vue'
</script>

<template>
  <div class="flex justify-center md:w-full w-fit my-24 items-center">
    <div class="relative md:w-2/6 bg-[#FDCE83] rounded-full overflow-hidden flex w-fit m-6 items-center">
      <White_bee class="pt-2 fill-white" />
      <button class="relative z-10 text-[#212121] md:text-xl font-semibold mx-4">
        Claim Your Free Consultation
      </button>
      <div
        class="absolute z-0 w-[150%] h-full bg-[url('src/assets/images/honyecomb.svg')] bg-cover bg-center bg-repeat mix-blend-overlay"
      ></div>
    </div>
  </div>
</template>
