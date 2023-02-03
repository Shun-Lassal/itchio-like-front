<script setup>
import { ref } from "vue";

import { onMounted } from "vue";
import { useRouter } from "vue-router";

import { useCoreStore } from "@/stores/coreStore";
const coreStore = useCoreStore();

const router = useRouter();

const token = coreStore.token;

onMounted(async () => {
  await coreStore.setToken();
});
</script>

<template>
  {{ coreStore }}
  <div class="border-b border-black">
    <div v-if="token" class="flex items-center gap-16 text-xl font-bold m-4">
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
      <router-link class="p-2 border border-black" to="/credentials"
        >Login - Sign Up</router-link
      >
    </div>
  </div>
  <div class="">
    <router-view></router-view>
  </div>
</template>
