<template>
  <footer
    class="border-t border-gray-100 py-6 mt-12 text-center text-sm text-gray-500"
  >
    <p>
      © {{ currentYear }}
      <span class="font-semibold text-gray-700">CodeVue</span>. Todos os
      direitos reservados.
    </p>

    <p class="mt-1">
      Feito com ❤️ usando Vue.js, Ant Design Vue e TailwindCSS.
    </p>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
