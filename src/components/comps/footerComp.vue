<script setup></script>

<template>
  <footer
    class="bg-gray-800 flex <md:(flex-col justify-center items-center) justify-between select-none"
  >
    <div class="flex flex-1 flex-col m-5">
      <h3 class="text-light-50 font-bold text-2xl text-shadow-lg">
        Game library provided by Rawg.io
      </h3>
      <h5 class="text-gray-700 font-bold text-xl">
        Small project from 13Dev.fr
      </h5>
    </div>
    <div class="m-5 flex flex-col justify-start items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
        class="fill-gray-700"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          d="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"
        />
      </svg>
      <span class="text-gray-700 font-bold text-xl"
        >Get at the top of the page</span
      >
    </div>
  </footer>
</template>
