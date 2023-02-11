<script setup>
import { usePoopStore } from "../../stores/poopStore";
import GameCardFree from "../comps/gameCardFree.vue";

const poopStore = usePoopStore();

poopStore.callTwitchApi();
</script>

<template>
  <div class="flex flex-col page">
    <!-- HEADER -->
    <div class="bg-gray-800">
      <div class="flex h-15 justify-center items-center">
        <div
          class="flex text-white fill-white h-full justify-center items-center"
        >
          <h1
            class="text-2xl font-bold whitespace-nowrap text-shadow-xl mx-auto ml-12"
          >
            13<span class="text-sm align-top text-shadow-xl">th</span> Game.io
          </h1>
        </div>
        <div
          class="flex flex-1 justify-evenly items-center text-xl text-white font-light"
        >
          <h3 class="text-shadow-xl">Browse Games</h3>
          <h3 class="text-shadow-xl">Browse Categories</h3>
          <h3 class="text-shadow-xl">Upload Game</h3>
          <h3 class="text-shadow-xl">About Us</h3>
        </div>
        <div class="flex justify-center items-center fill-white mx-auto pr-12">
          <h3 class="text-white text-sm font-normal px-2 text-shadow-xl">
            Welcome Back, <br />
            Killer666
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"
            />
          </svg>
        </div>
      </div>
    </div>
    <!-- HEADER -->

    <!-- BODY -->
    <div class="flex flex-col h-200 bg-gray-700">
      <div
        class="flex mx-auto <md:(flex-col justify-center items-center) px-12 border bg-gray-200 rounded shadow-2xl mt-8"
      >
        <div
          class="flex justify-start items-center <lg:(flex-col space-y-2 w-full)"
        >
          <select name="" id="" class="mx-auto mr-8 bg-gray-300 p-1 rounded">
            <option value="">All Genres</option>
            <option value="Adventure">Adventure</option>
            <option value="Builder">Builder</option>
            <option value="Dungeon">Dungeon Crawler</option>
            <option value="Exploration">Exploration</option>
            <option value="MMO">MMO</option>
            <option value="RPG">RPG</option>
            <option value="Survie">Survie</option>
            <option value="Weird">Weird</option>
          </select>

          <select name="" id="" class="mx-auto mr-8 bg-gray-300 p-1 rounded">
            <option value="">Any costs</option>
            <option value="">Offers</option>
            <option value="">Priced games</option>
            <option value="">Free</option>
          </select>
        </div>
        <div class="flex py-2">
          <section class="flex items-center p-1 bg-gray-300 rounded py-1">
            <input
              class="bg-gray-300 outline-none"
              type="text"
              placeholder="Search a game !"
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
      <div class="flex flex-col mx-auto px-12 py-8 space-y-4">
        <div class="grid <md:(grid-cols-2) grid-cols-4 gap-4">
          <GameCardFree
            v-for="(jeu, key) in poopStore.objResponse"
            :game-id="`${key}`"
            :gameTitle="`${jeu.name}`"
            :picUrl="`${jeu.pictureUrl}`"
            :category1="`${jeu.categories[0]}`"
            :category2="`${jeu.categories[1]}`"
            :price="`${jeu.price}`"
          />
        </div>
      </div>
    </div>
    <!-- BODY -->

    <!-- FOOTER -->
    <div></div>
    <!-- FOOTER -->
  </div>
</template>
