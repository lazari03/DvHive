<script setup>
defineProps({
  header: String,
  image: String
})
</script>

<template>
  <div class="w-fill h-fit m-12 flex justify-center items-center">
    <div class="w-3/5 text-white">
      <h1 class="text-center text-4xl my-4">
        {{ header }}
      </h1>
    </div>
    <div class="relative w-4/5 flex justify-end">
      <div class="relative w-4/5 flex justify-end items-end mx-3">
        <div
          class="absolute w-4/6 h-5/6 bg-[#FDCE83] rounded-2xl translate-x-4 translate-y-3"
        ></div>
        <img :src="image" alt="image" class="relative w-4/5 rounded-2xl" />
      </div>
    </div>
  </div>
</template>
