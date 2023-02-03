<script setup>
import { useCoreStore } from "@/stores/coreStore";
import animation from "@/utils/animation";

const coreStore = useCoreStore();

const rotationTestL = () => {
  animation.rotateL(".test-rotate");
  coreStore.changeShun();
};
const rotationTestR = () => {
  animation.rotateR(".test-rotate");
  coreStore.changeShun();
};
</script>

<template>
  <div class="page">
    Shun page
    <button
      class="bg-gray-600 test-rotate"
      @mouseenter="rotationTestL"
      @mouseleave="rotationTestR"
    >
      button
    </button>
    {{ coreStore.shun }}
  </div>
</template>
