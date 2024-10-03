<script setup>
import White_bee from './icons/white_bee.vue'
defineProps(['title', 'isActive'])
const emit = defineEmits(['click'])
</script>

<template>
  <div
    @click="emit('click')"
    :class="[
      'lg:w-full lg:h-32 w-16 h-16 rounded-[100%] lg:rounded-xl overflow-hidden flex items-center justify-center flex-row z-10 relative cursor-pointer transition-all duration-500',
      isActive ? 'bg-[#212121] border-4 border-[#FDCE83]' : 'bg-custom-gradient'
    ]"
  >
    <h1
      :class="[
        'justify-center w-full items-center text-2xl text-center z-20 hidden lg:flex',
        isActive ? 'text-white' : 'text-black'
      ]"
    >
      {{ title }}
    </h1>
    <div
      class="absolute top-0 left-0 h-full rounded-xl z-0 bg-[url('https://raw.githubusercontent.com/dcifligu/consultation_images/854ee906e89d4c6ff4f57885000fbcd42945073b/honyecomb.svg')] w-[120%] bg-cover bg-center bg-repeat mix-blend-overlay"
    ></div>
    <White_bee
      class="absolute -right-5 h-12 scale-x-[-1] bottom-0 z-0"
      :class="[isActive ? 'fill-[#FDCE83]' : 'fill-white']"
    />
  </div>
</template>
