<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './NavBar.vue'
import Logo from './icons/Logo.vue'

const isScrollingUp = ref(true)
const hasScrolledPastThreshold = ref(false)
let lastScrollTop = 0
const scrollThreshold = 100 // Adjust this value as needed

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    isScrollingUp.value = false
  } else {
    // Scrolling up
    isScrollingUp.value = true
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop // For Mobile or negative scrolling

  // Check if the user has scrolled past the threshold
  hasScrolledPastThreshold.value = scrollTop > scrollThreshold
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <div
      :class="[
        'relative z-50 scale-90 transition-transform duration-300',
        {
          'transform -translate-y-full': !isScrollingUp,
          'bg-[#212121] rounded-xl': isScrollingUp && hasScrolledPastThreshold
        }
      ]"
    >
      <div class="w-full h-fit flex flex-row justify-between items-center p-3 uppercase">
        <div class="flex-row flex w-fit h-fit items-center gap-2">
          <RouterLink to="/">
            <Logo class="w-12 h-auto" />
          </RouterLink>
          <div class="flex flex-col gap-0">
            <h1 class="text-white text-xl font-semibold">DVHIVE</h1>
            <h2 class="text-white text-xs font-light">
              Diminished value<br />
              experts
            </h2>
          </div>
        </div>
        <NavBar />
        <RouterLink to="/intake-form">
          <div
            :class="[
              'w-fit h-14 py-2 px-7 lg:flex items-center rounded-full text-sm lg:text-md hidden font-bold',
              $route.path === '/intake-form' ||
              $route.path === '/pricing' ||
              $route.path === '/faq' ||
              $route.path === '/contact' ||
              $route.path === '/privacy-policy' ||
              $route.path === '/terms-of-use'
                ? 'bg-[#FDCE83] text-black'
                : 'bg-[#212121] text-white',
              {
                'bg-[#FDCE83] !text-black': isScrollingUp && hasScrolledPastThreshold
              }
            ]"
          >
            Claim free consultation
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.relative {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000000000;
}
.transition-transform {
  transition: transform 0.3s ease-in-out;
}
.transform {
  transform: translateY(0);
}
.-translate-y-full {
  transform: translateY(-100%);
}
</style>
