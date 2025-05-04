<template>
  <a-card hoverable @click="$router.push(`/post/${post.slug}`)">
    <template #cover>
      <div class="w-full h-52 bg-gray-100 relative overflow-hidden">
        <img
          :src="post.thumb"
          :alt="post.title"
          loading="lazy"
          :class="[
            'absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500',
            { 'opacity-0': !imgLoaded, 'opacity-100': imgLoaded },
          ]"
          @load="onImgLoad"
        />

        <div
          v-if="!imgLoaded"
          class="w-full h-full bg-gray-300 animate-pulse"
        />
      </div>
    </template>

    <a-card-meta :title="post.title">
      <template #description>{{ post.title }}</template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { IPost } from '@/interfaces/IPost'

defineProps<{
  post: IPost
}>()

const imgLoaded = ref(false)

const onImgLoad = () => {
  imgLoaded.value = true
}
</script>
