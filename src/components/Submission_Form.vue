<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input'

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

async function handleSubmit() {
  formData.value.phone = iti.value.getNumber()

  if (!iti.value.isValidNumber()) {
    alert('Invalid phone number.')
    return
  }

  try {
    const response = await axios.post('http://localhost:3000/consultation-email', formData.value)
    console.log('Email sent successfully:', response.data)
    alert('Email sent successfully!')
  } catch (error) {
    console.error('Failed to send email:', error)
    alert('Failed to send email.')
  }
}
</script>

<template>
  <div class="h-fit bg-[#F0ECE5] w-2/6 rounded-xl shadow-2xl py-6">
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
          @click="validatePhone()"
          class="w-fit p-2 h-10 rounded-md bg-[#212121] text-white"
        >
          Receive free consultation
        </button>
      </div>
    </form>
  </div>
</template>
