<script setup>
import Claim_btn_consultation from "./claim_btn_consultation.vue";
</script>

<template>
  <div class="flex justify-center relative z-0">
    <div class="w-5/6 h-fit m-6 bg-custom-gradient rounded-3xl flex justify-between relative">
      <div class="flex flex-col w-1/2 m-4 pt-24 mt-24">
        <span class="text-6xl text-[#212121] font-normal whitespace-break-spaces text-center my-4">
          Reach out for a <br> FREE Consultation
        </span>
        <span class="text-lg text-center text-[#212121]">
          To help recover your car's lost value after an accident with our fast and straightforward process.
        </span>
        <Claim_btn_consultation class="z-10 drop-shadow-xl"/>
      </div>
      <img src="@/assets/images/consultation_crash.png" alt="Consultation Crash" class="z-10 h-2/3 absolute bottom-0 right-0" >
    </div>
    <div
      class="absolute z-0 w-[150%] h-full bg-[url('src/assets/images/honyecomb.svg')] bg-cover bg-center bg-repeat mix-blend-overlay"
    ></div>
  </div>
</template>
