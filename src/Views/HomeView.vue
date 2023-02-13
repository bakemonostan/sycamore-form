<template>
  <section>
    <div class="text-center">
      <router-link to="/users" class="font-bold"
        ><button
          class="bg-[#43B97F] text-white py-2 px-4 w-36 mt-2 rounded-3xl hover:shadow-md"
        >
          View all users
        </button></router-link
      >
    </div>
    <div class="flex h-screen justify-center flex-col lg:flex-row">
      <div class="flex-1 bg-test bg-no-repeat bg-contain bg-center"></div>
      <div class="flex-1 py-4 flex items-center text-white font-semibold">
        <user-form></user-form>
      </div>
    </div>
  </section>
</template>

<script setup>
import UserForm from "../components/UserForm.vue";
</script>

<style lang="scss" scoped></style>
