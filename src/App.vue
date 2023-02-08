<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { useCoreStore } from "@/stores/coreStore";
const coreStore = useCoreStore();

onMounted(async () => {
  await coreStore.setToken();
  await coreStore.setPayload();
});
</script>

<template>
  <div class="border-b border-black">
    <div
      v-if="coreStore.token && coreStore.token.length > 0"
      class="flex items-center gap-16 text-xl font-bold m-4"
    >
      <router-link class="p-2 border border-black" to="/">Home</router-link>
      <router-link class="p-2 border border-black" to="/joris"
        >Joris</router-link
      >
      <router-link class="p-2 border border-black" to="/shun">Shun</router-link>
      <router-link class="p-2 border border-black" to="/thomas"
        >Thomas</router-link
      >
      <router-link class="p-2 border border-black" to="/profil"
        >Profil</router-link
      >
      <div v-if="coreStore.payload && coreStore.payload.length > 0">
        {{ coreStore.payload }}
      </div>
    </div>
  </div>
  <div class="">
    <router-view></router-view>
  </div>
</template>
