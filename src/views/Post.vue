<template>
  <div v-if="post" class="flex flex-col gap-4">
    <a-typography-title>{{ post.title }}</a-typography-title>

    <img
      :src="post.image"
      :alt="post.title"
      :class="[
        'w-full h-auto !rounded-b-lg transition-opacity duration-500',
        { 'opacity-0': !imgLoaded, 'opacity-100': imgLoaded },
      ]"
      @load="onImgLoad"
    />

    <div v-if="!imgLoaded" class="w-full h-96 bg-gray-300 animate-pulse" />

    <div :class="$style['post-content']">
      <a-typography>
        <span v-html="htmlContent" />
      </a-typography>
    </div>

    <Relateds :post-id="post.id" />
  </div>

  <div v-else-if="postNotFound">
    <a-result status="404" title="Conteúdo não encontrado">
      <template #extra>
        <a-button type="primary" @click="$router.push('/')"
          >Voltar para página inicial</a-button
        >
      </template>
    </a-result>
  </div>

  <PostSkeleton v-else />
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'

import { useRoute } from 'vue-router'

import { posts } from '@/data/posts'

import type { IPost } from '@/interfaces/IPost'

import { renderMarkdown } from '@/composables/useMarkdown'

import PostSkeleton from '@/components/PostSkeleton.vue'
import Relateds from '../components/Relateds.vue'

const route = useRoute()

const post = ref<IPost | null>(null)

const postNotFound = ref(false)

const imgLoaded = ref(false)

const onImgLoad = () => {
  imgLoaded.value = true
}

const handleSetCurrentPost = () => {
  const postSlug = route.params.slug as string

  const currentPost = posts.find((item: IPost) => item.slug === postSlug)

  if (!currentPost) {
    postNotFound.value = true

    document.title = 'CodeVue - Conteúdo não encontrado'

    return
  }

  post.value = currentPost

  document.title = `CodeVue - ${currentPost?.title}`
}

const htmlContent = computed(() => {
  if (!post.value) return ''

  return renderMarkdown(post.value?.content)
})

watch(
  () => route.params.slug,
  () => {
    handleSetCurrentPost()
  },
  { immediate: true },
)
</script>

<style lang="scss" module>
.post-content {
  @apply flex flex-col;
  h2 {
    margin: theme('spacing.2') 0 !important;
  }
  hr {
    @apply my-4 border-gray-200;
  }
  table {
    @apply w-full text-left border border-gray-300 rounded overflow-hidden;
    thead {
      @apply bg-gray-100 text-gray-700;
      th {
        @apply px-4 py-2 border-b border-gray-300 font-semibold text-sm;
      }
    }
    tbody {
      tr {
        @apply even:bg-gray-50 hover:bg-gray-100 transition-colors;
        td {
          @apply px-4 py-2 border-b border-gray-200 text-sm;
        }
      }
    }
  }
}
</style>
