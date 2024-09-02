<script setup>
defineProps(
    [
        'title',
        'subtitle',
    ]
)
</script>

<template>
  <div class="m-6 flex items-center flex-col w-full">
    <h1 class="my-4 text-5xl text-white">
      {{ title }}
    </h1>
    <h2 class="my-4 text-xl text-white w-3/4 text-justify font-light">
      {{ subtitle }}
    </h2>
  </div>
</template>
