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
  <router-link to="/intake-form">
    <div class="flex justify-center w-full my-2 py-12 cursor-default">
      <div
        :class="{ 'p-2 md:p-0': !showBee }"
        class="relative md:w-4/6 w-fit bg-[#212121] rounded-full overflow-hidden flex cursor-pointer"
      >
        <White_bee class="pt-2 fill-[#FDCE83] -m-1" v-if="showBee" />
        <button
          :class="{ 'text-md text-center': !showBee }"
          class="relative z-10 text-[#F0ECE5] md:text-lg text-sm font-semibold mx-4"
        >
          Claim Your Free Consultation
        </button>
      </div>
    </div>
  </router-link>
</template>
