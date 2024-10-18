<script setup>
import Logo from './icons/Logo.vue'
import footer_logo from './icons/footer_logo.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRouter } from 'vue-router'

const router = useRouter()

const services = [
  { text: 'Home', route: '/' },
  { text: 'Intake Form', route: '/intake-form' },
  { text: 'Diminished Value', route: '/diminished-value' },
  { text: 'Pricing', route: '/pricing' },
  { text: 'FAQ', route: '/faq' },
  { text: 'Contact', route: '/contact' }
]

const legal = [
  { text: 'Privacy Policy', route: '/privacy-policy' },
  { text: 'Terms of Use', route: '/terms-of-use' }
]
</script>

<template>
  <div class="w-screen border-t-2 border-white mt-5 relative">
    <div class="flex w-fit gap-2 items-center p-6 z-10">
      <Logo class="w-12 h-auto" />
      <div class="flex flex-col gap-0">
        <h1 class="text-white text-xl font-semibold">DVHIVE</h1>
        <h2 class="text-white text-xs font-light">
          Diminished value<br />
          experts
        </h2>
      </div>
    </div>
    <div class="w-3/4 h-fit p-6 py-4 z-10 flex gap-6">
      <div class="flex flex-col w-1/2">
        <span class="text-[#FDCE83] text-xl md:text-4xl my-4"> Services </span>
        <span
          v-for="service in services"
          :key="service.text"
          class="text-white text-sm md:text-md my-2 cursor-pointer"
          @click="router.push(service.route)"
          >{{ service.text }}</span
        >
        <div class="flex pt-6 mt-12 gap-6">
          <div class="flex flex-col gap-4 w-fit">
            <font-awesome-icon icon="phone" class="text-[#FDCE83] text-xl lg:text-2xl" />
            <font-awesome-icon
              :icon="['far', 'envelope']"
              class="text-[#FDCE83] text-xl lg:text-2xl"
            />
            <font-awesome-icon icon="location-dot" class="text-[#FDCE83] text-xl lg:text-2xl" />
          </div>
          <div class="flex flex-col gap-4 justify-center">
            <a href="tel:+1 (888)597-3282" class="text-white text-sm lg:text-lg w-fit">
              +1 (888)597-3282</a
            >
            <a href="mailto:info@dvhive.com" class="text-white text-sm lg:text-lg">
              info@dvhive.com</a
            >
            <span class="text-white text-sm lg:text-lg"> 1234 Street Name, City, State, Zip </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-1/2">
        <span class="text-[#FDCE83] text-xl md:text-4xl my-4"> Legal </span>
        <span
          v-for="item in legal"
          :key="item.text"
          class="text-white text-sm md:text-md my-2 cursor-pointer"
          @click="router.push(item.route)"
          >{{ item.text }}</span
        >
        <span class="mt-6 py-6 text-white hidden md:block md:w-full">
          If you believe your vehicle’s value has dropped after a recent accident, you’re in the
          right place. We specialize in diminished value appraisals, helping you document and
          recover the lost value so you receive the compensation you deserve. Our expert team will
          guide you through each step of the process, ensuring it’s straightforward and stress-free.
        </span>
      </div>
    </div>
    <div class="absolute z-0 bottom-0 right-0 mix-blend-screen">
      <footer_logo class="h-48 md:h-full" />
    </div>
  </div>
  <h3 class="w-fit m-auto text-white">© 2024 DVHIVE. All rights reserved.</h3>
</template>
