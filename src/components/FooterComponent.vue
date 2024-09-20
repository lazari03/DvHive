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
      <span class="text-white text-5xl"> DvHive </span>
    </div>
    <div class="w-3/4 h-fit p-6 py-4 z-10 flex gap-6">
      <div class="flex flex-col w-1/2">
        <span class="text-white text-xl md:text-4xl my-4"> Services </span>
        <span
          v-for="service in services"
          :key="service.text"
          class="text-white text-sm md:text-md my-2 cursor-pointer"
          @click="router.push(service.route)"
          >{{ service.text }}</span
        >
        <div class="flex pt-6 mt-12 gap-6">
          <div class="flex flex-col gap-4 w-fit">
            <font-awesome-icon icon="phone" class="text-white text-xl lg:text-2xl" />
            <font-awesome-icon :icon="['far', 'envelope']" class="text-white text-xl lg:text-2xl" />
            <font-awesome-icon icon="location-dot" class="text-white text-xl lg:text-2xl" />
          </div>
          <div class="flex flex-col gap-4 justify-center">
            <a href="tel:" class="text-white text-sm lg:text-lg w-fit"> +1 (123)-456-7890</a>
            <a href="mailto:username@mail.com" class="text-white text-sm lg:text-lg">
              username@mail.com</a
            >
            <span class="text-white text-sm lg:text-lg"> 1234 Street Name, City, State, Zip </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-1/2">
        <span class="text-white text-xl md:text-4xl my-4"> Legal </span>
        <span
          v-for="item in legal"
          :key="item.text"
          class="text-white text-sm md:text-md my-2 cursor-pointer"
          @click="router.push(item.route)"
          >{{ item.text }}</span
        >
        <span class="mt-6 py-6 text-white hidden md:block md:w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam omnis, quae, itaque
          dolores quas, eveniet expedita nesciunt eos pariatur quam ullam at exercitationem. Soluta
          id minima accusantium facere repellat harum.
        </span>
      </div>
    </div>
    <div class="absolute z-0 bottom-0 right-0 mix-blend-screen">
      <footer_logo class="h-48 md:h-full" />
    </div>
  </div>
</template>
