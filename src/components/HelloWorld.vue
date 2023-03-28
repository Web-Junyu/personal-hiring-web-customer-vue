
<template>
  <h1>{{ msg }}</h1>
  <!-- <a-button type="primary">Primary Button</a-button> -->
  <Login></Login>
</template>

<script setup lang="ts">
import Login from './welcome/Login.vue';
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
