<script setup>
import { defineAsyncComponent } from 'vue'
import Image_text_flex from './components/image_text_flex.vue'
import CallBall from './components/call_ball.vue'

const Hero = defineAsyncComponent(() => import('./components/Hero.vue'))
const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
const FAQ = defineAsyncComponent(() => import('./components/FAQ.vue'))
const Text_middle = defineAsyncComponent(() => import('./components/text_middle.vue'))
const DiminishedValue_Types = defineAsyncComponent(
  () => import('./components/DiminishedValue_Types.vue')
)
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <CallBall />
    <Hero
      header="Diminished Value"
      subheader="You may be eligible to file a diminished value claim through our diminished value appraisal services if your vehicle meets the following criteria. Check if you qualify today!"
    />

    <Text_middle
      title="Vehicle Diminished Value Claim Services"
      subtitle="You may be eligible to file a diminished value claim through our diminished value appraisal services if your vehicle meets the following criteria. Check if you qualify today!<br><br>Your vehicle is less than ten years old and has under 100,000 miles.
<br>It has no history of previous accidents, or if it has, the prior damage was minor.
You own the vehicle (financing or loan payments are acceptable, but leased vehicles are not).
The accident was caused by another driver who is at fault.
Let us assist you in recovering the value you deserve!"
    />
    <Image_text_flex
      alt="SideCrash"
      header="An example of a diminished value claim"
      image="https://github.com/dcifligu/consultation_images/blob/main/SideCrash.jpg?raw=true"
    />
    <div class="flex items-center justify-center flex-col w-fill gap-4">
      <Text_middle
        subtitle="Imagine you own a one-year-old luxury vehicle that was damaged in an accident caused by another driver. Even though the car was expertly repaired, you decide to file a claim because the accident may have reduced its market value.<br><br>To strengthen your claim, you get an appraisal from a trusted auto appraiser who evaluates the diminished value of your vehicle. They take into account details like the make, model, mileage, and extent of the damage. The appraiser concludes that the car’s diminished value is $5,000.<br><br>You then submit a claim to the at-fault driver’s insurance company, along with the appraisal report and supporting documentation, such as repair records and photos of the damage. In the claim, you request $5,000 as compensation for the diminished value.<br><br>The insurance company reviews your claim and supporting evidence. After assessing the situation, they agree with your request and compensate you for the $5,000 diminished value. You then receive a settlement check for that amount.<br><br>This scenario illustrates a potential outcome of filing a diminished value claim."
      />
    </div>
    <DiminishedValue_Types />
    <FAQ />
    <FooterComponent />
  </div>
</template>
