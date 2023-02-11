<script setup>
import { defineProps } from "vue";

defineProps({
  gameId: String,
  gameTitle: String,
  picUrl: String,
  category1: String,
  category2: String,
  price: String,
  platforms: String,
});
</script>

<template>
  <div class="flex flex-col shadow-xl bg-gray-200 rounded select-none">
    <div class="">
      <img
        :src="`${picUrl}`"
        alt=""
        class="rounded-t h-full w-full object-cover"
      />
    </div>
    <div class="flex flex-col">
      <div class="flex justify-between items-center px-2 py-1">
        <router-link
          :to="`/game/${gameId}`"
          class="font-semibold text-xl hover:(text-purple-600)"
          >{{ gameTitle }}</router-link
        >
        <span v-if="this.price == '0'" class="bg-gray-300 p-1 border rounded"
          >Free</span
        >
        <span
          v-else="this.price != '0'"
          class="bg-gray-500 text-white p-1 border rounded"
          >{{ price }} €</span
        >
      </div>
      <div class="flex px-2 space-x-2">
        <span class="text-gray-500">{{ category1 }}</span>
        <span v-if="category2 != undefined" class="text-gray-500">{{
          category2
        }}</span>
      </div>
      <div class="flex p-1 justify-end items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path fill="none" d="M0 0H24V24H0z" />
          <path
            d="M3 5.479l7.377-1.016v7.127H3V5.48zm0 13.042l7.377 1.017v-7.04H3v6.023zm8.188 1.125L21 21v-8.502h-9.812v7.148zm0-15.292v7.236H21V3l-9.812 1.354z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M11.624 7.222c-.876 0-2.232-.996-3.66-.96-1.884.024-3.612 1.092-4.584 2.784-1.956 3.396-.504 8.412 1.404 11.172.936 1.344 2.04 2.856 3.504 2.808 1.404-.06 1.932-.912 3.636-.912 1.692 0 2.172.912 3.66.876 1.512-.024 2.472-1.368 3.396-2.724 1.068-1.56 1.512-3.072 1.536-3.156-.036-.012-2.94-1.128-2.976-4.488-.024-2.808 2.292-4.152 2.4-4.212-1.32-1.932-3.348-2.148-4.056-2.196-1.848-.144-3.396 1.008-4.26 1.008zm3.12-2.832c.78-.936 1.296-2.244 1.152-3.54-1.116.048-2.46.744-3.264 1.68-.72.828-1.344 2.16-1.176 3.432 1.236.096 2.508-.636 3.288-1.572z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M8.667 19.273l1.006-1.742a6.001 6.001 0 0 0 8.282-4.781h2.012A7.97 7.97 0 0 1 18.928 16a8 8 0 0 1-1.452 1.835 2.493 2.493 0 0 0-1.976.227 2.493 2.493 0 0 0-1.184 1.596 7.979 7.979 0 0 1-5.65-.385zm-1.3-.75a7.979 7.979 0 0 1-3.156-4.7C4.696 13.367 5 12.72 5 12c0-.72-.304-1.369-.791-1.825A8 8 0 0 1 5.072 8a7.97 7.97 0 0 1 2.295-2.524l1.006 1.742a6.001 6.001 0 0 0 0 9.563l-1.005 1.742zm1.3-13.796a8.007 8.007 0 0 1 5.648-.387c.152.65.562 1.238 1.185 1.598.623.36 1.337.42 1.976.227a8.007 8.007 0 0 1 2.49 5.085h-2.013A5.99 5.99 0 0 0 15 6.804a5.99 5.99 0 0 0-5.327-.335L8.667 4.727zM16 5.072a1.5 1.5 0 1 1 1.5-2.598A1.5 1.5 0 0 1 16 5.072zM4 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm12 6.928a1.5 1.5 0 1 1 1.5 2.598 1.5 1.5 0 0 1-1.5-2.598z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
