<!-- src/App.vue -->
<template>
  <TopNavbar />
  <router-view />
</template>

<script setup lang="ts">
import TopNavbar from '@/TopNavbar.vue'
</script>
<style>
/* 全局样式 */
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, sans-serif;
  background-color: #ffffff;
}
</style>