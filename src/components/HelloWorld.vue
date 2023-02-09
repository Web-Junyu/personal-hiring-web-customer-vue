<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <a-button type="primary">Primary Button</a-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
