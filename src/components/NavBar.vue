<script setup>
import NavItem from './NavItem.vue'
import Dropdown from './dropdown.vue'

const navItems = ['Home', 'Diminished Value', 'Pricing', 'FAQ', 'Contact']
</script>

<template>
  <div
    class="bg-[#F0ECE5] w-fit h-11 rounded-full m-6 md:flex justify-center items-center hidden md:gap-2 lg:gap-5 px-8"
  >
    <template v-for="item in navItems" :key="item">
      <NavItem :navItem="item" />
    </template>
  </div>
  <Dropdown :items="navItems" class="z-30 relative md:hidden" />
</template>
