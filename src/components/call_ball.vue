<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const showBall = ref(false)
let lastScrollY = window.scrollY

const handleScroll = () => {
  if (window.scrollY > lastScrollY) {
    showBall.value = true
  } else {
    showBall.value = false
  }
  lastScrollY = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <a href="tel:+" id="ball">
    <div
      :class="{ 'animate-slide-up': showBall, 'animate-slide-down': !showBall }"
      class="fixed bottom-1 right-1 h-12 w-12 rounded-full bg-[#FDCE83] z-30 m-2 hidden md:block transition-transform duration-500"
    >
      <div class="flex justify-center items-center h-full w-full">
        <font-awesome-icon icon="phone" class="text-[#212121] text-xl lg:text-xl" />
      </div>
    </div>

    <div
      :class="{ 'animate-slide-up': showBall, 'animate-slide-down': !showBall }"
      class="fixed bottom-0 h-16 w-full bg-[#FDCE83] z-30 md:hidden rounded-t-md transition-transform duration-500"
    >
      <div
        class="flex justify-center items-center h-full w-full font-montserrat font-semibold text-xl"
      >
        Call Now
      </div>
    </div>
  </a>
</template>

<style>
.animate-slide-up {
  transform: translateY(0);
  opacity: 1;
  transition:
    transform 0.5s ease-out,
    opacity 0.5s ease-out;
}

.animate-slide-down {
  transform: translateY(100%);
  opacity: 0;
  transition:
    transform 0.5s ease-in,
    opacity 0.5s ease-in;
}
</style>
