<script setup lang="ts">
import Button from '../components/Button/Button.vue'
</script>

<template>
  <div class="home">
    <header class="header">
      <nav class="nav">
        <div class="logo">Vuenic UI</div>
        <div class="nav-links">
          <a href="#features">特性</a>
          <a href="#components">组件</a>
          <a href="#start">快速开始</a>
          <Button size="small" type="primary">立即体验</Button>
        </div>
      </nav>
    </header>

    <section class="hero">
      <div class="hero-content">
        <h1>Vuenic UI</h1>
        <p>极致简约 · 优雅现代 · 快速高效</p>
        <div class="hero-subtitle">专为现代 Web 应用打造的下一代 Vue 3 组件库</div>
        <div class="hero-buttons">
          <Button type="primary" size="large">立即开始</Button>
          <Button type="secondary" size="large">在线文档</Button>
        </div>
      </div>
    </section>

    <section id="features" class="features">
      <h2>为什么选择 Vuenic UI？</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>⚡️ 极速开发</h3>
          <p>开箱即用的组件，简洁的 API 设计，让开发快人一步</p>
        </div>
        <div class="feature-card">
          <h3>🎨 独特美学</h3>
          <p>现代简约的设计语言，让您的应用脱颖而出</p>
        </div>
        <div class="feature-card">
          <h3>🛠 灵活定制</h3>
          <p>强大的主题系统，轻松打造专属设计风格</p>
        </div>
        <div class="feature-card">
          <h3>🚀 性能至上</h3>
          <p>极致优化的代码，让应用轻快如风</p>
        </div>
      </div>
    </section>

    <section id="components" class="components">
      <h2>现代化组件</h2>
      <div class="component-showcase">
        <div class="component-demo">
          <h3>按钮组件</h3>
          <div class="demo-content">
            <Button type="primary">主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="danger">危险按钮</Button>
          </div>
        </div>
      </div>
    </section>

    <section id="start" class="quick-start">
      <h2>开始使用</h2>
      <div class="code-block">
        <code>
          npm install vuenic-ui
        </code>
        <Button size="small" type="secondary">复制</Button>
      </div>
      <p class="quick-start-desc">一行代码，开启现代化开发之旅</p>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Vuenic UI</h4>
          <p>下一代 Vue 3 现代化组件库</p>
        </div>
        <div class="footer-section">
          <h4>资源</h4>
          <a href="#">组件</a>
          <a href="#">主题</a>
          <a href="#">示例</a>
        </div>
        <div class="footer-section">
          <h4>帮助</h4>
          <a href="#">快速上手</a>
          <a href="#">最佳实践</a>
          <a href="#">问题反馈</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 500;
}

.nav-links a:hover {
  color: #1890ff;
}

.hero {
  padding: 10rem 2rem 6rem;
  background: linear-gradient(135deg, #f0f2f5 0%, #e6f7ff 100%);
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero p {
  font-size: 1.5rem;
  color: #1890ff;
  margin-bottom: 1rem;
  font-weight: 500;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.features {
  padding: 6rem 2rem;
  background: white;
}

.features h2 {
  text-align: center;
  margin-bottom: 4rem;
  font-size: 2.5rem;
  color: #2c3e50;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  border-color: #1890ff;
}

.feature-card h3 {
  margin-bottom: 1rem;
  color: #1890ff;
  font-size: 1.25rem;
}

.components {
  padding: 4rem 2rem;
  background: #f5f7fa;
}

.components h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: #2c3e50;
}

.component-showcase {
  max-width: 1200px;
  margin: 0 auto;
}

.component-demo {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.demo-content {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.quick-start {
  padding: 6rem 2rem;
  background: white;
  text-align: center;
}

.quick-start h2 {
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #2c3e50;
}

.quick-start-desc {
  margin-top: 1rem;
  color: #666;
}

.code-block {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: #f8f9fa;
  padding: 1rem 2rem;
  border-radius: 8px;
  border: 1px solid #eee;
}

.code-block code {
  font-family: 'Fira Code', monospace;
  color: #1890ff;
}

.footer {
  background: #001529;
  color: white;
  padding: 4rem 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.footer-section h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section a {
  display: block;
  color: #ccc;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: white;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-direction: column;
  }

  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.25rem;
  }

  .hero-buttons {
    flex-direction: column;
  }
}
</style> 