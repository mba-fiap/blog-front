<template>
  <div class="w-full flex flex-col gap-4 mt-8 pt-8 border-t border-gray-200">
    <a-typography-title :level="3">Conteúdos relacionados</a-typography-title>

    <div class="w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <PostCard v-for="post in randomPosts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { posts } from '@/data/posts'

import PostCard from '@/components/PostCard.vue'

const props = defineProps<{
  postId: number
}>()

const randomPosts = computed(() =>
  [...posts]
    .filter(post => post.id !== props.postId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3),
)
</script>
