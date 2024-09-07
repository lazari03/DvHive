<script>
export default {
  props: {
    cardData: Object,
  },
};
</script>

<template>
  <div class="card" :id="`card-${id}`">
    <p>{{ cardData.description }}</p>
  </div>
</template>