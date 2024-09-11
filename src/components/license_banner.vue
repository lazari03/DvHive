<script setup>
import Rating from './icons/Rating.vue'
</script>

<template>
  <div class="bg-[#F0ECE5] h-32 w-full flex justify-center items-center">
    <template v-for="index in 2" :key="index">
      <Rating class="h-32 m-2 w-fit" />
    </template>
  </div>
</template>
