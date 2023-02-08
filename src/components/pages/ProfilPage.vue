<script setup>
import { onMounted } from "vue";
import { useCoreStore } from "../../stores/coreStore";
import { ref } from "vue";
const coreStore = useCoreStore();

const userInfos = ref({
  nameInput: false,
  imageInput: false,
  emailInput: false,
  phoneInput: false,
});

onMounted(async () => {
  await coreStore.getUserInfos();
});
</script>

<template>
  {{ coreStore }}
  <br />
  {{ userInfos }}
  <div class="flex justify-center items-center">
    <div
      class="flex flex-col justify-center items-center p-8 bg-gray-400 space-y-4"
    >
      <h2 class="text-center font-bold">
        Profil
        <button class="opacity-50 text-sm" @click="coreStore.getUserInfos()">
          Refresh
        </button>
      </h2>

      <div class="flex flex-col justify-center items-center">
        <span>Avatar</span>
        <img
          v-if="!imageInput"
          @click="imageInput = true"
          src="https://via.placeholder.com/150"
          alt=""
        />
        <input
          v-if="imageInput"
          @focusout=""
          @input="coreStore.infoUserToSet.image"
        />
      </div>

      <div class="flex space-x-4">
        <div class="flex flex-col flex-wrap space-y-2">
          <span>Username:</span>
          <span>Email:</span>
          <span>Phone Number:</span>
          <span>Roles:</span>
        </div>

        <div class="flex flex-col flex-wrap space-y-2">
          <!-- Name Show & Edit Slot -->
          <span
            v-if="!userInfos.nameInput && coreStore.user && coreStore.user.name"
            @click="userInfos.nameInput = true"
          >
            {{ coreStore.user.name }}
          </span>
          <span v-if="!userInfos.nameInput && !coreStore.user">Loading...</span>
          <input
            v-if="userInfos.nameInput"
            @focusout="
              userInfos.nameInput = false;
              coreStore.setAUserInfos('name', coreStore.infoUserToSet.name);
            "
            @input="coreStore.infoUserToSet.name = $event.target.value"
          />
          <!-- Name Show & Edit Slot -->

          <!-- Email Show & Edit Slot -->
          <span
            v-if="
              !userInfos.emailInput && coreStore.user && coreStore.user.email
            "
            @click="userInfos.emailInput = true"
          >
            {{ coreStore.user.email }}
          </span>
          <span v-if="!userInfos.emailInput && !coreStore.user"
            >Loading...</span
          >
          <input
            v-if="userInfos.emailInput"
            @focusout="
              userInfos.emailInput = false;
              coreStore.setAUserInfos('email', coreStore.infoUserToSet.email);
            "
            @input="coreStore.infoUserToSet.email = $event.target.value"
          />
          <!-- Email Show & Edit Slot -->

          <!-- Number Show & Edit Slot -->
          <span
            v-if="
              !userInfos.phoneInput && coreStore.user && coreStore.user.phone
            "
            @click="userInfos.phoneInput = true"
          >
            {{ coreStore.user.phone }}
          </span>
          <span v-if="!userInfos.phoneInput && !coreStore.user"
            >Loading...</span
          >
          <input
            v-if="userInfos.phoneInput"
            @focusout="
              userInfos.phoneInput = false;
              coreStore.setAUserInfos('phone', coreStore.infoUserToSet.number);
            "
            @input="coreStore.infoUserToSet.number = $event.target.value"
          />
          <!-- Number Show & Edit Slot -->

          <span>Normal, Admin, superDumby</span>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center items-center p-8 bg-gray-400 space-y-4"
    >
      <h2 class="text-center font-bold">Change Password</h2>
      <form
        action=""
        method="post"
        class="flex flex-col justify-center items-center"
      >
        <div class="flex space-x-4">
          <div class="flex flex-col space-y-2">
            <label for="password">Password</label>
            <label for="npassword">New Password</label>
            <label for="ncpassword">Confirm New Password</label>
          </div>
          <div class="flex flex-col space-y-2">
            <input type="password" name="password" id="" />
            <input type="password" name="npassword" id="" />
            <input type="password" name="ncpassword" id="" />
          </div>
        </div>
        <button class="mt-4 p-4 bg-gray-500">Change Password</button>
      </form>
    </div>
  </div>
</template>
