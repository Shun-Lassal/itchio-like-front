<script setup>
import { defineProps } from "vue";

defineProps({
  positiveReview: Boolean,
  timePlayed: Number,
  last2WeeksPlayed: Number,
  textReview: String,
  reviewerPicUrl: String,
  reviewerName: String,
});
</script>

<template>
  <div
    class="flex flex-col justify-between bg-gradient-to-t from-gray-700 to-gray-600"
  >
    <div class="flex items-center">
      <!-- IF TRUE -->
      <div
        v-if="positiveReview"
        class="w-20 h-20 flex items-center justify-center bg-gradient-to-t from-blue-700 to-blue-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm5.293-1.293l6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
      </div>
      <!-- IF TRUE-->

      <!-- IF FALSE -->
      <div
        v-if="!positiveReview"
        class="w-20 h-20 flex items-center justify-center bg-gradient-to-t from-red-700 to-red-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="48"
          height="48"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M22 15h-3V3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm-5.293 1.293l-6.4 6.4a.5.5 0 0 1-.654.047L8.8 22.1a1.5 1.5 0 0 1-.553-1.57L9.4 16H3a2 2 0 0 1-2-2v-2.104a2 2 0 0 1 .15-.762L4.246 3.62A1 1 0 0 1 5.17 3H16a1 1 0 0 1 1 1v11.586a1 1 0 0 1-.293.707z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
      </div>
      <!-- IF FALSE-->

      <div class="flex flex-col ml-5 justify-center">
        <h3 v-if="positiveReview" class="text-2xl text-light-50 font-bold">
          Recommende le jeu
        </h3>
        <h3 v-if="!positiveReview" class="text-2xl text-light-50 font-bold">
          Ne recommende pas le jeu
        </h3>
        <h3 class="text-gray-300">
          {{ timePlayed }} Heures de jeu, ({{ last2WeeksPlayed }}h en 2
          semaines)
        </h3>
      </div>
    </div>
    <div class="m-2 pl-5 py-4 text-light-50 bg-gray-700">
      <p>
        {{ textReview }}
      </p>
    </div>
    <div class="flex items-center pl-5 mb-5 text-light-50">
      <div class="w-10 h-10 border">
        <img :src="`${reviewerPicUrl}`" alt="Avatar" />
      </div>
      <span class="pl-2">{{ reviewerName }}</span>
    </div>
  </div>
</template>
