<template>
  <div class="doc-page">
    <h1>阴影 Shadows</h1>
    <p class="description">阴影可以帮助建立视觉层次感，提升用户界面的深度感。</p>

    <section class="section">
      <h2>阴影层级</h2>
      <div class="demo-box">
        <div class="demo-block">
          <div class="shadow-demo">
            <div class="shadow-item">
              <div class="shadow-box shadow-sm">
                <span>Small</span>
              </div>
              <code>.shadow-sm</code>
            </div>
            <div class="shadow-item">
              <div class="shadow-box shadow-md">
                <span>Medium</span>
              </div>
              <code>.shadow-md</code>
            </div>
            <div class="shadow-item">
              <div class="shadow-box shadow-lg">
                <span>Large</span>
              </div>
              <code>.shadow-lg</code>
            </div>
            <div class="shadow-item">
              <div class="shadow-box shadow-xl">
                <span>Extra Large</span>
              </div>
              <code>.shadow-xl</code>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>使用场景</h2>
      <div class="demo-box">
        <div class="demo-block">
          <div class="usage-demo">
            <div class="usage-item shadow-sm">
              <h3>卡片</h3>
              <p>轻微的阴影用于卡片等基础容器</p>
            </div>
            <div class="usage-item shadow-md">
              <h3>弹出层</h3>
              <p>中等阴影用于下拉菜单、弹出框等</p>
            </div>
            <div class="usage-item shadow-lg">
              <h3>模态框</h3>
              <p>较大阴影用于模态框等重要交互元素</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>阴影值</h2>
      <table class="api-table">
        <thead>
          <tr>
            <th>类名</th>
            <th>值</th>
            <th>用途</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>shadow-sm</td>
            <td>0 1px 2px rgba(0, 0, 0, 0.05)</td>
            <td>用于轻微的立体感，如卡片、按钮等</td>
          </tr>
          <tr>
            <td>shadow-md</td>
            <td>0 4px 6px -1px rgba(0, 0, 0, 0.1)</td>
            <td>用于中等程度的立体感，如下拉菜单</td>
          </tr>
          <tr>
            <td>shadow-lg</td>
            <td>0 10px 15px -3px rgba(0, 0, 0, 0.1)</td>
            <td>用于较强的立体感，如模态框</td>
          </tr>
          <tr>
            <td>shadow-xl</td>
            <td>0 20px 25px -5px rgba(0, 0, 0, 0.1)</td>
            <td>用于特别强调的元素，如全屏弹窗</td>
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
  margin-bottom: 0.5rem;
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

.shadow-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.shadow-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.shadow-box {
  width: 100%;
  height: 100px;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shadow-sm {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.shadow-item code {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #374151;
  background: #f8f9fa;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.usage-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.usage-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
}

.usage-item p {
  color: #4b5563;
  margin: 0;
  font-size: 0.9rem;
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
</style> 