<script setup lang="ts">
import Button from './components/Button/Button.vue'
import { ref } from 'vue'

const isDarkMode = ref(false)
const version = 'v0.0.1'

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  // 这里后续可以添加主题切换的具体实现
}
</script>

<template>
  <div class="app">
    <nav class="nav">
      <router-link to="/" class="logo">
        <span class="logo-text">Vuenic UI</span>
      </router-link>
      <div class="search-box">
        <input type="text" placeholder="搜索组件..." class="search-input" />
        <div class="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>
      <div class="nav-actions">
        <a href="https://github.com/MontageD/vuenic-ui" target="_blank" class="action-item" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <button class="action-item theme-toggle" @click="toggleTheme" title="切换主题">
          <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        <span class="version">{{ version }}</span>
      </div>
    </nav>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  padding: 0 2rem;
  z-index: 100;
}

.logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #1890ff, #722ed1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
  margin-left: 4rem;
}

.nav-links a {
  color: #666;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem 0;
  transition: color 0.3s;
  position: relative;
}

.nav-links a:hover {
  color: #1890ff;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #1890ff;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  transform: scaleX(1);
}

.nav-links a.router-link-active {
  color: #1890ff;
}

@media (max-width: 768px) {
  .nav {
    padding: 0 1rem;
  }

  .nav-links {
    margin-left: 2rem;
    gap: 1rem;
  }
}

.main {
  flex: 1;
  background-color: #ffffff;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin-bottom: 40px;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
}

h2 {
  color: #666;
  margin-bottom: 20px;
}

.button-row {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

.search-box {
  position: relative;
  margin-left: 2rem;
  flex: 1;
  max-width: 400px;
}

.search-input {
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #374151;
  background: #f9fafb;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: #1890ff;
    background: #fff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
}

.search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
}

.action-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  color: #666;
  transition: all 0.3s;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;

  &:hover {
    color: #1890ff;
    background: #f0f9ff;
  }
}

.theme-toggle {
  &:hover {
    transform: rotate(30deg);
  }
}

.version {
  font-size: 0.875rem;
  color: #666;
  padding: 0.25rem 0.5rem;
  background: #f3f4f6;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
}

@media (max-width: 768px) {
  .nav {
    padding: 0 1rem;
  }

  .search-box {
    max-width: 200px;
    margin-left: 1rem;
  }

  .nav-actions {
    gap: 0.5rem;
  }

  .version {
    display: none;
  }
}
</style>
