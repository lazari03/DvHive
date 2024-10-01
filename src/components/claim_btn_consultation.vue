<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
import White_bee from './icons/white_bee.vue'
const props = defineProps({
  showBee: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="flex items-center flex-row h-fit justify-center relative w-full my-24 scale-90">
    <router-link to="/intake-form">
      <div
        :class="{ 'lg:py-3': !showBee }"
        class="lg:py-6 lg:px-12 py-3 px-12 bg-[#212121] rounded-full flex-row w-fit h-fit justify-center items-center z-0 relative overflow-hidden"
      >
        <White_bee class="absolute z-10 top-0 left-0 fill-[#FDCE83] h-12 lg:h-20" v-if="showBee" />
        <span
          v-if="showBee"
          class="text-white text-xs lg:text-xl font-semibold uppercase z-20 relative lg:ml-20 text-right ml-0"
          >Claim Your Free Consultation</span
        >
        <span class="text-white text-md" v-else> Claim Your Free Consultation </span>
      </div>
    </router-link>
  </div>
</template>
