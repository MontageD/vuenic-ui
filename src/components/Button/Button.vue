<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium',
  disabled: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const buttonClasses = computed(() => ({
  'v-button': true,
  [`v-button--${props.type}`]: true,
  [`v-button--${props.size}`]: true,
  'v-button--disabled': props.disabled
}))
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="(e: MouseEvent) => !disabled && emit('click', e)"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.v-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.v-button--primary {
  background-color: #1890ff;
  color: white;
}

.v-button--secondary {
  background-color: #f0f0f0;
  color: #333;
}

.v-button--danger {
  background-color: #ff4d4f;
  color: white;
}

.v-button--small {
  padding: 4px 12px;
  font-size: 14px;
}

.v-button--medium {
  padding: 6px 16px;
  font-size: 16px;
}

.v-button--large {
  padding: 8px 20px;
  font-size: 18px;
}

.v-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.v-button:hover:not(.v-button--disabled) {
  opacity: 0.8;
}
</style> 