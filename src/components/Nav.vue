<script setup>
import NavBar from './NavBar.vue'
import Logo from './icons/Logo.vue'
</script>
<template>
  <div class="relative z-30">
    <div class="w-full h-fit flex flex-row justify-between items-center p-3 uppercase">
      <div class="flex-row flex w-fit h-fit items-center">
        <RouterLink to="/">
          <Logo class="h-20 w-14 ml-6" />
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
            'w-fit h-11 p-2 lg:flex items-center rounded-full text-sm hidden',
            $route.path === '/intake-form' ||
            $route.path === '/pricing' ||
            $route.path === '/faq' ||
            $route.path === '/contact'
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
