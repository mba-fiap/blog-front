<template>
  <div
    v-if="isLoading"
    class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    <div v-for="n in 9" :key="n" class="animate-pulse space-y-4">
      <div class="bg-gray-200 h-48 w-full rounded-xl" />

      <div class="h-4 bg-gray-200 rounded w-3/4" />

      <div class="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  </div>

  <a-result
    v-else-if="isError"
    status="500"
    title="Não foi possível carregar os posts"
    sub-title="Tente novamente mais tarde"
  />

  <div
    v-else
    class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    <PostCard v-for="post in randomPosts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { useQuery } from '@tanstack/vue-query'

import PostCard from '@/components/PostCard.vue'

const {
  isLoading,
  isError,
  data: posts,
} = useQuery({
  queryKey: ['posts'],
  queryFn: () =>
    fetch('https://blog-back-st3d.onrender.com/posts').then(res => res.json()),
})

const randomPosts = computed(() =>
  posts.value ? [...posts.value].sort(() => Math.random() - 0.5) : [],
)
</script>
