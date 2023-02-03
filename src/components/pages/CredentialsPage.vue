<script setup>
import { ref } from "vue";
import validation from "../../utils/credentialsVerif.js";
// Faire une fonction qui stock les données envoyé dans une variable object pour ensuite etre envoyé a axios, mais pour l'instant tu peux pas envoyer a axios
// handleSubmit
// Submit
// voir structure des variables
// faire pareil pour register et profil
// const inputValue = ref("");
// const inputPassword = ref("***");

const fromRegister = ref({
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
});

// Check for Username START
const isUsernameOk = ref({ validUsername: true, validLength: true });

const checkUsername = (event) => {
  if (event.length >= 1) {
    isUsernameOk.value = validation.isValidUsername(event);
    console.log(isUsernameOk.value);
  } else {
    isUsernameOk.value = { validUsername: true, validLength: true };
  }
};
// Check for Username END

// Check for Email START
const isMailOk = ref({ validEmail: true, validLength: true });

const checkMail = (event) => {
  if (event.length >= 1) {
    isMailOk.value = validation.isValidEmail(event);
    console.log(isMailOk.value);
  } else {
    isMailOk.value = { validEmail: true, validLength: true };
  }
};
// Check for Email END

// Check for Password START
const isPasswordOk = ref({ validLength: true });

const checkPassword = (event) => {
  if (event.length >= 1) {
    isPasswordOk.value = validation.isValidPassword(event);
    console.log(isPasswordOk.value);
  } else {
    isPasswordOk.value = { validLength: true };
  }
};
// Check for Password END

// Check for RepeatPassword START
const isRepeatPasswordOk = ref({
  validFirstPswd: true,
  validSecondPswd: true,
  validPswds: true,
});

const checkRepeatPasswords = (event) => {
  if (event.length >= 1) {
    isRepeatPasswordOk.value = validation.isValidPasswords(
      fromRegister.value.password,
      event
    );
    console.log(isRepeatPasswordOk.value);
  } else {
    isRepeatPasswordOk = {
      validFirstPswd: true,
      validSecondPswd: true,
      validPswds: true,
    };
  }
};
// Check for RepeatPassword END
</script>

<template>
  {{ fromRegister }}
  <div class="flex flex-col justify-center items-center h-120">
    <div class="flex flex-wrap justify-center items-center bg-gray-400 p-12">
      <div class="pr-12">
        <h2 class="text-center font-bold">Login</h2>
        <form action="" method="post" class="space-y-2">
          <div class="flex flex-col">
            <label for="email">E-mail:</label>
            <input type="email" name="email" id="email_input" />
          </div>

          <div class="flex flex-col">
            <label for="password">Password:</label>
            <input type="password" name="password" />
          </div>

          <div class="flex justify-center items-center">
            <button type="button" class="bg-gray-500 py-2 px-4">Login</button>
          </div>
        </form>
      </div>
      <div class="border-l border-l-gray-600 pl-12">
        <h2 class="text-center font-bold">Register</h2>
        <form action="" method="post" class="space-y-2">
          <div class="flex flex-col">
            <label for="username">Username:</label>
            <input
              type="text"
              name="username"
              @input="fromRegister.username = $event.target.value"
              @focusout="checkUsername($event.target.value)"
            />
            <span
              class="text-red-700 text-center"
              v-if="!isUsernameOk.validLength"
              >Username trop court</span
            >
            <span
              class="text-red-700 text-center"
              v-if="!isUsernameOk.validUsername"
              >Username Invalide</span
            >
          </div>

          <div class="flex flex-col">
            <label for="email">E-mail:</label>
            <input
              type="email"
              name="email"
              @input="fromRegister.email = $event.target.value"
              @focusout="checkMail($event.target.value)"
            />
            <span class="text-red-700 text-center" v-if="!isMailOk.validLength"
              >Email trop court</span
            >
            <span class="text-red-700 text-center" v-if="!isMailOk.validEmail"
              >Email Invalide</span
            >
          </div>

          <div class="flex flex-col">
            <label for="password">Password:</label>
            <input
              type="password"
              name="password"
              @input="
                fromRegister.password = $event.target.value;
                checkPassword($event.target.value);
              "
            />
            <span class="text-red-700 text-center" v-if="!isPasswordOk"
              >Password trop court</span
            >
          </div>

          <div class="flex flex-col">
            <label for="rpassword">Repeat Password:</label>
            <input
              type="password"
              name="rpassword"
              @input="fromRegister.repeatPassword = $event.target.value"
              @focusout="checkRepeatPasswords($event.target.value)"
            />
            <span
              class="text-red-700 text-center"
              v-if="!isRepeatPasswordOk.validPswds"
              >Password ≠ Repeat Password</span
            >
          </div>

          <div class="flex justify-center items-center">
            <button type="button" class="bg-gray-500 py-2 px-4">Sign-up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
