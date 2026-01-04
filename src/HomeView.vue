<!-- src/views/HomeView.vue -->
<template>
  <div class="home-container">
    <!-- 首屏：欢迎区域 -->
    <section class="hero" id="home">
      <h1>Welcome to Our Store</h1>
      <p>Scroll down to explore our collections.</p>
    </section>

    <!-- 第二屏：左右大图 -->
    <section class="products-section" id="products">
      <div class="image-grid">
        <div class="product-card" @click="goTo('bags')">
          <img
            src="https://ts1.tc.mm.bing.net/th/id/R-C.83ce159a9ed7f779064a0205dace5490?rik=rpi8VMtS5BBKCA&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn22%2f300%2fw1080h1620%2f20180730%2f4267-hhacrcc7935893.jpg&ehk=fvyzRbYUGsifE%2bEk65WCuIWjyyBYew%2bYeDvaYLT0RDs%3d&risl=&pid=ImgRaw&r=0"
            alt="Bags"
            class="product-image"
          />
          <div class="product-label">BAGS</div>
        </div>
        <div class="product-card" @click="goTo('accessories')">
          <img
            src="https://img1.cfw.cn/images/news_images/title_images/2021/04/19/20210419110208760.jpg"
            alt="Accessories"
            class="product-image"
          />
          <div class="product-label">ACCESSORIES</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goTo = (name: string) => {
  router.push({ name })
}
</script>

<style scoped>
.home-container {
  width: 100%;
  overflow-x: hidden;
}

.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4edf9 100%);
  text-align: center;
  scroll-snap-align: start;
}

.hero h1 {
  font-size: 2.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.products-section {
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  scroll-snap-align: start;
}

.image-grid {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  gap: 0; /* 确保无间隙 */
}

.product-card {
  flex: 1; /* 左右各占 50% */
  position: relative;
  cursor: pointer;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 图片裁剪以完全填充 */
  display: block;
  margin: 0;
  padding: 0;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}


.product-label {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.65);
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  padding: 8px 20px;
  border-radius: 20px;
  letter-spacing: 1.2px;
}

/* 响应式：手机端堆叠 */
@media (max-width: 768px) {
  .image-grid {
    flex-direction: column;
    height: auto;
    gap: 16px;
  }

  .product-card {
    height: 45vh;
    max-height: 500px;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }
}
</style>