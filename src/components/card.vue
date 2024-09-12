<script>
import Logo_black from './icons/Logo_black.vue'

export default {
  props: {
    cardData: Object
  },
  components: { Logo_black }
}
</script>

<template>
  <div
    class="lg:w-1/4 md:w-3/4 w-full h-96 bg-[#D9D9D9] rounded-md relative flex items-center justify-center my-12 z-0"
    :id="`card-${id}`"
  >
    <p class="z-10 px-3 text-center lg:text-left">{{ cardData.description }}</p>
    <Logo_black class="absolute z-0 -top-2 -left-2 w-16 inset-0 h-auto" />
  </div>
</template>
