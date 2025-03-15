<script setup lang="ts">
import Input from '../../components/Input/Input.vue'
</script>

<template>
  <div class="doc-page">
    <h1>输入框 Input</h1>
    <p class="description">通过键盘输入内容的基础表单组件。</p>

    <section class="section">
      <h2>基础用法</h2>
      <div class="demo-box">
        <div class="demo-block">
          <Input placeholder="请输入内容" />
        </div>
        <div class="code-block">
          <pre><code>&lt;Input placeholder="请输入内容" /&gt;</code></pre>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>禁用状态</h2>
      <div class="demo-box">
        <div class="demo-block">
          <Input placeholder="禁用状态" disabled />
        </div>
        <div class="code-block">
          <pre><code>&lt;Input placeholder="禁用状态" disabled /&gt;</code></pre>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>尺寸</h2>
      <div class="demo-box">
        <div class="demo-block">
          <Input size="small" placeholder="小型输入框" />
          <Input placeholder="默认输入框" />
          <Input size="large" placeholder="大型输入框" />
        </div>
        <div class="code-block">
          <pre><code>&lt;Input size="small" placeholder="小型输入框" /&gt;
&lt;Input placeholder="默认输入框" /&gt;
&lt;Input size="large" placeholder="大型输入框" /&gt;</code></pre>
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
            <td>modelValue</td>
            <td>绑定值</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>输入框占位文本</td>
            <td>string</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用</td>
            <td>boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>size</td>
            <td>输入框尺寸</td>
            <td>'small' | 'default' | 'large'</td>
            <td>'default'</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="section">
      <h2>事件</h2>
      <table class="api-table">
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>update:modelValue</td>
            <td>输入值变化时触发</td>
            <td>(value: string)</td>
          </tr>
          <tr>
            <td>focus</td>
            <td>获得焦点时触发</td>
            <td>(event: FocusEvent)</td>
          </tr>
          <tr>
            <td>blur</td>
            <td>失去焦点时触发</td>
            <td>(event: FocusEvent)</td>
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