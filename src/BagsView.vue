<!-- src/views/BagsView.vue -->
<template>
  <div class="page">
    <h1>Bags Collection</h1>
    <p>This is the BAGS page. You can showcase your bag products here.</p>
    <button @click="goBack" class="back-btn">← Back to Home</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => router.push({ name: 'home' })
</script>

<style scoped>
.page {
  padding: 60px 20px;
  text-align: center;
  background: #f8f9fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page h1 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.page p {
  font-size: 1.1rem;
  color: #555;
  max-width: 600px;
  line-height: 1.6;
}

.back-btn {
  margin-top: 24px;
  padding: 10px 24px;
  font-size: 1rem;
  background: #4A90E2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.back-btn:hover {
  background: #357abd;
}
</style>