<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCoreStore } from "@/stores/coreStore";

const router = useRouter();
const coreStore = useCoreStore();

const loginForm = coreStore.formLogin;
const isRegister = ref(false);

const login = async () => {
  await coreStore.login();
  console.log(coreStore.token);
  if (coreStore.token) {
    router.push({ name: "home" });
  }
};
</script>

<template>
  <div class="h-screen flex justify-center items-center bg-black">
    <div class="border border-dark-300 flex rounded-xl">
      <div
        class="bg-dark-600 bg-opacity-50 rounded-l-xl w-[300px] flex justify-center items-center"
      >
        <div class="text-4xl">✨</div>
      </div>
      <div v-if="!isRegister" class="flex flex-col text-white p-8 w-[400px]">
        <div class="text-2xl">Welcome back 👋 {{ loginForm }}</div>
        <div class="flex flex-col gap-2 mt-8">
          <div class="uppercase text-xs font-semibold">Adresse email</div>
          <input
            @input="loginForm.email = $event.target.value"
            class="outline-none bg-dark-900 border-dark-300 border rounded-lg px-2 py-1"
            type="text"
          />
        </div>
        <div class="flex flex-col gap-2 mt-2">
          <div class="uppercase text-xs font-semibold">Mot de passe</div>
          <input
            @input="loginForm.password = $event.target.value"
            class="outline-none bg-dark-900 border-dark-300 border rounded-lg px-2 py-1"
            type="password"
          />
        </div>
        <button
          @click="login"
          class="bg-dark-600 hover:bg-dark-300 select-none cursor-pointer border border-dark-300 rounded-lg mt-8 py-1 px-2"
        >
          Connexion
        </button>
        <div
          @click="isRegister = true"
          class="text-blue-500 text-xs text-right mt-1 select-none cursor-pointer hover:text-blue-300"
        >
          Pas de comptes, inscrivez vous !
        </div>
      </div>
      <div v-if="isRegister" class="flex flex-col text-white p-8 w-[400px]">
        <div class="text-2xl">Rejoindre frontend core ✨</div>
        <div class="flex flex-col gap-2 mt-8">
          <div class="uppercase text-xs font-semibold">Adresse email</div>
          <input
            class="outline-none bg-dark-900 border-dark-300 border rounded-lg px-2 py-1"
            type="text"
          />
          <div class="flex flex-col gap-2 mt-2">
            <div class="uppercase text-xs font-semibold">Mot de passe</div>
            <input
              class="outline-none bg-dark-900 border-dark-300 border rounded-lg px-2 py-1"
              type="password"
            />
          </div>
          <div class="flex flex-col gap-2 mt-2">
            <div class="uppercase text-xs font-semibold">Confirmation</div>
            <input
              class="outline-none bg-dark-900 border-dark-300 border rounded-lg px-2 py-1"
              type="password"
            />
          </div>
        </div>

        <button
          class="bg-dark-600 border border-dark-300 rounded-lg mt-8 py-1 px-2 hover:bg-dark-300 select-none cursor-pointer"
        >
          S'inscrire
        </button>
        <div
          @click="isRegister = false"
          class="text-blue-500 text-xs text-right mt-1 select-none cursor-pointer hover:text-blue-300"
        >
          Déja un compte ? connectez vous
        </div>
      </div>
    </div>
  </div>
</template>
