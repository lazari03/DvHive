<script>
import card from './card.vue'

export default {
  components: {
    card
  },
  data() {
    return {
      cards: [
        {
          description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          description:
            'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="my-12 py-2 m-6">
    <div class="flex flex-col items-center justify-center w-full">
      <span class="text-5xl text-white lg:text-left text-center">What Our Clients say</span>
      <span class="tetx-md text-white lg:w-2/5 text-center my-5 w-fit"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quas, veritatis atque
        dignissimos reprehenderit veniam beatae assumenda voluptate enim aliquid similique tempora
        voluptas blanditiis quia vel laudantium recusandae? Nisi, culpa!</span
      >
      <div class="w-12 h-0 border-2 border-[#FDCE83] rounded-xl"></div>
    </div>

    <div class="flex justify-center items-center gap-10 h-full lg:flex-row flex-col">
      <card v-for="card in cards" :key="card.id" :cardData="card" />
    </div>
  </div>
</template>
