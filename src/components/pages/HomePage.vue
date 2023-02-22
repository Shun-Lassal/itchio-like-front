<script setup>
import { usePoopStore } from "../../stores/poopStore";
import headerComp from "../comps/headerComp.vue";
import footerComp from "../comps/footerComp.vue";
import GameCardFree from "../comps/gameCardFree.vue";
import { onMounted } from "vue";
import { ref } from "vue";
import FooterComp from "../comps/footerComp.vue";

const poopStore = usePoopStore();
onMounted(async () => {
  await poopStore.getGamesInfos();
  await poopStore.fetchGenres();
  await poopStore.fetchPlatforms();
});
const page = ref(1);
</script>

<template>
  <div class="flex flex-col page">
    <!-- HEADER -->
    <headerComp />
    <!-- HEADER -->

    <!-- BODY -->
    <div class="flex flex-col bg-gray-700 items-center">
      <div>
        <h3
          class="text-3xl text-white font-bold text-shadow-lg mt-10 text-center"
        >
          Game library provided by Rawg.io
        </h3>
      </div>
      <div
        class="flex mx-auto <md:(flex-col justify-center items-center) px-12 bg-gray-800 rounded shadow-2xl mt-8"
      >
        <div
          class="flex justify-start items-center <lg:(flex-col space-y-2 w-full)"
        >
          <select
            name=""
            id=""
            class="mx-auto mr-8 bg-gray-300 p-1 rounded-sm <md:(mt-2 w-full)"
            @change="
              poopStore.categoryInput = $event.target.value;
              poopStore.fetchGamesBySearch(
                poopStore.searchInput,
                poopStore.categoryInput,
                poopStore.platformInput
              );
            "
          >
            <option value="">All Genres</option>
            <option
              v-for="category in poopStore.categoryList"
              :value="category.id"
              :text="category.name"
            ></option>
          </select>

          <select
            name=""
            id=""
            class="mx-auto mr-8 bg-gray-300 p-1 rounded-sm <md:(mt-2 w-full)"
            @change="
              poopStore.platformInput = $event.target.value;
              poopStore.fetchGamesBySearch(
                poopStore.searchInput,
                poopStore.categoryInput,
                poopStore.platformInput
              );
            "
          >
            <option value="">Any Platforms</option>
            <option
              v-for="platform in poopStore.platformsList"
              :value="platform.id"
              :text="platform.name"
            ></option>
          </select>
        </div>
        <div class="flex py-2">
          <section
            class="flex items-center p-1 bg-gray-300 rounded py-1 rounded-sm"
          >
            <input
              class="bg-gray-300 outline-none <md:(w-full) rounded-sm placeholder-gray-700"
              type="text"
              :placeholder="`Search ${poopStore.dataReq.count} games !`"
              @input="
                page = 1;
                poopStore.searchInput = $event.target.value;
                $event.target.value
                  ? poopStore.fetchGamesBySearch(
                      poopStore.searchInput,
                      poopStore.categoryInput,
                      poopStore.platformInput
                    )
                  : poopStore.getGamesInfos();
              "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class=""
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
              />
            </svg>
          </section>
        </div>
      </div>
      <div class="container flex flex-col mx-auto px-12 py-8 space-y-4">
        <div
          class="grid <sm:(grid-cols-1) <md:(grid-cols-2) grid-cols-4 gap-4"
          v-auto-animate
        >
          <GameCardFree
            v-auto-animate
            v-for="jeu in poopStore.allGamesInfos"
            :game-id="`${jeu.id}`"
            :gameTitle="`${jeu.name}`"
            :picUrl="`${
              jeu.background_image
                ? jeu.background_image
                : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png'
            }`"
            :category1="`${jeu.genres[0] ? jeu.genres[0].name : ''}`"
            :category2="jeu.genres[1] ? jeu.genres[1].name : ''"
            :rating="`${jeu.rating}`"
            :rating-top="`${jeu.rating_top}`"
          />
        </div>
        <!-- Pages System -->
        <div class="flex justify-center items-center">
          <button
            class="p-4 bg-gray-800 rounded font-normal text-xl text-light-50"
            @click="
              page = page + 1;
              poopStore.fetchGamesBySearch(
                poopStore.searchInput,
                poopStore.categoryInput,
                poopStore.platformInput,
                page
              );
            "
          >
            Voir plus
          </button>
        </div>
        <!-- Pages System -->
      </div>
    </div>
    <!-- BODY -->

    <!-- FOOTER -->
    <footerComp />
    <!-- FOOTER -->
  </div>
</template>
