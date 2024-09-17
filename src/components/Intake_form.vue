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

const states = [
  { name: 'Alabama', code: 'AL' },
  { name: 'Alaska', code: 'AK' },
  { name: 'Arizona', code: 'AZ' },
  { name: 'Arkansas', code: 'AR' },
  { name: 'California', code: 'CA' },
  { name: 'Colorado', code: 'CO' },
  { name: 'Connecticut', code: 'CT' },
  { name: 'Delaware', code: 'DE' },
  { name: 'Florida', code: 'FL' },
  { name: 'Georgia', code: 'GA' },
  { name: 'Hawaii', code: 'HI' },
  { name: 'Idaho', code: 'ID' },
  { name: 'Illinois', code: 'IL' },
  { name: 'Indiana', code: 'IN' },
  { name: 'Iowa', code: 'IA' },
  { name: 'Kansas', code: 'KS' },
  { name: 'Kentucky', code: 'KY' },
  { name: 'Louisiana', code: 'LA' },
  { name: 'Maine', code: 'ME' },
  { name: 'Maryland', code: 'MD' },
  { name: 'Massachusetts', code: 'MA' },
  { name: 'Michigan', code: 'MI' },
  { name: 'Minnesota', code: 'MN' },
  { name: 'Mississippi', code: 'MS' },
  { name: 'Missouri', code: 'MO' },
  { name: 'Montana', code: 'MT' },
  { name: 'Nebraska', code: 'NE' },
  { name: 'Nevada', code: 'NV' },
  { name: 'New Hampshire', code: 'NH' },
  { name: 'New Jersey', code: 'NJ' },
  { name: 'New Mexico', code: 'NM' },
  { name: 'New York', code: 'NY' },
  { name: 'North Carolina', code: 'NC' },
  { name: 'North Dakota', code: 'ND' },
  { name: 'Ohio', code: 'OH' },
  { name: 'Oklahoma', code: 'OK' },
  { name: 'Oregon', code: 'OR' },
  { name: 'Pennsylvania', code: 'PA' },
  { name: 'Rhode Island', code: 'RI' },
  { name: 'South Carolina', code: 'SC' },
  { name: 'South Dakota', code: 'SD' },
  { name: 'Tennessee', code: 'TN' },
  { name: 'Texas', code: 'TX' },
  { name: 'Utah', code: 'UT' },
  { name: 'Vermont', code: 'VT' },
  { name: 'Virginia', code: 'VA' },
  { name: 'Washington', code: 'WA' },
  { name: 'West Virginia', code: 'WV' },
  { name: 'Wisconsin', code: 'WI' },
  { name: 'Wyoming', code: 'WY' }
]

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
  <div class="m-6">
    <div class="h-fit bg-[#F0ECE5] w-full rounded-xl shadow-2xl">
      <form @submit.prevent="handleSubmitIntake" class="p-6" action="">
        <div class="flex flex-col justify-start items-start gap-5 mx-2">
          <label for="full_name">Full Name</label>
          <input
            v-model="formData.full_name"
            id="full_name"
            name="full_name"
            type="text"
            placeholder="Enter Full Name"
            class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
          />
          <div class="w-full flex flex-row gap-2">
            <div class="w-full">
              <label for="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter Phone Number"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label for="email">Email</label>
              <input
                v-model="formData.email"
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <label for="claimType">Claim Type</label>
          <select
            v-model="formData.claimType"
            id="claimType"
            name="claimType"
            class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
          >
            <option value="">Select Claim Type</option>
            <option value="accident">Accident</option>
            <option value="theft">Theft</option>
            <option value="vandalism">Vandalism</option>
          </select>
          <label for="vehicleDetails">Vehicle Details</label>
          <div class="flex flex-row w-full gap-2">
            <input
              v-model="formData.vehicleYear"
              id="vehicleYear"
              name="vehicleYear"
              type="text"
              placeholder="Year"
              class="w-1/4 h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
            />
            <input
              v-model="formData.vehicleMake"
              id="vehicleMake"
              name="vehicleMake"
              type="text"
              placeholder="Make"
              class="w-1/4 h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
            />
            <input
              v-model="formData.vehicleModel"
              id="vehicleModel"
              name="vehicleModel"
              type="text"
              placeholder="Model"
              class="w-1/4 h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
            />
            <input
              v-model="formData.vehicleTrim"
              id="vehicleTrim"
              name="vehicleTrim"
              type="text"
              placeholder="Trim"
              class="w-1/4 h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
            />
          </div>
          <div class="flex flex-row w-full gap-2">
            <div class="w-full">
              <label for="vehicleMileage">Vehicle Mileage</label>
              <input
                v-model="formData.vehicleMileage"
                id="vehicleMileage"
                name="vehicleMileage"
                type="text"
                placeholder="Enter Vehicle Mileage"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label for="accidentDate">Accident Date</label>
              <input
                v-model="formData.accidentDate"
                id="accidentDate"
                name="accidentDate"
                type="date"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <div class="flex flex-row w-full gap-2">
            <div class="w-full">
              <label for="state">State</label>
              <select
                v-model="formData.state"
                id="state"
                name="state"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              >
                <option value="">Select State</option>
                <option v-for="state in states" :key="state.code" :value="state.code">
                  {{ state.name }}
                </option>
              </select>
            </div>

            <div class="w-full">
              <label for="estimatedRepair">Estimated Repair Cost</label>
              <input
                v-model="formData.estimatedRepair"
                id="estimatedRepair"
                name="estimatedRepair"
                type="number"
                placeholder="Enter Estimated Repair Cost"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <div class="w-full flex flex-row gap-2">
            <div class="w-full">
              <label for="priorAccidents">Prior Accidents</label>
              <input
                v-model="formData.priorAccidents"
                id="priorAccidents"
                name="priorAccidents"
                type="text"
                placeholder="List Any Prior Accidents"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label for="prevEstimatedRepair">Previous Estimated Repair</label>
              <input
                v-model="formData.prevEstimatedRepair"
                id="prevEstimatedRepair"
                name="prevEstimatedRepair"
                type="number"
                placeholder="Enter Previous Repair Estimate"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <label for="leasing">Leasing</label>
          <div class="flex gap-3">
            <input type="radio" v-model="formData.leasing" value="yes" id="leasing_yes" />
            <label for="leasing_yes">Yes</label>
            <input type="radio" v-model="formData.leasing" value="no" id="leasing_no" />
            <label for="leasing_no">No</label>
          </div>
          <div class="w-full flex flex-row gap-2">
            <div class="w-full">
              <label for="insurance">Insurance Company</label>
              <input
                v-model="formData.insurance"
                id="insurance"
                name="insurance"
                type="text"
                placeholder="Enter Insurance Company"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label for="faultInsurance">Fault Insurance</label>
              <input
                v-model="formData.faultInsurance"
                id="faultInsurance"
                name="faultInsurance"
                type="text"
                placeholder="Enter Fault Insurance Details"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <label for="file">Upload File</label>
          <input id="file" name="file" type="file" />
          <label for="message">Additional Information</label>
          <textarea
            v-model="formData.message"
            id="message"
            name="message"
            placeholder="Enter additional information here..."
            class="w-full rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            class="w-fit h-fit p-3 m-auto bg-[#212121] text-white rounded-md hover:bg-[#3A3A3A] focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
