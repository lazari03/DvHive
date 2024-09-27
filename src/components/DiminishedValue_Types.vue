<script setup>
import DiminishedValue_Card from './DiminishedValue_Card.vue'
</script>

<template>
  <div class="m-6">
    <div class="flex flex-col w-full gap-3">
      <h1
        class="text-center text-white text-4xl w-full relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-1/6 after:h-[3px] after:bg-[#FDCE83] after:rounded-full after:transform after:-translate-x-1/2 after:transition-all after:z-0"
      >
        Types of diminished value
      </h1>
      <div class="flex flex-row w-full gap-3 overflow-hidden">
        <DiminishedValue_Card title="test" />
        <DiminishedValue_Card title="test" />
        <DiminishedValue_Card title="test" />
      </div>
      <div class="w-full">
        <span class="text-white text-md m-auto w-fit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tenetur! Rem blanditiis
          id ut! Minima id perspiciatis quis corrupti ipsum dolorem, labore natus corporis,
          recusandae tenetur nobis magni reiciendis quam.
        </span>
      </div>
    </div>
  </div>
</template>
