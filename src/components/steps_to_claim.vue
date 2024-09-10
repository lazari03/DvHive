<script setup>
import Steps from './steps.vue'
</script>

<template>
  <div class="w-fill flex justify-evenly m-6 flex-col md:flex-row gap-4 md:gap-0">
    <Steps
      step_nr="1"
      step_tittle="Certified Appraisal: "
      step_text="We provide a detailed, certified diminished value appraisal of your vehicle."
    />
    <Steps
      step_nr="2"
      step_tittle="Insurer Submission: "
      step_text="We draft a strong letter to submit to your insurer, backed by the appraisal."
    />
    <Steps
      step_nr="3"
      step_tittle="Negotiation Support: "
      step_text="We guide and assist you through negotiations to secure fair compensation."
    />
    <Steps
      step_nr="4"
      step_tittle="Maximize Your Return: "
      step_text="Our service ensures you recover more than the cost of the appraisal."
    />
  </div>
</template>
