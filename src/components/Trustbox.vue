<!-- src/components/TrustBox.vue -->
<template>
    <!-- TrustBox widget - Review Collector -->
    <div class="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="6749c6107a770a6694f984ae" data-style-height="52px" data-style-width="100%">
      <a href="https://www.trustpilot.com/review/dvhive.com" target="_blank" rel="noopener">Trustpilot</a>
    </div>
    <!-- End TrustBox widget -->
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  
  onMounted(() => {
    const script = document.createElement('script')
    script.src = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
    script.async = true
    document.body.appendChild(script)
  })
  </script>
  
  <style scoped>
  .trustpilot-widget {
    margin: 20px 0;
  }
  </style>