<script setup>
defineProps({
  header: String,
  image: String
})
</script>

<template>
  <div
    class="w-fill h-fit m-12 flex justify-center items-center flex-col-reverse md:flex-row gap-8 md:gap-0"
  >
    <div class="md:w-3/5 text-white w-full h-fit relative">
      <h1
        class="text-center text-4xl my-4 'after:content-[\'\'] after:absolute after:bottom-0 after:left-1/2 after:w-1/6 after:h-[3px] after:bg-[#FDCE83] after:rounded-full after:transform after:-translate-x-1/2 after:transition-all':"
      >
        {{ header }}
      </h1>
    </div>
    <div class="relative md:w-4/5 flex justify-end w-full">
      <div class="justify-center flex w-full">
        <div class="relative md:w-4/5 flex justify-end items-end w-full">
          <div
            class="absolute w-4/6 h-5/6 bg-[#FDCE83] rounded-2xl translate-x-4 translate-y-3"
          ></div>
          <img :src="image" alt="image" class="relative w-[450px] h-64 rounded-2xl object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>
