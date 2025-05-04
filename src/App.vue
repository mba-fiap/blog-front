<template>
  <div class="w-full max-w-screen-xl mx-auto flex flex-col flex-1 px-4 gap-4">
    <Header />

    <router-view />

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'

import Footer from './components/Footer.vue'
</script>
