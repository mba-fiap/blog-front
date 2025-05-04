<template>
  <a-layout-header class="flex justify-between items-center py-4">
    <router-link to="/">
      <div
        class="text-xl font-bold text-gray-800 hover:text-blue-400 transition-all"
      >
        CodeVue
      </div>
    </router-link>

    <a-menu
      mode="horizontal"
      :selected-keys="[selectedCategory]"
      class="!border-none bg-transparent [&_.ant-menu-item]:text-gray-600 [&_.ant-menu-item-selected]:text-blue-600"
      @click="handleMenuClick"
    >
      <a-menu-item key="vue">Vue.js</a-menu-item>

      <a-menu-item key="praticas">Boas Práticas</a-menu-item>

      <a-menu-item key="ferramentas">Ferramentas</a-menu-item>

      <a-menu-item key="deploy">Deploy</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedCategory = ref()

function handleMenuClick({ key }: { key: string }) {
  selectedCategory.value = key
}
</script>
