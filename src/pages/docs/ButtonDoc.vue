<script setup lang="ts">
import Button from '../../components/Button/Button.vue'
</script>

<template>
  <div class="doc-page">
    <h1>按钮 Button</h1>
    <p class="description">按钮用于开始一个即时操作。</p>

    <section class="section">
      <h2>基础用法</h2>
      <div class="demo-box">
        <div class="demo-block">
          <Button type="primary">主要按钮</Button>
          <Button type="secondary">次要按钮</Button>
          <Button type="danger">危险按钮</Button>
        </div>
        <div class="code-block">
          <pre><code>
&lt;Button type="primary"&gt;主要按钮&lt;/Button&gt;
&lt;Button type="secondary"&gt;次要按钮&lt;/Button&gt;
&lt;Button type="danger"&gt;危险按钮&lt;/Button&gt;
          </code></pre>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>按钮尺寸</h2>
      <div class="demo-box">
        <div class="demo-block">
          <Button size="small">小型按钮</Button>
          <Button>默认按钮</Button>
          <Button size="large">大型按钮</Button>
        </div>
        <div class="code-block">
          <pre><code>
&lt;Button size="small"&gt;小型按钮&lt;/Button&gt;
&lt;Button&gt;默认按钮&lt;/Button&gt;
&lt;Button size="large"&gt;大型按钮&lt;/Button&gt;
          </code></pre>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>API</h2>
      <table class="api-table">
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>按钮类型</td>
            <td>'primary' | 'secondary' | 'danger'</td>
            <td>'secondary'</td>
          </tr>
          <tr>
            <td>size</td>
            <td>按钮尺寸</td>
            <td>'small' | 'default' | 'large'</td>
            <td>'default'</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
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

.demo-box {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}

.demo-block {
  padding: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  background: #fff;
}

.code-block {
  padding: 1rem;
  background: #f8f9fa;
  border-top: 1px solid #eee;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #374151;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.api-table th,
.api-table td {
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.api-table th {
  font-weight: 600;
  background: #f8f9fa;
  color: #1f2937;
}

.api-table td {
  color: #4b5563;
}

@media (max-width: 768px) {
  .demo-block {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style> 