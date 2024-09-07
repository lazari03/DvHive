<script>

import card from './card.vue';

export default {
  components: {
    card,
  },
  data() {
    return {
      cards: [
        {  description: 'This is the first card' },
        // add more cards as needed
      ],
    };
  },
};
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full my-12 py-2">
        <span class="text-5xl text-white">What Our Clients say</span>
        <span class="tetx-md text-white w-2/5 text-center my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quas, veritatis atque dignissimos reprehenderit veniam beatae assumenda voluptate enim aliquid similique tempora voluptas blanditiis quia vel laudantium recusandae? Nisi, culpa!</span>
        <div class="w-12 h-0 border-2 border-[#FDCE83] rounded-xl"></div>
        <div class="flex justify-center gap-10">
            <card
            v-for="card in cards" 
            :key="card.id" 
            :cardData="card" 
            />
        </div>
    </div>
</template>