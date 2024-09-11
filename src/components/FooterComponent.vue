<script setup>
import Logo from './icons/Logo.vue'
import footer_logo from './icons/footer_logo.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="w-screen border-t-2 border-white mt-5 relative">
    <div class="flex w-fit gap-2 items-center p-6 z-10">
      <Logo class="w-12 h-auto" />
      <span class="text-white text-5xl"> DvHive </span>
    </div>
    <div class="w-3/4 h-fit p-6 py-4 z-10 flex gap-6">
      <div class="flex flex-col w-1/2">
        <span class="text-white text-xl lg:text-4xl my-4"> Services </span>
        <span class="text-white text-sm lg:text-lg my-2"> Home </span>
        <span class="text-white text-sm lg:text-lg my-2"> Intake Form </span>
        <span class="text-white text-sm lg:text-lg my-2"> Diminished Value </span>
        <span class="text-white text-sm lg:text-lg my-2"> Pricing </span>
        <span class="text-white text-sm lg:text-lg my-2"> FAQ </span>
        <div class="flex pt-6 mt-12 gap-6">
          <div class="flex flex-col gap-4 w-fit">
            <font-awesome-icon icon="phone" class="text-white text-xl lg:text-2xl" />
            <font-awesome-icon :icon="['far', 'envelope']" class="text-white text-xl lg:text-2xl" />
            <font-awesome-icon icon="location-dot" class="text-white text-xl lg:text-2xl" />
          </div>
          <div class="flex flex-col gap-4 w-fit justify-center">
            <a href="tel:" class="text-white text-sm lg:text-lg"> +1 (123)-456-7890</a>
            <a href="mailto:username@mail.com" class="text-white text-sm lg:text-lg">
              username@mail.com</a
            >
            <span class="text-white text-sm lg:text-lg"> 1234 Street Name, City, State, Zip </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-1/2">
        <span class="text-white text-xl lg:text-4xl my-4"> Legal </span>
        <span class="text-white text-sm lg:text-lg my-2"> Privacy Policy </span>
        <span class="text-white text-sm lg:text-lg my-2"> Terms of Use </span>
        <span class="mt-6 py-6 lg:w-3/4 w-0 text-white hidden lg:block">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam omnis, quae, itaque
          dolores quas, eveniet expedita nesciunt eos pariatur quam ullam at exercitationem. Soluta
          id minima accusantium facere repellat harum.
        </span>
      </div>
    </div>
    <div class="absolute z-0 bottom-0 right-0 mix-blend-screen">
      <footer_logo class="h-48 lg:h-full" />
    </div>
  </div>
</template>
