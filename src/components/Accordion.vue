<script setup lang="ts">
import { ref, onMounted } from 'vue'

const accordionOpen = ref<boolean>(false)

const props = defineProps<{
  title: string,
  id: string,
  active?: boolean,
}>()

onMounted(() => {
  accordionOpen.value = props.active
})
</script>

<template>
  <div class="mx-6 w-fill">
    <div class="py-2 relative w-full text-[#212121]">
      <h2>
        <button
          :id="`accordion-title-${id}`"
          class="relative flex items-center justify-between w-full text-lg text-left font-bold py-4 p-2 bg-[#F0ECE5] rounded-lg z-10 shadow-xl"
          @click.prevent="accordionOpen = !accordionOpen"
          :aria-expanded="accordionOpen"
          :aria-controls="`accordion-text-${id}`"
        >
          <span class="mx-4">{{ title }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="128"
            height="16"
            rx="1"
            class="transform origin-center transition duration-200 ease-out fill-[#212121]"
            :class="{ '!rotate-180': accordionOpen }"
          >
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </button>
      </h2>
      <div
        :id="`accordion-text-${id}`"
        role="region"
        :aria-labelledby="`accordion-title-${id}`"
        class="relative grid text-md bg-[#e1ddd7] overflow-hidden transition-all duration-300 ease-in-out rounded-b-lg mb-4 z-0"
        :class="
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100 py-6 -mt-2'
            : 'grid-rows-[0fr] opacity-0 py-0 mt-0'
        "
      >
        <div class="overflow-hidden">
          <p class="pb-3 mx-2 w-5/6 font-semibold" style="white-space: break-spaces">
            <slot />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
