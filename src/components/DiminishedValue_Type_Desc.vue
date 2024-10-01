<script setup>
defineProps(['text', 'smalltitle'])
</script>

<template>
  <div class="mx-6 flex w-fill flex-col items-center">
    <h1 class="justify-center w-full items-center text-xl text-center z-20 lg:hidden my-12">
      {{ smalltitle }}
    </h1>
    <h2
      class="m-4 text-xl text-[#212121] w-full font-light lg:text-justify text-center text-balanced whitespace-break-spaces"
    >
      {{ text }}
    </h2>
  </div>
</template>
