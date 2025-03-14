<script setup lang="ts">
import Button from './components/Button/Button.vue'
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin-bottom: 40px;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
}

h2 {
  color: #666;
  margin-bottom: 20px;
}

.button-row {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}
</style>
