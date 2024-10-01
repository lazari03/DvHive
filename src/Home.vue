<script setup>
import { defineAsyncComponent } from 'vue'

const Hero = defineAsyncComponent(() => import('./components/Hero.vue'))
const license_banner = defineAsyncComponent(() => import('./components/license_banner.vue'))
const text_middle = defineAsyncComponent(() => import('./components/text_middle.vue'))
const Logo_Large = defineAsyncComponent(() => import('./components/icons/Logo_Large.vue'))
const image_text_flex = defineAsyncComponent(() => import('./components/image_text_flex.vue'))
const steps_to_claim = defineAsyncComponent(() => import('./components/steps_to_claim.vue'))
const Claim_btn = defineAsyncComponent(() => import('./components/claim_btn.vue'))
const Client_reviews = defineAsyncComponent(() => import('./components/client_reviews.vue'))
const Consultation = defineAsyncComponent(() => import('./components/Consultation.vue'))
const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <Hero
      header="We Help You Restore the Lost Value of Your Vehicle."
      subheader="DVHIVE is a licensed auto appraisal provider operating nationwide,
      specializing in helping you reclaim your vehicle’s value after an accident.
      Our diminished value appraisal report will effectively document and support your claim"
    />
    <div>
      <Logo_Large class="absolute z-0 mix-blend-screen" />
      <text_middle
        class="z-10"
        title="Diminished value loss"
        subtitle="Diminished Value Loss is the reduction in your vehicle's market value after it's been in an accident,
      even if fully repaired. Buyers often see a car with a history of damage as less desirable,
      leading to a lower resale or trade-in value compared to a similar car without any accident history.
      This loss reflects the stigma and perceived risks associated with a previously damaged vehicle, making it crucial
      to understand when filing an insurance claim."
      />
    </div>
    <image_text_flex
      header="How we help in a diminished value claim"
      subheader="lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      image="src/assets/images/SideDent.jpg"
    />
    <steps_to_claim />
    <Claim_btn />
    <Client_reviews />
    <Consultation />
    <FooterComponent />
  </div>
</template>
