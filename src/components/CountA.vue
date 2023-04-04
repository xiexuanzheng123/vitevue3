<script setup lang="ts">
import { ref } from 'vue'


const count = ref('this is A')
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>

<style scoped>
  div {
    color: red;
  }
</style>