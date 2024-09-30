<script setup>
import { ref } from 'vue'
import DiminishedValue_Card from './DiminishedValue_Card.vue'
import DiminishedValue_Type_Desc from './DiminishedValue_Type_Desc.vue'

const selectedCard = ref(0) // Set default to the first card
const cards = [
  { title: "Immeadiate Diminished Value", description: "A" },
  { title: "Repair-Related Diminished Value", description: "B" },
  { title: "Inherent Diminished Value", description: "C" }
]

const selectCard = (index) => {
  selectedCard.value = index
}
</script>

<template>
  <div class="m-6">
    <div class="flex flex-col w-full gap-3">
      <h1
        class="text-center text-white text-4xl w-full relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-[5%] after:h-[3px] after:bg-[#FDCE83] after:rounded-full after:transform after:-translate-x-1/2 after:transition-all after:z-0"
      >
        Types of diminished value
      </h1>
      <div class="flex flex-row-reverse m-6">
        <div class="flex flex-col w-1/4 gap-3 overflow-hidden">
        <DiminishedValue_Card v-for="(card, index) in cards" :key="index" :title="card.title" @click="selectCard(index)" :isActive="selectedCard === index" />
      </div>
      <DiminishedValue_Type_Desc :text="cards[selectedCard].description" />
      </div>
    </div>
  </div>
</template>