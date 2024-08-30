<script setup>
import Logo from './icons/Logo.vue'
import NavBar from './NavBar.vue'
</script>

<template>
    <div class="bg-[#212121] h-screen w-screen">
        <div class="flex justify-between">
        <Logo class="h-20 my-2"/>
        <NavBar />
        </div>
        <div class="flex justify-between m-6 h-full">
            <div class="w-fit">
            <h1 class="text-white">Header</h1>
            <h2 class="text-white">Subheader</h2>
            </div>
            <div class="h-5/6 bg-[#F0ECE5] w-2/6 rounded-xl shadow-2xl">
                <div class="w-full h-full my-10 flex flex-col items-center">
                    <div class="h-10 w-3/4 bg-[#D9D9D9] rounded-md my-4">

                    </div>
                    <div class="h-10 w-3/4 bg-[#D9D9D9] rounded-md my-4">
                    </div>
                    <div class="h-10 w-3/4 bg-[#D9D9D9] rounded-md my-4">

                    </div>
                    <div class="h-10 w-3/4 bg-[#D9D9D9] rounded-md my-4">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  

  