<template>
  <div class="doc-page">
    <h1>间距 Spacing</h1>
    <p class="description">合理的间距是创造优秀用户界面的关键。</p>

    <section class="section">
      <h2>间距大小</h2>
      <div class="demo-box">
        <div class="demo-block">
          <div class="spacing-demo">
            <div class="spacing-item">
              <div class="spacing-box spacing-1"></div>
              <span class="spacing-label">4px - spacing-1</span>
            </div>
            <div class="spacing-item">
              <div class="spacing-box spacing-2"></div>
              <span class="spacing-label">8px - spacing-2</span>
            </div>
            <div class="spacing-item">
              <div class="spacing-box spacing-3"></div>
              <span class="spacing-label">12px - spacing-3</span>
            </div>
            <div class="spacing-item">
              <div class="spacing-box spacing-4"></div>
              <span class="spacing-label">16px - spacing-4</span>
            </div>
            <div class="spacing-item">
              <div class="spacing-box spacing-6"></div>
              <span class="spacing-label">24px - spacing-6</span>
            </div>
            <div class="spacing-item">
              <div class="spacing-box spacing-8"></div>
              <span class="spacing-label">32px - spacing-8</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>使用方式</h2>
      <div class="demo-box">
        <div class="demo-block">
          <h3>外边距 Margin</h3>
          <div class="code-block">
            <pre><code>.m-1  { margin: 4px; }
.mt-2 { margin-top: 8px; }
.mr-3 { margin-right: 12px; }
.mb-4 { margin-bottom: 16px; }
.ml-6 { margin-left: 24px; }
.mx-8 { margin-left: 32px; margin-right: 32px; }
.my-4 { margin-top: 16px; margin-bottom: 16px; }</code></pre>
          </div>

          <h3 class="mt-6">内边距 Padding</h3>
          <div class="code-block">
            <pre><code>.p-1  { padding: 4px; }
.pt-2 { padding-top: 8px; }
.pr-3 { padding-right: 12px; }
.pb-4 { padding-bottom: 16px; }
.pl-6 { padding-left: 24px; }
.px-8 { padding-left: 32px; padding-right: 32px; }
.py-4 { padding-top: 16px; padding-bottom: 16px; }</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>间距系统</h2>
      <table class="api-table">
        <thead>
          <tr>
            <th>类名</th>
            <th>大小</th>
            <th>用途</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>spacing-1</td>
            <td>4px</td>
            <td>用于紧凑的元素内间距</td>
          </tr>
          <tr>
            <td>spacing-2</td>
            <td>8px</td>
            <td>用于常规的元素内间距</td>
          </tr>
          <tr>
            <td>spacing-3</td>
            <td>12px</td>
            <td>用于元素之间的间距</td>
          </tr>
          <tr>
            <td>spacing-4</td>
            <td>16px</td>
            <td>用于组件之间的间距</td>
          </tr>
          <tr>
            <td>spacing-6</td>
            <td>24px</td>
            <td>用于区块之间的间距</td>
          </tr>
          <tr>
            <td>spacing-8</td>
            <td>32px</td>
            <td>用于大区块之间的间距</td>
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

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 1rem;
}

.demo-box {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}

.demo-block {
  padding: 2rem;
  background: #fff;
}

.code-block {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 2rem;
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

.spacing-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.spacing-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.spacing-box {
  background: #1890ff;
  width: 100px;
}

.spacing-1 {
  height: 4px;
}

.spacing-2 {
  height: 8px;
}

.spacing-3 {
  height: 12px;
}

.spacing-4 {
  height: 16px;
}

.spacing-6 {
  height: 24px;
}

.spacing-8 {
  height: 32px;
}

.spacing-label {
  font-size: 0.875rem;
  color: #4b5563;
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

.mt-6 {
  margin-top: 1.5rem;
}
</style> 