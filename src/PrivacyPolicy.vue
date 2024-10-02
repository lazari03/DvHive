<script setup>
import FooterComponent from './components/FooterComponent.vue'
import NavBar from './components/NavBar.vue'
import Logo from './components/icons/Logo.vue'
import Navigation from './components/Nav.vue'
</script>

<template>
  <div class="font-montserrat font-medium relative">
    <Navigation />
    <div class="m-6 w-fit h-fit">
      <div class="flex flex-col gap-3 w-full relative text-black">
        <h1
          class="relative z-10 text-white text-4xl w-fit after:content-[''] after:absolute after:bottom-[-5px] after:left-1/2 after:w-1/6 after:h-[3px] after:bg-[#FDCE83] after:rounded-full after:transform after:-translate-x-1/2 after:transition-all after:-z-10"
        >
          Privacy Policy
        </h1>
        <p class="my-2 text-gray-400 text-sm">
          *DVHIVE is committed to protecting your privacy. This policy outlines how we collect, use,
          and protect your personal information when you interact with our website.*
        </p>
        <div class="p-8 bg-white rounded-xl flex flex-col gap-6">
          <div class="my-2">
            <h2 class="text-[#212121] text-sm md:text-xl lg:text-2xl">
              1. What Information Do We Collect?
            </h2>
            <p class="text-[#212121] text-sm md:text-xl lg:text-lg font-light">
              We collect information from you when you fill out a form on our website. You may be
              asked to enter your name, email address, phone number, or other details to help us
              provide you with the best service possible.
            </p>
          </div>
          <div class="my-2">
            <h2 class="text-[#212121] text-sm md:text-xl lg:text-2xl">
              2. What Do We Use Your Information For?
            </h2>
            <p class="text-[#212121] text-sm md:text-xl lg:text-lg font-light">
              The information we collect may be used in the following ways:
            </p>
            <li class="text-[#212121] text-sm md:text-xl lg:text-lg font-light">
              <strong> To Process Transactions </strong> – Your personal information will not be
              sold, exchanged, transferred, or provided to any other company without your consent,
              except for the explicit purpose of delivering the product or service you requested.
            </li>
            <li class="text-[#212121] text-sm md:text-xl lg:text-lg font-light">
              <strong> To Send Periodic Emails </strong> – The email address you provide may be used
              to send you information and updates related to your inquiry, in addition to receiving
              occasional company news, updates, promotions, and related product or service
              information.
            </li>
          </div>
          <div class="my-2">
            <h2 class="text-[#212121] text-sm md:text-xl lg:text-2xl">3. Security Statement</h2>
            <p class="text-[#212121] text-sm md:text-xl lg:text-lg font-light">
              DVHIVE is dedicated to ensuring that your personal and payment information is secure.
              We utilize Secure Sockets Layer (SSL) technology to encrypt sensitive data, including
              credit card details, during the ordering process to safeguard your privacy.
            </p>
          </div>
          <div class="my-2">
            <h2 class="text-[#212121] text-sm md:text-xl lg:text-2xl">
              4. Changes to the Privacy Policy
            </h2>
            <p class="text-[#212121] text-sm md:text-md lg:text-lg font-light">
              DVHIVE reserves the right to modify or update this Privacy Policy at any time without
              prior notice. We encourage you to review this policy regularly to stay informed of any
              updates. Your continued use of the website following any changes constitutes your
              acceptance of those changes.
            </p>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>
