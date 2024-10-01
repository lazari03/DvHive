<script setup>
import NavBar from './components/NavBar.vue'
import Logo from './components/icons/Logo.vue'
</script>
<template>
  <div class="m-6">
    <div class="w-full h-fit flex flex-row justify-between items-center">
      <div class="flex-row flex w-fit h-fit items-center">
        <Logo class="h-20 w-14 ml-6" />
        <div class="flex flex-col gap-0">
          <h1 class="text-black text-2xl font-semibold">DVHIVE</h1>
          <h2 class="text-black text-xs font-light">
            Diminished value<br />
            experts
          </h2>
        </div>
      </div>
      <NavBar />
      <div class="w-fit h-fit p-2 flex">Claim free consultation</div>
    </div>
  </div>
</template>
