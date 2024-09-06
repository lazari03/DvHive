<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="text-white capitalize flex justify-center my-12 items-center py-6">
      <span class="text-5xl">Frequently Asked Questions</span>
      <font-awesome-icon :icon="['far', 'comment']" class="text-5xl mx-2" />
    </div>
    <span class="w-2/3 text-white text-md text-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatibus iste velit
      aspernatur rem obcaecati mollitia doloribus alias earum illo consequatur necessitatibus culpa
      dicta a quibusdam, molestias recusandae dolorum fugit.
    </span>
    <div class="w-12 my-4 h-0 border-2 border-[#FDCE83] rounded-xl"></div>
  </div>
</template>


