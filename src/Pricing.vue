<script setup>
import { defineAsyncComponent } from 'vue'
import FAQ from './components/FAQ.vue'
import Text_middle from './components/text_middle.vue'
import PricingCardContainer from './components/PricingCardContainer.vue'
import Consultation from './components/Consultation.vue'
import Navigation from './components/Nav.vue'

const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <Navigation />
    <Text_middle
      title="Our Guarantee"
      subtitle="We stand behind our services with a money-back guarantee, ensuring that you will recover at least the amount you paid for our report. To be eligible for a refund, simply present our appraisal in small claims court and provide us with the court’s ruling.<br><br>By choosing us, you’ll be partnering with a company known for having one of the highest success rates in the industry."
    />
    <PricingCardContainer />
    <FAQ />
    <Consultation />
    <FooterComponent />
  </div>
</template>
