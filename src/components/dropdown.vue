<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const dropdownOpen = ref<boolean>(false)

const props = defineProps<{
  title: string
  items: { name: string; path: string }[]
  active?: boolean
}>()

const closeDropdown = () => {
  dropdownOpen.value = false
}

const handleOutsideClick = (event: MouseEvent) => {
  const dropdown = document.querySelector('.dropdown-container')
  if (dropdown && !dropdown.contains(event.target as Node)) {
    closeDropdown()
  }
}

const handleScroll = () => {
  closeDropdown()
}

onMounted(() => {
  dropdownOpen.value = props.active || false
  document.addEventListener('click', handleOutsideClick)
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="inline-block text-left z-30 m-6 relative dropdown-container">
    <button
      @click.prevent="dropdownOpen = !dropdownOpen"
      class="inline-flex justify-between w-fit h-fit rounded-full shadow-sm px-4 py-2 bg-[#F0ECE5] text-sm font-medium text-[#212121]"
      :aria-expanded="dropdownOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="transform transition duration-200 ease-out h-5 w-5"
        :class="{ dropdownOpen }"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 transform scale-95"
      enter-to-class="opacity-100 transform scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 transform scale-100"
      leave-to-class="opacity-0 transform scale-95"
    >
      <div
        v-show="dropdownOpen"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#F0ECE5]"
      >
        <ul class="py-1">
          <li
            v-for="(item, index) in props.items"
            :key="index"
            class="block px-4 py-2 text-sm text-[#212121] hover:bg-[#e3e3e1] cursor-pointer"
          >
            <router-link :to="item.path" class="w-full block">
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
