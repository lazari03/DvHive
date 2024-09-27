<script setup>
defineProps(['title', 'subtitle'])
</script>

<template>
  <div class="m-6 flex items-center justify-center flex-col w-fill">
    <h1 class="my-4 text-5xl text-white md:text-left text-center ">
      {{ title }}
    </h1>
    <h2
      class="my-4 text-xl text-white w-3/4 font-light md:text-justify text-center"
      v-html="subtitle"
    ></h2>
  </div>
</template>
