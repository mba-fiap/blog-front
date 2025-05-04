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
    v-else-if="hasError"
    status="500"
    title="Não foi possível carregar os posts"
    sub-title="Tente novamente mais tarde"
  />

  <div
    v-else
    class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

import type { IPost } from '@/interfaces/IPost'

import PostCard from '@/components/PostCard.vue'

const posts = ref<IPost[]>([])

const isLoading = ref(true)

const hasError = ref(false)

onMounted(async () => {
  document.title = 'CodeVue - Home'

  try {
    const response = await fetch('https://blog-back-st3d.onrender.com/posts')

    if (!response.ok) throw new Error('Erro ao buscar posts')

    const data = (await response.json()) as IPost[]

    posts.value = data
  } catch (err) {
    console.error(err)

    hasError.value = true
  } finally {
    isLoading.value = false
  }
})
</script>
