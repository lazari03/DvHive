<template>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <!-- Close Button -->
        <button 
          @click="close" 
          type="button" 
          class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
  
        <!-- Title -->
        <h2 class="text-2xl font-bold mb-4 text-green-600">Success</h2>
        
        <!-- Message -->
        <p>Your form has been submitted successfully!</p>
        
        <!-- Continue Button -->
        <button 
          @click="close" 
          type="button" 
          class="py-2 px-3 text-sm font-medium text-center text-white rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Continue
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    show: Boolean
  })
  
  const emit = defineEmits(['close'])
  
  const close = () => {
    emit('close')
  }
  </script>
  