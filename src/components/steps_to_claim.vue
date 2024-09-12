<script setup>
import Steps from './steps.vue'

const stepsData = [
  {
    step_nr: '1',
    step_tittle: 'Certified Appraisal: ',
    step_text: 'We provide a detailed, certified diminished value appraisal of your vehicle.'
  },
  {
    step_nr: '2',
    step_tittle: 'Insurer Submission: ',
    step_text: 'We draft a strong letter to submit to your insurer, backed by the appraisal.'
  },
  {
    step_nr: '3',
    step_tittle: 'Negotiation Support: ',
    step_text: 'We guide and assist you through negotiations to secure fair compensation.'
  },
  {
    step_nr: '4',
    step_tittle: 'Maximize Your Return: ',
    step_text: 'Our service ensures you recover more than the cost of the appraisal.'
  }
]
</script>

<template>
  <div class="w-fill flex justify-evenly m-6 flex-col lg:flex-row gap-4 md:gap-0">
    <template v-for="step in stepsData" :key="step.step_nr">
      <Steps :step_nr="step.step_nr" :step_tittle="step.step_tittle" :step_text="step.step_text" />
    </template>
  </div>
</template>
