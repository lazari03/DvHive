<script setup> 
    defineProps(['text'])
</script>

<template>
    <div class="mx-6 flex w-fill">
        <h2 class="m-4  text-xl text-white w-full font-light md:text-justify text-center">
        {{ text }}
        </h2>
      </div>
</template>