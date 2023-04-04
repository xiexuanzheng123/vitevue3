<script setup lang="ts">
import { ref } from 'vue'
const count = ref('this is B')
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>

<style scoped>
  div {
    color: yellow;
  }
</style>