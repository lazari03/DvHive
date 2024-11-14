<script setup>
import { defineAsyncComponent } from 'vue'
import Image_text_flex from './components/image_text_flex.vue'
import Call_ball from './components/call_ball.vue'

const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
const FAQ = defineAsyncComponent(() => import('./components/FAQ.vue'))
const Navigation = defineAsyncComponent(() => import('./components/Nav.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <Call_ball />
    <div class="h-32"></div>
    <Navigation />
    <div class="my-24 w-fit h-fit">
      <Image_text_flex
        :alt="`LegoCrash`"
        :image="`https://github.com/dcifligu/consultation_images/blob/main/LegoCrash.jpg?raw=true`"
        :subheader="`If you're like most people, you probably have some questions about how it works. Learn how to file a diminished value claim and maximize your diminished value settlement!`"
      />
    </div>
    <FAQ />
    <FooterComponent />
  </div>
</template>
