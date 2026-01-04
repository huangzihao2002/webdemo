<!-- src/components/TopNavbar.vue -->
<template>
  <nav class="top-navbar" :class="{ 'is-visible': isVisible }">
    <div class="nav-container">
      <router-link to="/" class="nav-item">Home</router-link>
      <router-link to="/bags" class="nav-item">Bags</router-link>
      <router-link to="/accessories" class="nav-item">Accessories</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

// 监听鼠标是否在顶部区域
const handleMouseMove = (e: MouseEvent) => {
  // 如果鼠标 Y 坐标小于 50px，显示导航栏
  isVisible.value = e.clientY < 50
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.top-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(12, 12, 12, 0.95);
  backdrop-filter: blur(8px); /* 毛玻璃效果（可选） */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none; /* 隐藏时不可点击 */
}

.top-navbar.is-visible {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.nav-container {
  display: flex;
  justify-content: center;
  padding: 12px 0;
  max-width: 1200px;
  margin: 0 auto;
  gap: 32px;
}

.nav-item {
  font-size: 1rem;
  font-weight: 600;
  color: #636363;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
  transition: color 0.2s, background 0.2s;
}

.nav-item:hover,
.nav-item.router-link-exact-active {
  color: #4A90E2;
  background: rgba(74, 144, 226, 0.1);
}

/* 响应式：小屏堆叠 */
@media (max-width: 600px) {
  .nav-container {
    gap: 16px;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>