<script setup>
defineProps(['navItem'])
</script>

<template>
  <h1 class="relative">
    <router-link
      :to="navItem.path"
      :class="{
        'after:content-[\'\'] after:absolute after:bottom-0 after:left-1/2 after:w-1/2 after:h-[3px] after:bg-[#FDCE83] after:rounded-full after:transform after:-translate-x-1/2 after:transition-all':
          $route.path === navItem.path
      }"
    >
      {{ navItem.name }}
    </router-link>
  </h1>
</template>
