<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Accordion from './Accordion.vue'

const faqs = [
  {
    title:
      'What is the expected timeframe for receiving the diminished value report for my vehicle?',
    text: 'You can expect to receive it within 48 hours at the latest.',
    active: false
  },
  {
    title: 'When is the appropriate time to file my diminished value claim?',
    text: 'You should file your diminished value claim with the insurance company after your car repairs are completed. This ensures you have a complete record of the repairs, which you can provide to us for assessment before submitting your claim.',
    active: false
  },
  {
    title: 'Is a successful outcome guaranteed?',
    text: "We offer a money-back guarantee to ensure you recover at least the cost of our report. To qualify for a refund, you must present our appraisal in small claims court and provide us with a copy of the court's ruling.\n \nYou can trust that you are working with a company renowned for its high success rate in diminished value claims.",
    active: false
  },
  {
    title: 'What is the cost of a diminished value report, and what does it include?',
    text: 'Our diminished value reports cost $350 and provide the following:\n\n •	A certified appraisal report that outlines the extent of your diminished value loss.\n •	Detailed instructions on how to file your claim, including a sample demand letter.\n•	Continuous support and assistance via phone and email throughout the claim process.\n\nOur report ensures you have all the tools necessary to file and maximize your diminished value claim. Many clients have found that the compensation they receive greatly exceeds the cost of our reports.',
    active: false
  },
  {
    title: 'Is it required to hire an attorney to recover my diminished value?',
    text: 'Generally, you do not need to hire an attorney to file a diminished value claim. If you do choose to retain legal representation, attorneys may take up to 30% of your settlement as their fee. However, having a lawyer does not always guarantee a higher settlement, and insurance companies are accustomed to handling such claims, so legal representation may not significantly affect their response.\n\nOur professionally prepared certified appraisal reports enable you to present your diminished value claim directly to the insurance company without legal assistance. If the insurer denies your claim or offers an inadequate settlement, you can file a lawsuit in small claims court on your own.',
    active: false
  },
  {
    title: 'Why should I be concerned about diminished value?',
    text: "After a car accident, your vehicle's market value can drop, even if it's repaired. Without filing a diminished value claim, you might face financial loss when selling the car. By filing a claim, you can receive compensation for the reduction in market value resulting from the accident.",
    active: false
  },
  {
    title: 'What support can I expect after purchasing my diminished value report?',
    text: 'After purchasing your diminished value report, our team offers support via phone and email to help you present your claim and recover your lost value. This includes guidance on how to handle insurance company offers, strategies for negotiating a fair settlement, and recommendations for effective communication during the claims process.',
    active: false
  }
]
</script>

<template>
  <div class="flex flex-col justify-center items-center m-6">
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
    <template v-for="(faq, index) in faqs">
      <Accordion :title="faq.title" :id="`faqs-${index}`" :active="faq.active">
        {{ faq.text }}
      </Accordion>
    </template>
  </div>
</template>
