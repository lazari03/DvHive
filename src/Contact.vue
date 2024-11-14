<script setup>
import Navigation from './components/Nav.vue'
import ContactForm from './components/ContactForm.vue'
import FooterComponent from './components/FooterComponent.vue'
import CallBall from './components/call_ball.vue'
</script>

<template>
  <div class="bg-[#212121] font-montserrat font-medium relative">
    <CallBall />
    <div class="h-32"></div>
    <Navigation />
    <ContactForm />
    <FooterComponent />
  </div>
</template>
