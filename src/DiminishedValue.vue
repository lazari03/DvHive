<script setup>
import { defineAsyncComponent } from 'vue'
import Image_text_flex from './components/image_text_flex.vue'

const Hero = defineAsyncComponent(() => import('./components/Hero.vue'))
const License_banner = defineAsyncComponent(() => import('./components/license_banner.vue'))
const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
const FAQ = defineAsyncComponent(() => import('./components/FAQ.vue'))
const Text_middle = defineAsyncComponent(() => import('./components/text_middle.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <Hero header="Diminished Value" subheader="Subheader" />
    <License_banner />
    <Text_middle
      title="Diminished Value"
      subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
    <Image_text_flex 
    header="An example of a diminished value claim"
    image="src/assets/images/pexels-artyom-kulakov-1190754-2265634.png" />
    <FAQ />
    <FooterComponent />
  </div>
</template>
