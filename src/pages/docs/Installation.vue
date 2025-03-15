<script setup lang="ts">
import Button from '../../components/Button/Button.vue'
</script>

<template>
  <div class="doc-page">
    <h1>安装</h1>
    <p class="description">介绍如何在项目中安装和使用 Vuenic UI。</p>

    <section class="section">
      <h2>环境要求</h2>
      <ul class="requirement-list">
        <li>Node.js >= 16</li>
        <li>Vue >= 3.4</li>
      </ul>
    </section>

    <section class="section">
      <h2>使用包管理器</h2>
      <div class="install-methods">
        <div class="method-box">
          <h3>使用 npm</h3>
          <div class="code-block">
            <pre><code>npm install vuenic-ui</code></pre>
            <Button size="small" type="secondary">复制</Button>
          </div>
        </div>

        <div class="method-box">
          <h3>使用 yarn</h3>
          <div class="code-block">
            <pre><code>yarn add vuenic-ui</code></pre>
            <Button size="small" type="secondary">复制</Button>
          </div>
        </div>

        <div class="method-box">
          <h3>使用 pnpm</h3>
          <div class="code-block">
            <pre><code>pnpm add vuenic-ui</code></pre>
            <Button size="small" type="secondary">复制</Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.doc-page {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.description {
  font-size: 1.1rem;
  color: #4b5563;
  margin-bottom: 2rem;
}

.section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #1f2937;
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #1f2937;
}

.requirement-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.requirement-list li {
  padding: 0.5rem 0;
  color: #4b5563;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.requirement-list li::before {
  content: "•";
  color: #1890ff;
  font-weight: bold;
}

.install-methods {
  display: grid;
  gap: 2rem;
}

.method-box {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1.5rem;
}

.code-block {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
}

.code-block pre {
  margin: 0;
  flex: 1;
}

.code-block code {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #374151;
}
</style> 