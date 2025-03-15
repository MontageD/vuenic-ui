<script setup lang="ts">
import Button from '../../components/Button/Button.vue'
</script>

<template>
  <div class="doc-page">
    <h1>快速开始</h1>
    <p class="description">本节将介绍如何在项目中使用 Vuenic UI。</p>

    <section class="section">
      <h2>引入组件</h2>
      <div class="code-block">
        <pre><code>import { createApp } from 'vue'
import VuenicUI from 'vuenic-ui'
import 'vuenic-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(VuenicUI)
app.mount('#app')</code></pre>
      </div>
    </section>

    <section class="section">
      <h2>使用组件</h2>
      <p>现在您可以在任何组件中使用 Vuenic UI 的组件了：</p>
      <div class="code-block">
        <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;v-button type="primary"&gt;按钮&lt;/v-button&gt;
    &lt;v-input placeholder="请输入内容" /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="section">
      <h2>按需引入</h2>
      <p>如果您只想使用部分组件，可以采用按需引入的方式：</p>
      <div class="code-block">
        <pre><code>import { Button, Input } from 'vuenic-ui'
import 'vuenic-ui/dist/style.css'

export default {
  components: {
    [Button.name]: Button,
    [Input.name]: Input
  }
}</code></pre>
      </div>
    </section>

    <section class="section">
      <h2>下一步</h2>
      <div class="next-steps">
        <router-link to="/docs/button" class="next-step-card">
          <h3>浏览组件</h3>
          <p>查看所有可用的组件和它们的用法</p>
        </router-link>
        <router-link to="/colors" class="next-step-card">
          <h3>主题定制</h3>
          <p>了解如何自定义组件的样式和主题</p>
        </router-link>
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

.code-block {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px solid #eee;
}

.code-block pre {
  margin: 0;
  overflow-x: auto;
}

.code-block code {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #374151;
}

p {
  color: #4b5563;
  line-height: 1.6;
  margin: 1rem 0;
}

.next-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.next-step-card {
  text-decoration: none;
  padding: 1.5rem;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.next-step-card:hover {
  transform: translateY(-2px);
  border-color: #1890ff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.next-step-card h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.next-step-card p {
  color: #6b7280;
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .code-block {
    padding: 1rem;
  }
}
</style> 