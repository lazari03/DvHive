<script setup>
import NavItem from './NavItem.vue'
</script>

<template>
  <div
    class="bg-[#F0ECE5] w-5/12 h-11 rounded-full m-6 lg:flex items-center justify-center sm:hidden"
  >
    <NavItem navItem="Home" />
    <NavItem navItem="Diminished Value" />
    <NavItem navItem="Pricing" />
    <NavItem navItem="FAQ" />
  </div>
</template>
