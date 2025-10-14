<script setup>
const props = defineProps({
  src: { type: String, default: 'https://www.youtube.com/embed/kOnvljY4iRw?si=NRHaKbPALn1Nx8AM' },
  title: { type: String, default: 'YouTube video player' },
  // maxWidth accepts any CSS width value (e.g. '560px', '320px', '50%')
  maxWidth: { type: String, default: '560px' }
})
</script>

<template>
  <!-- Responsive 16:9 container constrained by maxWidth prop -->
  <div :style="{ maxWidth: props.maxWidth, margin: '0 auto' }">
    <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;width:100%;">
    <iframe
      :src="src"
      :title="title"
      style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
    </div>
  </div>
</template>

<style scoped>
/* optional: give iframe container a subtle radius on large viewports */
.video-wrapper iframe {
  display: block;
}
</style>
