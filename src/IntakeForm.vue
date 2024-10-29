<script setup>
import { defineAsyncComponent } from 'vue'
import Intake_form from './components/Intake_form.vue'
import Consultation from './components/Consultation.vue'
import Navigation from './components/Nav.vue'

const FooterComponent = defineAsyncComponent(() => import('./components/FooterComponent.vue'))
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <div class="h-32"></div>
    <Navigation />
    <div class="flex flex-col w-full m-0 md:m-6 text-2xl text-white">
      <div class="m-0 md:m-6">
        <div class="flex flex-col gap-3 relative">
          <h1
            class="md:text-left text-center text-white lg:text-5xl text-3xl font-semibold my-4 text-shadow shadow-[#212121]"
          >
            Intake Form
          </h1>
          <span class="lg:text-4xl text-2xl md:text-left text-center">
            We Help You Recover Your Vehicle's Value
          </span>
          <span class="lg:text-4xl text-2xl relative z-20 md:text-left text-center">
            <RouterLink
              to="/contact"
              class="relative hover:after:duration-500 after:duration-500 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-1/6 after:h-[3px] after:bg-[#FDCE83] after:rounded-full after:transform after:-translate-x-1/2 after:transition-all hover:after:w-full after:z-0"
            >
              Contact Us Today!
            </RouterLink>
          </span>
        </div>
      </div>
    </div>
    <Intake_form />
    <Consultation />
    <FooterComponent />
  </div>
</template>
