<script setup>
import Hero from './components/Hero.vue'
import license_banner from './components/license_banner.vue'
import text_middle from './components/text_middle.vue'
// import box_text from './components/box_text.vue'
// import Logo_Large from './components/icons/Logo_Large.vue'
import image_text_flex from './components/image_text_flex.vue'
import steps_to_claim from './components/steps_to_claim.vue'
import Claim_btn from './components/claim_btn.vue'
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium">
    <Hero
      header="We Help You Restore the Lost Value of Your Vehicle."
      subheader="DVHIVE is a licensed auto appraisal provider operating nationwide,
      specializing in helping you reclaim your vehicle’s value after an accident.
      Our diminished value appraisal report will effectively document and support your claim"
    />
    <license_banner />
    <text_middle
      title="Diminished value loss"
      subtitle="Diminished Value Loss is the reduction in your vehicle's market value after it's been in an accident,
      even if fully repaired. Buyers often see a car with a history of damage as less desirable,
      leading to a lower resale or trade-in value compared to a similar car without any accident history.
      This loss reflects the stigma and perceived risks associated with a previously damaged vehicle, making it crucial
      to understand when filing an insurance claim."
    />
    <image_text_flex
      header="How we help in a diminished value claim"
      subheader="lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      image="src/assets/images/pexels-artyom-kulakov-1190754-2265634.png"
    />
    <steps_to_claim 
    />
    <Claim_btn />
  </div>
</template>
