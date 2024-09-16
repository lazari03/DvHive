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
  claimType: '',
  vehicleYear: '',
  vehicleMake: '',
  vehicleModel: '',
  vehicleTrim: '',
  vehicleMileage: '',
  accidentDate: '',
  state: '',
  estimatedRepair: '',
  priorAccidents: '',
  prevEstimatedRepair: '',
  leasing: '',
  insurance: '',
  faultInsurance: '',
  message: '',
  file: ''
})

async function handleSubmitIntake() {
  formData.value.phone = iti.value.getNumber()

  if (!iti.value.isValidNumber()) {
    alert('Invalid phone number.')
    return
  }

  try {
    const response = await axios.post('http://localhost:3000/intake-email', formData.value)
    console.log('Email sent successfully:', response.data)
    alert('Email sent successfully!')
  } catch (error) {
    console.error('Failed to send email:', error)
    alert('Failed to send email.')
  }
}
</script>

<template>
  <div class="h-fit bg-[#F0ECE5] w-full rounded-xl shadow-2xl py-6">
    <form @submit.prevent="handleSubmitIntake" class="p-6" action="">
        
    </form>
  </div>
</template>
