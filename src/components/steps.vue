<script setup>
defineProps(
    [
        'step_nr',
        'step_text',
        'step_tittle',
    ]
)
</script>

<template>
    <div class="w-fit">
      <div class="flex flex-col justify-center items-center">
        <div
        class="flex justify-center items-center p-4 border-4 border-[#FDCE83] rounded-full w-32 h-32 text-2xl text-white font-bold">
        <h1>{{step_nr}}</h1>
        </div>
        <span class="text-white text-lg text-center font-normal m-5">
            <strong class="text-xl">
                {{ step_tittle }}
            </strong>
            <br>
                {{step_text}}        
        </span>
        <div class="w-1/6 h-0 border-2 border-[#FDCE83] rounded-xl"></div>
      </div>
    </div>
</template>