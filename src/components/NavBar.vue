<script setup>
import NavItem from './NavItem.vue'
import Dropdown from './dropdown.vue'
</script>

<template>
  <div
    class="bg-[#F0ECE5] w-5/12 h-11 rounded-full m-6 md:flex justify-center items-center hidden md:gap-2 lg:gap-5"
  >
    <NavItem navItem="Home" />
    <NavItem navItem="Diminished Value" />
    <NavItem navItem="Pricing" />
    <NavItem navItem="FAQ" />
  </div>
  <Dropdown
    title="Select an option"
    :items="['Home', 'Diminished Value', 'Pricing', 'FAQ']"
    class="z-30 relative md:hidden"
  />
</template>
