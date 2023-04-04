<script setup lang="ts">
// import { ref } from 'vue'
const count = ref(1)
</script>
<template>
  <div>
    <span class="count">{{ count }}</span>
    <van-button type="success">成功按钮</van-button>
  </div>
</template>
<style scoped>
  .count {
    color: #ccc;
  }
</style>