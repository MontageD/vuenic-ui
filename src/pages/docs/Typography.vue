<template>
  <div class="doc-page">
    <h1>排版 Typography</h1>
    <p class="description">文字排版是界面设计中最基础的构成要素。</p>

    <section class="section">
      <h2>标题</h2>
      <div class="demo-box">
        <div class="demo-block">
          <h1 class="heading-1">标题一</h1>
          <h2 class="heading-2">标题二</h2>
          <h3 class="heading-3">标题三</h3>
          <h4 class="heading-4">标题四</h4>
          <h5 class="heading-5">标题五</h5>
          <h6 class="heading-6">标题六</h6>
        </div>
        <div class="code-block">
          <pre><code>&lt;h1 class="heading-1"&gt;标题一&lt;/h1&gt;
&lt;h2 class="heading-2"&gt;标题二&lt;/h2&gt;
&lt;h3 class="heading-3"&gt;标题三&lt;/h3&gt;
&lt;h4 class="heading-4"&gt;标题四&lt;/h4&gt;
&lt;h5 class="heading-5"&gt;标题五&lt;/h5&gt;
&lt;h6 class="heading-6"&gt;标题六&lt;/h6&gt;</code></pre>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>文本</h2>
      <div class="demo-box">
        <div class="demo-block">
          <p class="text-base">基础文本 - 用于常规段落和文本内容</p>
          <p class="text-sm">小号文本 - 用于辅助信息和注释</p>
          <p class="text-lg">大号文本 - 用于重要信息和强调</p>
        </div>
        <div class="code-block">
          <pre><code>&lt;p class="text-base"&gt;基础文本 - 用于常规段落和文本内容&lt;/p&gt;
&lt;p class="text-sm"&gt;小号文本 - 用于辅助信息和注释&lt;/p&gt;
&lt;p class="text-lg"&gt;大号文本 - 用于重要信息和强调&lt;/p&gt;</code></pre>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>字重</h2>
      <div class="demo-box">
        <div class="demo-block">
          <p class="font-light">轻量文本 - 300</p>
          <p class="font-normal">常规文本 - 400</p>
          <p class="font-medium">中等文本 - 500</p>
          <p class="font-semibold">半粗文本 - 600</p>
          <p class="font-bold">粗体文本 - 700</p>
        </div>
        <div class="code-block">
          <pre><code>&lt;p class="font-light"&gt;轻量文本 - 300&lt;/p&gt;
&lt;p class="font-normal"&gt;常规文本 - 400&lt;/p&gt;
&lt;p class="font-medium"&gt;中等文本 - 500&lt;/p&gt;
&lt;p class="font-semibold"&gt;半粗文本 - 600&lt;/p&gt;
&lt;p class="font-bold"&gt;粗体文本 - 700&lt;/p&gt;</code></pre>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>行高</h2>
      <div class="demo-box">
        <div class="demo-block">
          <p class="leading-none">无行高 - 1</p>
          <p class="leading-tight">紧凑行高 - 1.25</p>
          <p class="leading-normal">常规行高 - 1.5</p>
          <p class="leading-relaxed">宽松行高 - 1.75</p>
          <p class="leading-loose">松散行高 - 2</p>
        </div>
        <div class="code-block">
          <pre><code>&lt;p class="leading-none"&gt;无行高 - 1&lt;/p&gt;
&lt;p class="leading-tight"&gt;紧凑行高 - 1.25&lt;/p&gt;
&lt;p class="leading-normal"&gt;常规行高 - 1.5&lt;/p&gt;
&lt;p class="leading-relaxed"&gt;宽松行高 - 1.75&lt;/p&gt;
&lt;p class="leading-loose"&gt;松散行高 - 2&lt;/p&gt;</code></pre>
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
  padding: 1rem;
  background: #f8f9fa;
  border-top: 1px solid #eee;
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

/* Typography Styles */
.heading-1 {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.heading-2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 0.875rem;
}

.heading-3 {
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 0.75rem;
}

.heading-4 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 0.625rem;
}

.heading-5 {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.heading-6 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0.375rem;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.5;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.5;
}

.font-light {
  font-weight: 300;
}

.font-normal {
  font-weight: 400;
}

.font-medium {
  font-weight: 500;
}

.font-semibold {
  font-weight: 600;
}

.font-bold {
  font-weight: 700;
}

.leading-none {
  line-height: 1;
}

.leading-tight {
  line-height: 1.25;
}

.leading-normal {
  line-height: 1.5;
}

.leading-relaxed {
  line-height: 1.75;
}

.leading-loose {
  line-height: 2;
}

.demo-block p {
  margin-bottom: 1rem;
}

.demo-block p:last-child {
  margin-bottom: 0;
}
</style> 