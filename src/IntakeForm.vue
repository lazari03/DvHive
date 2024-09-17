<script setup>
import { defineAsyncComponent } from 'vue'
import Intake_form from './components/Intake_form.vue'
import NavBar from './components/NavBar.vue'
import Logo from './components/icons/Logo.vue'

const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <div class="flex justify-between items-center relative z-30">
      <Logo class="h-20 my-2" />
      <NavBar />
    </div>
    <div class="flex flex-col w-full m-6 text-2xl text-white">
      <div class="m-6">
        <div class="flex flex-col gap-3">
          <h1 class="text-white text-5xl font-semibold my-4 text-shadow shadow-[#212121]">
            Intake Form
          </h1>
        
        <span class="text-4xl">
          We Help You Recover Your Vehicle's Value
        </span>
        <span class="text-4xl">
          <RouterLink
          to="/contact"
          class="relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-1/6 after:h-[3px] after:bg-[#FDCE83] after:rounded-full after:transform after:-translate-x-1/2 after:transition-all hover:after:w-full"
        >
          Contact Us Today!
        </RouterLink>
        </span>
      </div>
        <!-- <div class="flex flex-row gap-12 h-fit items-center">
          <span>
            Explore the Appraisal Service Tailored to Your Needs. From Free Quotes to In-Depth Evaluations, We’ve Got You Covered.
          </span>
          <div class="grid grid-rows-1 h-fit">
            <span>
              • Personalized expert support until your claim is fully resolved.
            </span>
            <span>
              • Licensed and certified auto appraisers with decades of experience.
            </span>
            <span>
              • A risk-free experience backed by our money-back guarantee, ensuring you recovery more than the cost of the appraisal report fee.
            </span>
          </div>
        </div> -->
      </div>
    </div>
    <Intake_form />
    <FooterComponent />
  </div>
</template>
