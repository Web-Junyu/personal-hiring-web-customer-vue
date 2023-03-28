
<template>
  <div>
    <div>
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="我要找工作">
          <a-button type="primary">注册/登录</a-button>
        </a-tab-pane>
        <a-tab-pane key="2" tab="我要招人" force-render>我要招人</a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});
</script>


<style scoped>
</style>
