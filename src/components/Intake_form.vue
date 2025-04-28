<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input'
import submitPopup from './submitPopup.vue'


const iti = ref(null)
const fileInput = ref(null)
const showModal = ref(false)

onMounted(() => {
  const input = document.querySelector('#phone')
  iti.value = intlTelInput(input, {
    utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.8/build/js/utils.js', // Use a reliable CDN
    containerClass: 'w-full',
    initialCountry: 'us'
  })
})

const formData = ref({
  full_name: '',
  email: '',
  phone: '',
  claimType: '',
  vinNumber: '',
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
  console.log('Form submission triggered'); // Debugging form submission

  formData.value.phone = iti.value.getNumber()

  console.log('Phone number:', formData.value.phone) // Debugging phone number
  console.log('Is valid number:', iti.value.isValidNumber()) // Debugging validation status

  if (!iti.value.isValidNumber()) {
    alert('Invalid phone number.')
    return
  }

  const form = new FormData()
  Object.keys(formData.value).forEach((key) => {
    form.append(key, formData.value[key])
  })

  if (fileInput.value.files.length > 0) {
    for (let i = 0; i < fileInput.value.files.length; i++) {
      form.append('file', fileInput.value.files[i])
    }
  }

  try {
    const response = await axios.post('https://dvhiveapi.onrender.com/intake-email', form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log('Email sent successfully:', response.data)
    showModal.value = true
  } catch (error) {
    console.error('Failed to send email:', error.response ? error.response.data : error.message)
    alert(`Failed to send email: ${error.response ? error.response.data : error.message}`) // Detailed error
  }
}

const handleFileChange = () => {
  console.log('File changed!')
}
</script>

<template>
  <div class="m-6">
    <div class="h-fit bg-[#F0ECE5] w-full rounded-xl shadow-2xl">
      <form @submit.prevent="handleSubmitIntake()" class="p-6" action="">
        <div class="flex flex-col justify-start items-start gap-5 mx-2">
          <label for="full_name">Name *</label>
          <input
            v-model="formData.full_name"
            id="full_name"
            name="full_name"
            type="text"
            required
            placeholder="Full Name"
            class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
          />
          <div class="w-full flex md:flex-row flex-col gap-2">
            <div class="w-full">
              <label for="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Enter Phone Number"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
            <div class="w-full">
              <label for="email">Email *</label>
              <input
                v-model="formData.email"
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter Email"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <div class="w-full flex flex-row gap-2">
            <div class="w-full">
              <label for="claimType">Claim Type *</label>
              <select
                v-model="formData.claimType"
                id="claimType"
                name="claimType"
                required
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              >
                <option value="">Select Claim Type</option>
                <option value="Diminished Value">Diminished Value</option>
                <option value="Total Loss">Total Loss</option>
              </select>  
            </div>
            <div class="w-full">
              <label for="vinNumber">VIN Number*</label>

              <input
              v-model="formData.vinNumber"
              id="vinNumber"
              name="vinNumber"
              type="text"
              placeholder="VIN Number"
              required
              class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <label for="vehicleDetails">Vehicle Details *</label>
          <div class="flex lg:flex-row flex-col w-full gap-2">
            <input
              v-model="formData.vehicleYear"
              id="vehicleYear"
              name="vehicleYear"
              type="text"
              placeholder="Year"
              required
              class="lg:w-1/4 w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
            />
            <input
              v-model="formData.vehicleMake"
              id="vehicleMake"
              name="vehicleMake"
              type="text"
              placeholder="Make"
              required
              class="lg:w-1/4 w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
            />
            <input
              v-model="formData.vehicleModel"
              id="vehicleModel"
              name="vehicleModel"
              type="text"
              required
              placeholder="Model"
              class="lg:w-1/4 w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
            />
            <input
              v-model="formData.vehicleTrim"
              id="vehicleTrim"
              name="vehicleTrim"
              required
              type="text"
              placeholder="Trim Level (SE, SE, LE, Base, etc)"
              class="lg:w-1/4 w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
            />
          </div>
          <div class="flex lg:flex-row flex-col w-full gap-2">
            <div class="w-full flex-col flex">
              <label for="vehicleMileage">Approximate mileage on accident date *</label>
              <input
                v-model="formData.vehicleMileage"
                id="vehicleMileage"
                name="vehicleMileage"
                required
                type="text"
                placeholder="Enter Vehicle Mileage"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
            <div class="w-full flex-col flex lg:block">
              <label for="accidentDate">Date of Accident *</label>
              <input
                v-model="formData.accidentDate"
                id="accidentDate"
                name="accidentDate"
                required
                type="date"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <div class="flex lg:flex-row flex-col w-full gap-2">
            <div class="w-full">
              <label for="state">State where the accident happened *</label>
              <select
                v-model="formData.state"
                id="state"
                name="state"
                required
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              >
                <option value="">Select State</option>
                <option v-for="state in states" :key="state.code" :value="state.code">
                  {{ state.name }}
                </option>
              </select>
            </div>

            <div class="w-full">
              <label for="estimatedRepair">Estimated repair costs *</label>
              <input
                v-model="formData.estimatedRepair"
                id="estimatedRepair"
                name="estimatedRepair"
                type="number"
                required
                placeholder="Enter Estimated Repair Cost"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              />
            </div>
          </div>
          <div class="w-full flex lg:flex-row flex-col gap-2">
            <div class="w-full">
              <label for="priorAccidents">Any prior accidents or repairs? *</label>
              <select
                v-model="formData.priorAccidents"
                id="priorAccidents"
                name="priorAccidents"
                required
                placeholder="List Any Prior Accidents"
                class="w-full h-12 rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div class="w-full">
              <label for="prevEstimatedRepair"
                >If yes, estimated repair cost of the previous accident</label
              >
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
          <label for="leasing"
            >Are you leasing your vehicle? (Vehicle will be turned back in on a set date)</label
          >
          <div class="flex gap-3">
            <input type="radio" v-model="formData.leasing" value="yes" id="leasing_yes" />
            <label for="leasing_yes">Yes</label>
            <input type="radio" v-model="formData.leasing" value="no" id="leasing_no" />
            <label for="leasing_no">No</label>
          </div>
          <div class="w-full flex lg:flex-row flex-col gap-2">
            <div class="w-full">
              <label for="insurance">Name of your insurance company?</label>
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
              <label for="faultInsurance">Name of at-fault insurance company?</label>
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
          <label for="file"
            >File Upload (repair estimate, supplement, final bill, total loss valuation, etc)</label
          >
          <input type="file" ref="fileInput" @change="handleFileChange" multiple />
          <label for="message">Any additional information to add?</label>
          <textarea
            v-model="formData.message"
            id="message"
            name="message"
            placeholder="Enter additional information here..."
            class="w-full rounded-md bg-[#D9D9D9] p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
          ></textarea>
          <div class="flex flex-row gap-3 items-start">
            <input id="checkbox" name="checkbox" type="checkbox" required />
            <label for="checkbox" class="text-sm text-[#212121] focus:outline-none font-light"
              >Check this box to give DVHIVE consent to send text messages related to your free
              estimate request. Consent is not a condition to any purchase. Message and data rates
              may apply. View
              <RouterLink to="/terms-of-use" class="underline hover:text-[#ffc971]">
                Terms of Use</RouterLink
              >.
            </label>
          </div>
          <button
            type="submit"
            class="w-fit h-fit p-3 m-auto bg-[#212121] text-white rounded-md hover:bg-[#3A3A3A] focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
      <submitPopup :show="showModal" @close="showModal = false" />
    </div>
  </div>
</template>
