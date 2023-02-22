<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePoopStore } from "../../stores/poopStore";
import headerComp from "../comps/headerComp.vue";
import reviewCard from "../comps/reviewCard.vue";
import moment from "moment";
import { ref } from "vue";

const poopStore = usePoopStore();
const route = useRoute();

onMounted(async () => {
  console.log(route.params.id);
  await poopStore.getAGameInfos(route.params.id);
  console.log(poopStore.aGameInfos);
});

const seeMore = ref(false);
</script>

<template>
  <div class="flex flex-col page">
    <headerComp />
    <div class="flex flex-col items-center bg-gray-700">
      <div
        class="container flex flex-col mx-auto m-5 mx-5 bg-gray-800 bg-opacity-50 px-4 py-4 shadow-2xl"
      >
        <h1 class="pb-2 font-bold text-2xl text-light-50">
          {{ poopStore?.aGameInfos?.name }}
        </h1>
        <div class="flex <lg:(flex-col) justify-center items-stretch">
          <div
            class="flex flex-col justify-between items-center bg-gray-800 bg-opacity-50 lg:(w-3/4)"
          >
            <img
              :src="`${poopStore.aGameInfos.background_image_additional}`"
              alt=""
              class="w-full p-2 max-h-120"
            />
            <div
              class="flex justify-start mx-auto space-x-2 overflow-x-auto mx-2 my-4"
            >
              <img src="https://picsum.photos/300/150" alt="" class="w-40" />
              <img src="https://picsum.photos/300/150" alt="" class="w-40" />
              <img src="https://picsum.photos/150/75" alt="" class="w-40" />
              <img src="https://picsum.photos/150/75" alt="" class="w-40" />
              <img src="https://picsum.photos/150/75" alt="" class="w-40" />
            </div>
          </div>

          <div
            class="flex flex-col justify-between h-full space-y-1 w-sm lg:(ml-4) <lg:(pt-2 w-full) w-1/3"
          >
            <div class="flex flex-col justify-center items-center">
              <img
                :src="`${poopStore.aGameInfos.background_image}`"
                alt=""
                class="pt-2 w-full max-h-100"
              />
              <span
                class="pt-2 text-light-50 text-md"
                v-if="poopStore?.aGameInfos?.description_raw?.length > 1"
              >
                {{
                  poopStore?.aGameInfos?.description_raw?.substring(0, 300) +
                  ".."
                }}
              </span>
            </div>
            <div class="flex space-x-2">
              <span class="text-gray-500">Release date:</span>
              <span class="text-gray-400">{{
                moment(poopStore.aGameInfos.released).format("D MMMM YYYY")
              }}</span>
            </div>
            <div class="text-gray-500">
              <span class="text-gray-500">Metacritic Review: </span>
              <span class="text-light-50 font-black text-xl">{{
                poopStore.aGameInfos.metacritic
              }}</span>
            </div>
            <div class="flex flex-wrap text-gray-500 items-center">
              <span class="text-gray-500">Developpers: </span>
              <div class="flex flex-wrap">
                <span
                  class="p-1 mx-1 rounded font-light text-blue-300 hover:(text-blue-200)"
                  v-for="test in poopStore.aGameInfos.developers"
                  v-text="`${test.name} `"
                ></span>
              </div>
            </div>
            <div>
              <span class="text-light-50">Genres:</span>
            </div>
            <div class="flex flex-wrap pb-1 space-x-1">
              <span
                class="bg-gray-900 opacity-75 p-1 rounded font-bold text-blue-200 hover:(text-blue-300) h-full"
                v-for="test in poopStore.aGameInfos.genres"
                v-text="`${test.name}`"
              ></span>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <div
            class="flex flex-col justify-center items-center mt-4 bg-gradient-to-t from-gray-700 to-gray-600"
          >
            <div class="text-white font-bold text-2xl mt-1">
              <span>Buy {{ poopStore?.aGameInfos?.name }} at:</span>
            </div>
            <div class="flex">
              <a
                class="m-2 py-2 px-4 rounded bg-gray-800 text-white font-extrabold text-xl"
                v-for="store in poopStore.aGameInfos.stores"
                :href="`https://${store.store.domain}`"
              >
                {{ store.store.name }}
              </a>
              <span
                v-if="poopStore.aGameInfos.stores == ''"
                class="text-xl font-semibold text-gray-300 mb-2"
              >
                Sorry, there is no stores available for this game
              </span>
            </div>
          </div>
        </div>
        <!--
        <div class="flex flex-col my-4">
          <h3 class="mb-4 text-center text-2xl font-bold text-light-50">
            Avis des joueurs
          </h3>
          <div class="grid grid-cols-2 <md:(grid-cols-1) gap-4">
              <reviewCard
              v-for="review in poopStore.objReviews"
              :positiveReview="review.positiveReview"
              :timePlayed="review.timePlayed"
              :last2WeeksPlayed="review.time2LastWeeks"
              :textReview="review.textReview"
              :reviewerPicUrl="review.reviewerPicUrl"
              :reviewerName="review.reviewerName"
            />
          </div>
        </div>
      --></div>
    </div>
  </div>
</template>
