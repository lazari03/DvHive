<script setup lang="ts">
import { ref, onMounted } from 'vue'

const dropdownOpen = ref<boolean>(false)

const props = defineProps<{
  title: string
  items: string[]
  active?: boolean
}>()

onMounted(() => {
  dropdownOpen.value = props.active || false
})
</script>

<template>
  <div class="inline-block text-left Z-30 m-6 relative">
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
            v-for="(item, index) in items"
            :key="index"
            class="block px-4 py-2 text-sm text-[#212121] hover:bg-[#e3e3e1] cursor-pointer"
          >
            <a href="">
              {{ item }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
