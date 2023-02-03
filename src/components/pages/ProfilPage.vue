<script setup></script>

<template>
  <div class="flex justify-center items-center">
    <div
      class="flex flex-col justify-center items-center p-8 bg-gray-400 space-y-4"
    >
      <h2 class="text-center font-bold">Profil</h2>

      <div class="flex flex-col justify-center items-center">
        <span>Avatar</span>
        <img src="https://via.placeholder.com/150" alt="" />
      </div>

      <div class="flex space-x-4">
        <div class="flex flex-col flex-wrap space-y-2">
          <span>Username:</span>
          <span>Email:</span>
          <span>Password:</span>
          <span>Phone Number:</span>
          <span>Roles:</span>
        </div>

        <div class="flex flex-col flex-wrap space-y-2">
          <span>Tester</span>
          <span>Test2text@testing.com</span>
          <span>*********</span>
          <span>0600000000</span>
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
