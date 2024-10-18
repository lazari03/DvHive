<script setup>
import NavBar from './NavBar.vue'
import Logo from './icons/Logo.vue'
</script>
<template>
  <div class="relative z-30 scale-90">
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
      <RouterLink to="/contact">
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
              : 'bg-[#212121] text-white'
          ]"
        >
          Claim free consultation
        </div>
      </RouterLink>
    </div>
  </div>
</template>
