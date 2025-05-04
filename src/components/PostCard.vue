<template>
  <a-card hoverable @click="$router.push(`/post/${post.slug}`)">
    <template #cover>
      <div class="w-full h-52 bg-gray-100 relative overflow-hidden">
        <img
          :src="post.thumb"
          :alt="post.title"
          loading="lazy"
          class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500"
          :class="{ 'opacity-0': !loaded, 'opacity-100': loaded }"
          @load="onLoad"
        />

        <div v-if="!loaded" class="w-full h-full bg-gray-300 animate-pulse" />
      </div>
    </template>

    <a-card-meta :title="post.title">
      <template #description>{{ post.title }}</template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

defineProps({ post: Object })

const loaded = ref(false)

const onLoad = () => {
  loaded.value = true
}
</script>
