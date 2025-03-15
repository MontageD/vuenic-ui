<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeMenu = ref(router.currentRoute.value.path)

const menus = [
  {
    title: '开发指南',
    items: [
      { name: '安装', path: '/docs/installation' },
      { name: '快速开始', path: '/docs/quickstart' }
    ]
  },
  {
    title: '组件',
    items: [
      { name: '按钮', path: '/docs/button' },
      { name: '输入框', path: '/docs/input' }
    ]
  },
  {
    title: '样式配置',
    items: [
      { name: '颜色系统', path: '/colors' },
      { name: '字体', path: '/docs/typography' },
      { name: '间距', path: '/docs/spacing' },
      { name: '阴影', path: '/docs/shadows' }
    ]
  }
]
</script>

<template>
  <div class="doc-layout">
    <aside class="doc-sidebar">
      <div class="sidebar-content">
        <div v-for="(section, index) in menus" :key="index" class="menu-section">
          <h3 class="menu-title">{{ section.title }}</h3>
          <ul class="menu-list">
            <li v-for="item in section.items" :key="item.path">
              <router-link 
                :to="item.path"
                :class="{ active: activeMenu === item.path }"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <main class="doc-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.doc-layout {
  display: flex;
  min-height: 100vh;
}

.doc-sidebar {
  width: 260px;
  background: #fff;
  border-right: 1px solid #eee;
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  overflow-y: auto;
}

.sidebar-content {
  padding: 2rem 1rem;
}

.menu-section {
  margin-bottom: 2rem;
}

.menu-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  padding-left: 1rem;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-list li {
  margin-bottom: 0.5rem;
}

.menu-list a {
  display: block;
  padding: 0.5rem 1rem;
  color: #4b5563;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.menu-list a:hover {
  color: #1890ff;
  background: #f0f9ff;
}

.menu-list a.active {
  color: #1890ff;
  background: #e6f4ff;
  font-weight: 500;
}

.doc-content {
  flex: 1;
  margin-left: 260px;
  padding: 2rem;
  margin-top: 60px;
  max-width: calc(100% - 260px);
}

@media (max-width: 768px) {
  .doc-sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .doc-content {
    margin-left: 0;
    max-width: 100%;
  }

  .doc-sidebar.open {
    transform: translateX(0);
  }
}
</style> 