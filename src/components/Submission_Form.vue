<script setup>
const formData = {
  full_name: '',
  email: '',
  phone: '',
  message: ''
}

function handleSubmit() {
  console.log(formData)
}
</script>

<template>
  <div class="h-fit bg-[#F0ECE5] w-2/6 rounded-xl shadow-2xl py-6">
    <form @submit="handleSubmit" class="p-6">
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
      <input
        v-model="formData.phone"
        type="tel"
        placeholder="Phone Number"
        class="w-full h-10 rounded-md bg-[#D9D9D9] my-4 p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
        required
      />
      <textarea
        v-model="formData.message"
        placeholder="Message"
        class="w-full h-28 rounded-md bg-[#D9D9D9] my-4 p-3 focus:border-[#212121] focus:border-solid focus:border-2 focus:outline-none"
        required
      ></textarea>
      <div class="flex justify-center">
        <button type="submit" class="w-fit p-2 h-10 rounded-md bg-[#212121] text-white">
          Recive free consultation
        </button>
      </div>
    </form>
  </div>
</template>
