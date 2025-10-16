<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input'
import submitPopup from './submitPopup.vue'

const iti = ref(null)

onMounted(() => {
  const input = document.querySelector('#phone')
  iti.value = intlTelInput(input, {
    utilsScript: '/node_modules/intl-tel-input/build/js/utils.js',
    containerClass: 'w-full',
    initialCountry: 'us'
  })
})

const formData = ref({
  full_name: '',
  email: '',
  phone: '',
  message: ''
})

const showModal = ref(false)

async function handleSubmit() {
  try {
    const response = await axios.post(
      'https://dvhive.onrender.com/consultation-email',
      formData.value
    )
    console.log('Email sent successfully:', response.data)
    showModal.value = true
  } catch (error) {
    console.error('Failed to send email:', error)
    alert('Failed to send email.')
  }
}
</script>

<template>
  <div
    :class="[
      $route.path === '/contact'
        ? 'h-fit bg-[#F0ECE5] w-full rounded-xl shadow-2xl py-6'
        : 'h-fit bg-[#F0ECE5] w-2/6 rounded-xl shadow-2xl py-6'
    ]"
  >
    <form @submit.prevent="handleSubmit" class="p-6" action="">
      <input
        v-model="formData.full_name"
        type="text"
        placeholder="Full Name"
        class="w-full h-10 rounded-md bg-[#D9D9D9] my-4 p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
        required
      />
      <input
        v-model="formData.email"
        type="email"
        placeholder="Email"
        class="w-full h-10 rounded-md bg-[#D9D9D9] my-4 p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
        required
      />
      <div class="flex flex-row my-4">
        <input
          id="phone"
          v-model="formData.phone"
          type="tel"
          placeholder="+1-1234567890"
          class="w-full h-10 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
          required
        />
      </div>
      <textarea
        v-model="formData.message"
        placeholder="Message"
        class="w-full h-28 rounded-md bg-[#D9D9D9] my-4 p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
        required
      ></textarea>
      <div class="flex justify-center">
        <button
          type="submit"
          class="w-fit h-fit p-2 rounded-md bg-[#FDCE83] text-black uppercase font-extrabold"
        >
          Receive free consultation
        </button>
        
      </div>
      <div class="flex justify-center pt-4">
      <a
        href="tel:+18885973282"
        class="w-fit h-fit p-2 rounded-md bg-[#FDCE83] text-black uppercase font-extrabold text-center"
      >
      Call Now
      </a>
</div>
    
      
    </form>
    <submitPopup :show="showModal" @close="showModal = false" />
  </div>
</template>