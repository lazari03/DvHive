<script setup>
import CalculationStep from './CalculationStep.vue'

const steps = [
  {
    stepNr: 'Establish the Pre-Accident Market Value',
    stepDesc:
      'We begin by assessing your vehicle’s market value prior to the accident. This involves researching similar vehicles in your area and considering factors like the make, model, year, mileage, condition, and any additional features. This helps us estimate the car’s value before the incident.'
  },
  {
    stepNr: 'Evaluate the Post-Repair Value',
    stepDesc:
      'Once repairs are completed, we determine your vehicle’s current market value. We assess the quality of repairs, check for any visible or hidden damage, and examine the overall condition of the car after the repairs.'
  },
  {
    stepNr: 'Calculate the Diminished Value ',
    stepDesc:
      'The diminished value is calculated by subtracting the post-repair value from the pre-accident market value.'
  },
  {
    stepNr: 'Account for Additional Factors',
    stepDesc: `Additional factors, such as vehicle age, mileage, accident history, and local market conditions, may also impact the final diminished value. Public perception of the car's worth after the accident can also play a role, depending on jurisdiction and case specifics.`
  }
]
</script>

<template>
  <div class="m-6 relative">
    <h1
      class="text-white text-center text-3xl font-semibold w-fit m-auto z-10 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:w-1/6 after:h-[3px] after:bg-[#FDCE83] after:rounded-full after:transform after:-translate-x-1/2 after:transition-all after:-z-10"
    >
      How to calculate Diminished Value
    </h1>
    <h2 class="text-white text-xl font-normal w-fit m-auto p-6 text-center">
      Calculating a diminished value claim involves analyzing several important factors. Here’s our
      comprehensive process for determining your vehicle’s diminished value:
    </h2>
    <div class="flex flex-col w-full p-6 bg-[#F0ECE5] rounded-xl">
      <CalculationStep
        v-for="(step, index) in steps"
        :key="index"
        :stepNr="step.stepNr"
        :stepDesc="step.stepDesc"
      />
    </div>
  </div>
</template>
