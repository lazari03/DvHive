<script setup>
import FooterComponent from './components/FooterComponent.vue'
import NavBar from './components/NavBar.vue'
import Logo from './components/icons/Logo.vue'
</script>
<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <div class="flex justify-between items-center relative z-30">
      <Logo class="h-20 my-2" />
      <NavBar />
    </div>
    <div class="m-6 w-fit">
      <div class="flex flex-col gap-3 w-full">
        <h1
          class="text-white text-4xl w-fit relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-1/6 after:h-[3px] after:bg-[#FDCE83] after:rounded-full after:transform after:-translate-x-1/2 after:transition-all after:z-0"
        >
          Terms of Use
        </h1>
        <span class="my-2 text-gray-400 text-sm">
          *Please read these Terms of Use carefully before using this website.*
        </span>
        <div class="my-2">
          <h2 class="text-white text-sm md:text-xl lg:text-2xl">1. Introduction</h2>
          <p class="text-white text-sm md:text-xl lg:text-2xl font-light">
            These terms and conditions govern your use of the DVHIVE website. By accessing or using
            this website, you agree to be bound by these terms and conditions in full. If you do not
            agree with any part of these terms, you must not use this website.
          </p>
        </div>
        <div class="my-2">
          <h2 class="text-white text-sm md:text-xl lg:text-2xl">
            2. DVHIVE Message Terms & Conditions
          </h2>
          <p class="text-white text-sm md:text-xl lg:text-2xl font-light">
            DVHIVE provides this policy to explain the use of SMS text messaging. By opting in
            through our website forms, you consent to receive up to four text messages related to
            your inquiries or service requests at the phone number you provide.
            <br /><br />
            Opting in to receive text messages is not a requirement for purchasing any services or
            products from DVHIVE. By providing your phone number and opting in, you confirm that you
            have the right or permission to use the provided number.
            <br /><br />
            DVHIVE does not charge for text messaging services, but you are responsible for any fees
            or charges your mobile provider may impose, including message and data rates.
          </p>
        </div>
        <div class="my-2">
          <h2 class="text-white text-sm md:text-xl lg:text-2xl">3. No Warranties</h2>
          <p class="text-white text-sm md:text-xl lg:text-2xl font-light">
            This website is provided “as is,” without any representations or warranties, express or
            implied. DVHIVE makes no representations or warranties regarding the website or the
            information and materials provided.
            <br /><br />
            Without limiting the foregoing, DVHIVE does not warrant that:
            <br />
            • This website will always be available, or available at all; or
            <br />
            • The information on this website is complete, accurate, or non-misleading.

            <br /><br />
            Nothing on this website constitutes, or is meant to constitute, legal, financial, or
            medical advice of any kind. If you require advice, you should consult the appropriate
            professional.
          </p>
        </div>
        <div class="my-2">
          <h2 class="text-white text-sm md:text-xl lg:text-2xl">4. Limitations of Liability</h2>
          <p class="text-white text-sm md:text-xl lg:text-2xl font-light">
            DVHIVE will not be liable to you (whether under contract, tort, or otherwise) concerning
            your use of this website:
            <br />
            • For any direct losses where the website is provided free of charge;
            <br />
            • For any indirect, special, or consequential loss; or
            <br />
            • For any business losses, including loss of revenue, income, profits, anticipated
            savings, business relationships, reputation, or data.
            <br /><br />
            These limitations apply even if DVHIVE has been specifically advised of potential loss.
          </p>
        </div>
        <div class="my-2">
          <h2 class="text-white text-sm md:text-xl lg:text-2xl">5. Service and Report Terms</h2>
          <p class="text-white text-sm md:text-xl lg:text-2xl font-light">
            DVHIVE does not provide legal advice. Information on the website or in any reports,
            appraisals, or documents available for purchase does not constitute legal advice. All
            reports are provided "as is" based on our professional opinion, experience, and
            training.
          </p>
        </div>
        <div class="my-2">
          <h2 class="text-white text-sm md:text-xl lg:text-2xl">6. Your Consent</h2>
          <p class="text-white text-sm md:text-xl lg:text-2xl font-light">
            By using this website, requesting services, or conducting any business with DVHIVE, you
            agree to the terms and conditions outlined herein. You also agree to hold DVHIVE
            harmless for any errors or omissions arising from our professional services.
          </p>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>
