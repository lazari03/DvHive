<script setup>
import Claim_btn_consultation from './claim_btn_consultation.vue'
</script>

<template>
  <div class="flex justify-center relative z-0">
    <div class="lg:w-[90%] h-fit m-6 bg-custom-gradient rounded-3xl w-full overflow-clip pt-12">
      <div class="flex w-full flex-col-reverse gap-4 lg:flex-row z-20 relative">
        <div
          class="w-full h- flex-growrounded-md text-[#212121] flex flex-col p-2 lg:justify-center"
        >
          <span class="lg:text-4xl text-2xl font-semibold text-center my-3">
            Reach out for a FREE Consultation
          </span>
          <span class="lg:text-xl text-lg text-center">
            To help recover your car's lost value after an accident with our fast and
            straightforward process.
          </span>
          <Claim_btn_consultation class="z-10 drop-shadow-xl" />
        </div>
        <div
          class="w-full h-fit flex-grow rounded-md flex lg:justify-end lg:items-end justify-start items-start lg:h-full"
        >
          <img
            src="@/assets/images/consultation_crash.png"
            alt="Consultation Crash"
            class="m-2 lg:m-0"
          />
        </div>
      </div>
    </div>
    <div
      class="absolute z-0 bg-[url('src/assets/images/honyecomb.svg')] w-[125%] h-full bg-cover bg-center mix-blend-overlay"
    ></div>
  </div>
</template>
