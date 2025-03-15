<script setup lang="ts">
import { ref } from 'vue'

interface ComponentCategory {
  name: string
  title: string
  description: string
  components: Component[]
}

interface Component {
  name: string
  title: string
  description: string
  status: 'stable' | 'beta' | 'planning'
  route: string
}

const categories = ref<ComponentCategory[]>([
  {
    name: 'general',
    title: '通用组件',
    description: '适用于各种场景的基础组件',
    components: [
      {
        name: 'Button',
        title: '按钮',
        description: '用于触发操作的交互元素',
        status: 'stable',
        route: '/docs/button'
      },
      {
        name: 'Input',
        title: '输入框',
        description: '接收用户输入的文本框组件',
        status: 'stable',
        route: '/docs/input'
      }
    ]
  },
  {
    name: 'layout',
    title: '布局组件',
    description: '页面结构和空间布局组件',
    components: [
      {
        name: 'Grid',
        title: '栅格',
        description: '24 栅格布局系统',
        status: 'planning',
        route: '/docs/grid'
      },
      {
        name: 'Space',
        title: '间距',
        description: '设置组件之间的间距',
        status: 'planning',
        route: '/docs/space'
      }
    ]
  },
  {
    name: 'feedback',
    title: '反馈组件',
    description: '用于向用户提供操作反馈',
    components: [
      {
        name: 'Message',
        title: '消息提示',
        description: '全局展示操作反馈信息',
        status: 'planning',
        route: '/docs/message'
      },
      {
        name: 'Modal',
        title: '对话框',
        description: '模态对话框',
        status: 'planning',
        route: '/docs/modal'
      }
    ]
  },
  {
    name: 'navigation',
    title: '导航组件',
    description: '用于页面导航的组件',
    components: [
      {
        name: 'Menu',
        title: '导航菜单',
        description: '为页面提供导航功能',
        status: 'planning',
        route: '/docs/menu'
      },
      {
        name: 'Tabs',
        title: '标签页',
        description: '分隔内容上有关联但属于不同类别的数据集合',
        status: 'planning',
        route: '/docs/tabs'
      }
    ]
  }
])
</script>

<template>
  <div class="component-map">
    <header class="map-header">
      <h1>组件总览</h1>
      <p class="description">
        Vuenic UI 提供了丰富的组件，以下是组件的分类索引，帮助您快速找到需要的组件。
        点击组件卡片可以直接跳转到对应的文档页面。
      </p>
    </header>

    <div class="categories">
      <section v-for="category in categories" :key="category.name" class="category">
        <h2>{{ category.title }}</h2>
        <p class="category-desc">{{ category.description }}</p>
        
        <div class="components-grid">
          <router-link
            v-for="component in category.components"
            :key="component.name"
            :to="component.route"
            class="component-card"
            :class="{ 'is-planning': component.status === 'planning' }"
          >
            <div class="card-header">
              <h3>{{ component.title }}</h3>
              <span class="status-badge" :class="component.status">
                {{ component.status === 'stable' ? '稳定' : 
                   component.status === 'beta' ? '测试' : '规划中' }}
              </span>
            </div>
            <p class="component-desc">{{ component.description }}</p>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;
@use 'sass:map';
@use 'sass:color';

.component-map {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.map-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: #1a1a1a;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .description {
    font-size: 1.1rem;
    color: #666;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
}

.category {
  margin-bottom: 3rem;

  h2 {
    font-size: 1.5rem;
    color: #1a1a1a;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  .category-desc {
    color: #666;
    margin-bottom: 1.5rem;
  }
}

.components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.component-card {
  padding: 1.5rem;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #1890ff;
  }

  &.is-planning {
    opacity: 0.7;
    background: #f9fafb;

    &:hover {
      transform: none;
      border-color: #e5e7eb;
      box-shadow: none;
      cursor: not-allowed;
    }
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  h3 {
    font-size: 1.1rem;
    color: #1a1a1a;
    margin: 0;
  }
}

.status-badge {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;

  &.stable {
    background: rgba(map.get(map.get($colors, 'primary'), 'base'), 0.1);
    color: map.get(map.get($colors, 'primary'), 'base');
  }

  &.beta {
    background: #fff7e6;
    color: #fa8c16;
  }

  &.planning {
    background: #f5f5f5;
    color: #999;
  }
}

.component-desc {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .component-map {
    padding: 1rem;
  }

  .map-header {
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
    }
  }

  .components-grid {
    grid-template-columns: 1fr;
  }
}
</style> 