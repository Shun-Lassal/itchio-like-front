<script setup>
import { useCoreStore } from '../../stores/coreStore';
const coreStore = useCoreStore();
</script>

<template>
  <div>
    Shun page
    <button class="bg-gray-600" @click="coreStore.changeShun()">button</button>
    {{ coreStore.shun }}
  </div>
</template>