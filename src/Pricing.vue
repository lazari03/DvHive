<script setup>
import { defineAsyncComponent } from 'vue'
import FAQ from './components/FAQ.vue'
import Text_middle from './components/text_middle.vue'
import PricingCardContainer from './components/PricingCardContainer.vue'
import Consultation from './components/Consultation.vue'

const Hero = defineAsyncComponent(() => import('./components/Hero.vue'))
const License_banner = defineAsyncComponent(() => import('./components/license_banner.vue'))
const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <Hero header="Pricing" subheader="Subheader" />
    <License_banner />
    <Text_middle
      title="Pricing"
      subtitle="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    />
    <PricingCardContainer />
    <FAQ />
    <Consultation />
    <FooterComponent />
  </div>
</template>
