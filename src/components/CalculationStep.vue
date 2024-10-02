<script setup>
defineProps({
  stepNr: String,
  stepDesc: String
})
</script>

<template>
  <div class="my-4">
    <h1 class="text-2xl font-semibold">{{ stepNr }}</h1>
    <p class="text-lg font-light">{{ stepDesc }}</p>
  </div>
</template>
