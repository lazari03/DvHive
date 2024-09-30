<script setup>
defineProps(['step_nr', 'step_text', 'step_tittle'])
</script>

<template>
  <div class="w-full">
    <div class="flex flex-col justify-center items-center">
      <div
        class="flex justify-center items-center p-4 border-4 border-[#FDCE83] rounded-full w-32 h-32 text-2xl text-white font-bold"
      >
        <h1>{{ step_nr }}</h1>
      </div>
      <div class="flex flex-col items-center text-center mt-5 h-40">
        <strong class="text-xl text-white w-full">
          {{ step_tittle }}
        </strong>
        <span class="text-white text-lg font-normal lg:w-[88%] md:w-[75%]">
          {{ step_text }}
        </span>
      </div>
      <div class="w-1/6 h-0 border-2 border-[#FDCE83] rounded-xl hidden lg:block"></div>
    </div>
  </div>
</template>

