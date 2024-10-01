<script setup>
import NavItem from './NavItem.vue'
import Dropdown from './dropdown.vue'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Intake Form', path: '/intake-form' },
  { name: 'Diminished Value', path: '/diminished-value' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' }
]
</script>
<template>
  <div class="flex flex-row gap-2 items-center">
    <div
      class="bg-[#F0ECE5] w-fit h-11 rounded-full m-6 lg:flex justify-center items-center hidden lg:gap-8 px-8"
    >
      <template v-for="item in navItems" :key="item">
        <NavItem :navItem="item" />
      </template>
    </div>
  </div>

  <Dropdown :items="navItems" class="z-30 relative lg:hidden" />
</template>
