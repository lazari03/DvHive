<script setup>
import White_bee from './icons/white_bee.vue'
defineProps(['title', 'isActive'])
const emit = defineEmits(['click'])
</script>

<template>
  <div 
    @click="emit('click')" 
    :class="['w-full h-32 rounded-xl overflow-hidden flex flex-row z-0 relative cursor-pointer transition-all duration-500', isActive ? 'bg-[#212121] border-4 border-[#FDCE83]' : 'bg-custom-gradient']"
  >
    <h1 :class="['flex justify-center w-full items-center text-2xl text-center' ,isActive ?'text-white': 'text-black']">{{ title }}</h1>
    <div
      class="absolute top-0 left-0 h-full rounded-xl z-0 bg-[url('src/assets/images/honyecomb.svg')] w-[120%] bg-cover bg-center bg-repeat mix-blend-overlay"
    ></div>
    <White_bee class="absolute -right-5 h-full fill-white scale-x-[-1] -bottom-10 z-0" />
  </div>
</template>