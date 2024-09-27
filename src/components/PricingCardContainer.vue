<script setup>
import PricingCard from './PricingCard.vue'

const cards = [
  {
    price: 0,
    title: 'Free Consultation',
    features: [
      'Free total loss and diminished value quote',
      'Discover your vehicle’s current market value',
      'Receive answers to all your questions'
    ]
  },
  {
    price: 350,
    title: 'Diminished Value Appraisal',
    features: [
      'Certified diminished value appraisal',
      'Price guides and market data analysis',
      'Custom demand letter',
      'Appraisal clause representation',
      'Negotiation with the opposing appraiser',
      'Umpire selection assistance',
      'Phone and email support until your claim is fully settled'
    ]
  },
  {
    price: 399,
    title: 'Total Loss Appraisal',
    features: [
      'Certified fair market value appraisal',
      'Price guides and market data analysis',
      'Appraisal clause representation',
      'Negotiation with the opposing appraiser',
      'Assistance with umpire selection',
      'Ongoing phone and email support until your claim is fully resolved'
    ]
  }
]
</script>

<template>
  <div class="m-6">
    <div class="flex flex-col lg:flex-row gap-12 justify-center items-stretch w-full">
      <PricingCard
        v-for="(card, index) in cards"
        :key="index"
        :price="card.price"
        :title="card.title"
        :features="card.features"
      />
    </div>
  </div>
</template>
