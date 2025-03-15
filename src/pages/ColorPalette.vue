<template>
  <div class="color-palette-page">
    <h1 class="page-title">颜色系统</h1>
    <p class="page-description">
      Vuenic UI 的颜色系统由主题色和中性色两部分组成，用于创建一致的视觉层次和品牌识别。
      我们精心设计了这套配色方案，以确保在各种场景下都能保持良好的可读性和视觉层次感。
    </p>

    <!-- 主题色 -->
    <section class="v-color-palette__section">
      <h2 class="v-color-palette__title">主题色</h2>
      <p class="v-color-palette__desc">
        主题色包含了四个基础色系：Primary（主色）、Success（成功）、Warning（警告）和 Danger（危险）。
        每个色系都包含 5 个色阶，从浅到深分别是：lighter、light、base、dark、darker。
      </p>
      <div class="v-color-palette__grid">
        <template v-for="(variants, colorName) in themeColors" :key="colorName">
          <template v-for="(value, variantName) in variants" :key="`${colorName}-${variantName}`">
            <div class="v-color-palette__item">
              <div :class="['v-color-palette__color', `v-color-palette__color--${colorName}-${variantName}`]">
                {{ colorName }}-{{ variantName }}
              </div>
              <div class="v-color-palette__info">
                <div class="v-color-palette__name">{{ colorName }}-{{ variantName }}</div>
                <div class="v-color-palette__value">{{ value }}</div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </section>

    <!-- 中性色 -->
    <section class="v-color-palette__section">
      <h2 class="v-color-palette__title">中性色</h2>
      <p class="v-color-palette__desc">
        中性色用于文本、背景、边框等元素，帮助创建视觉层次结构。
        从 gray-1 到 gray-12，颜色逐渐加深，提供了丰富的灰度变化。
      </p>
      <div class="v-color-palette__grid">
        <template v-for="(value, name) in neutralColors" :key="name">
          <div class="v-color-palette__item">
            <div :class="['v-color-palette__color', `v-color-palette__color--${name}`]">
              {{ name }}
            </div>
            <div class="v-color-palette__info">
              <div class="v-color-palette__name">{{ name }}</div>
              <div class="v-color-palette__value">{{ value }}</div>
            </div>
          </div>
        </template>
      </div>
    </section>

    <!-- 使用指南 -->
    <section class="v-color-palette__section">
      <h2 class="v-color-palette__title">使用指南</h2>
      <div class="v-color-palette__usage">
        <h3>在 SCSS 中使用</h3>
        <pre class="v-color-palette__code">
// 使用主题色
$primary-color: map.get($colors, "primary", "base");
$success-light: map.get($colors, "success", "light");

// 使用中性色
$text-color: map.get($neutrals, "gray-9");
$border-color: map.get($neutrals, "gray-4");</pre>

        <h3>在组件中使用</h3>
        <pre class="v-color-palette__code">
&lt;template&gt;
  &lt;div class="text-primary-base"&gt;主色文本&lt;/div&gt;
  &lt;div class="bg-success-light"&gt;成功浅色背景&lt;/div&gt;
  &lt;div class="text-gray-9"&gt;深灰色文本&lt;/div&gt;
&lt;/template&gt;</pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 主题色
const themeColors = {
  primary: {
    base: '#1890ff',
    light: '#40a9ff',
    lighter: '#91d5ff',
    dark: '#096dd9',
    darker: '#0050b3'
  },
  success: {
    base: '#52c41a',
    light: '#73d13d',
    lighter: '#b7eb8f',
    dark: '#389e0d',
    darker: '#237804'
  },
  warning: {
    base: '#faad14',
    light: '#ffc53d',
    lighter: '#ffe58f',
    dark: '#d48806',
    darker: '#ad6800'
  },
  danger: {
    base: '#ff4d4f',
    light: '#ff7875',
    lighter: '#ffa39e',
    dark: '#cf1322',
    darker: '#a8071a'
  }
};

// 中性色
const neutralColors = {
  'black': '#000000',
  'white': '#ffffff',
  'gray-1': '#ffffff',
  'gray-2': '#fafafa',
  'gray-3': '#f5f5f5',
  'gray-4': '#f0f0f0',
  'gray-5': '#d9d9d9',
  'gray-6': '#bfbfbf',
  'gray-7': '#8c8c8c',
  'gray-8': '#595959',
  'gray-9': '#434343',
  'gray-10': '#262626',
  'gray-11': '#1f1f1f',
  'gray-12': '#141414'
};
</script>

<style lang="scss">
.color-palette-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #434343;
}

.page-description {
  font-size: 1.125rem;
  color: #8c8c8c;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.v-color-palette__desc {
  margin: 1rem 0 2rem;
  color: #595959;
  line-height: 1.6;
}

.v-color-palette__usage {
  background: #fafafa;
  padding: 2rem;
  border-radius: 8px;

  h3 {
    font-size: 1.25rem;
    color: #434343;
    margin: 1.5rem 0 1rem;
    
    &:first-child {
      margin-top: 0;
    }
  }
}

.v-color-palette__code {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.875rem;
  color: #595959;
  line-height: 1.5;
  margin: 1rem 0;
  white-space: pre;
  overflow-x: auto;
}
</style> 