<template>
  <PostSkeleton v-if="isLoading" />

  <div v-else-if="isError">
    <a-result status="404" title="Conteúdo não encontrado">
      <template #extra>
        <a-button type="primary" @click="$router.push('/')"
          >Voltar para página inicial</a-button
        >
      </template>
    </a-result>
  </div>

  <div v-else class="flex flex-col gap-4">
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
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

import { useRoute } from 'vue-router'

import { useQuery } from '@tanstack/vue-query'

import PostSkeleton from '@/components/PostSkeleton.vue'

import Relateds from '@/components/Relateds.vue'

import { renderMarkdown } from '@/composables/useMarkdown'

const route = useRoute()

const imgLoaded = ref(false)

const slug = computed(() => route.params.slug as string)

const {
  data: post,
  isLoading,
  isError,
} = useQuery({
  queryKey: ['post', slug],
  queryFn: () =>
    fetch(`https://blog-back-st3d.onrender.com/posts/${slug.value}`).then(
      res => {
        if (!res.ok) throw new Error('Post não encontrado')

        return res.json()
      },
    ),
  enabled: computed(() => !!slug.value),
})

const onImgLoad = () => {
  imgLoaded.value = true
}

const htmlContent = computed(() =>
  post.value ? renderMarkdown(post.value.content) : '',
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
