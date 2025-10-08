<script setup>
import Submission_Form from './Submission_Form.vue'
import Claim_btn from './claim_btn.vue'
</script>
<template>
  <section class="min-h-screen bg-cover">
    <!-- Desktop layout -->
    <div class="hidden md:block">
      <div class="flex flex-col min-h-screen">
  <div class="container flex flex-1 px-6 py-4 mx-auto items-center">
          <div class="flex-1 flex justify-center -mx-6">
            <!-- Text on the left -->
            <div class="text-white w-1/2 mx-6 mt-0">
              <h1 class="text-2xl font-semibold capitalize lg:text-3xl text-white">
                Contact Us for a Free Consultation
              </h1>
              <p class="max-w-xl mt-6">
                Let us help you recover the value of your vehicle! Reach out today for expert guidance
                and support.
              </p>
              <ul class="my-12">
                <li class="text-xl font-bold">
                  Customized Appraisal Solutions:<br />
                  <span class="text-lg font-normal">
                    Get an appraisal tailored to your specific needs. From free quotes to in-depth
                    evaluations, we’ve got everything covered for you.
                  </span>
                </li>
                <li class="text-xl font-bold mt-4">
                  Expert Assistance:<br />
                  <span class="text-lg font-normal">
                    Work with licensed and certified auto appraisers with decades of experience. We’ll
                    provide personalized guidance every step of the way until your claim is settled.
                  </span>
                </li>
                <li class="text-xl font-bold mt-4">
                  Risk-Free Guarantee:<br />
                  <span class="text-lg font-normal">
                    Enjoy a worry-free experience with our money-back guarantee, ensuring you recover
                    more than the cost of the appraisal report fee.
                  </span>
                </li>
              </ul>
            </div>
            <!-- Form on the right -->
            <div class="w-1/2 mx-6 flex flex-col items-center">
              <div class="w-full p-1 lg:p-6">
                <Submission_Form class="w-full pt-3" />
              </div>
              <Claim_btn />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile layout -->
    <div class="flex flex-col md:hidden px-6 py-12 items-center">
  <h1 class="text-2xl font-semibold capitalize text-center mb-4 text-white">
        Contact Us for a Free Consultation
      </h1>
      <Submission_Form class="w-full pt-3 mb-4" />
      <Claim_btn />
    </div>
  </section>
  <img src="../assets/images/Contact.jpeg" alt="Contact Us" class="object-cover w-full h-96" />
</template>
