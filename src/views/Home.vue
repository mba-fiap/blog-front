<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <PostCard v-for="post in randomPosts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'

import { posts } from '@/data/posts'

import PostCard from '@/components/PostCard.vue'

const randomPosts = computed(() => [...posts].sort(() => Math.random() - 0.5))

onMounted(() => {
  document.title = 'CodeVue - Home'
})
</script>
