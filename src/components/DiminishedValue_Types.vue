<script setup>
import { ref } from 'vue'
import DiminishedValue_Card from './DiminishedValue_Card.vue'
import DiminishedValue_Type_Desc from './DiminishedValue_Type_Desc.vue'

const selectedCard = ref(0) // Set default to the first card
const cards = [
  {
    title: 'Immediate Diminished Value',
    description:
      'The difference in market value before being involved in an accident and immediately after the loss (before repairs).\n\nFor example, a vehicle was worth $25,000 before the accident. Now, the car it’s worth only $7,000 in its damaged state, as it has not been repaired yet.\n\n$25,000 – $7,000 = $18,000 Immediate diminished value \n\nMost people will end up repairing their vehicle after an accident. Therefore, immediate diminished value is not a common claim that is made.',
    smalltitle: 'Immediate Diminished Value'
  },
  {
    title: 'Repair-Related Diminished Value',
    description:
      'Despite the repairs, the vehicle’s value remains less than before the damage occurred. This is the most common type of diminished value. It’s also the type of diminished value that an insurance company will compensate you for.\n\nFor example, a vehicle was worth $30,000 just before being damaged. After being repaired, the car is worth $24,000.\n\n$30,000 – $24,000 = $6,000 Inherent Diminished Value\n\nEven with high-quality repairs, potential buyers are unwilling to pay as much for a car that has been previously damaged.',
    smalltitle: 'Repair-Related Diminished Value'
  },
  {
    title: 'Inherent Diminished Value',
    description:
      'Loss in market value due to substandard collision repairs. This may include mismatched paint or misaligned body panels where the gaps are noticeably off.\n\nRepair-related diminished value is usually the responsibility of the repair facility and is the result of poor workmanship. Due to the repair shop’s mistake, it is not something that an insurance company would typically cover when filing a claim.',
    smalltitle: 'Inherent Diminished Value'
  }
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
      <div class="flex lg:flex-row-reverse flex-col m-6 bg-[#F0ECE5] p-4 rounded-xl">
        <div
          class="flex lg:flex-col lg:w-1/4 w-full gap-3 overflow-hidden items-center justify-center"
        >
          <DiminishedValue_Card
            v-for="(card, index) in cards"
            :key="index"
            :title="card.title"
            @click="selectCard(index)"
            :isActive="selectedCard === index"
          />
        </div>
        <DiminishedValue_Type_Desc
          :text="cards[selectedCard].description"
          :smalltitle="cards[selectedCard].smalltitle"
        />
      </div>
    </div>
  </div>
</template>
