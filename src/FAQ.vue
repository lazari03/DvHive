<script setup>
import { defineAsyncComponent } from 'vue'
import Image_text_flex from './components/image_text_flex.vue'

const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
const FAQ = defineAsyncComponent(() => import('./components/FAQ.vue'))
const Navigation = defineAsyncComponent(() => import('./components/Nav.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <Navigation />
    <Image_text_flex
      :alt="`LegoCrash`"
      :image="`src/assets/images/LegoCrash.jpg`"
      :subheader="`If you're like most people, you probably have some questions about how it works. Learn how to file a diminished value claim and maximize your diminished value settlement!`"
    />
    <FAQ />
    <FooterComponent />
  </div>
</template>
