<template>
  <form
    @submit.prevent="submitForm"
    class="bg-[#2FB171] shadow-lg rounded-md bg-opacity-90 border border-gray-100 flex flex-col p-5 w-9/12 md:w-7/12 mx-auto space-y-2 lg:w-96 2xl:w-6/12"
  >
    <div class="">
      <div class="flex flex-col">
        <label for="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          class="bg-inherit border-b focus:outline-none autofill:bg-inherit"
          v-model="userDetails.firstName"
          required
        />
      </div>
      <div class="flex flex-col">
        <label for="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          class="bg-inherit border-b focus:outline-none autofill:bg-inherit"
          v-model="userDetails.lastName"
          required
        />
      </div>
    </div>
    <div class="flex flex-col">
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        v-model="userDetails.email"
        required
        class="bg-inherit border-b focus:outline-none autofill:bg-inherit"
      />
    </div>
    <div class="flex flex-col">
      <label for="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        v-model="userDetails.phone"
        required
        class="bg-inherit border-b focus:outline-none autofill:bg-inherit"
      />
    </div>
    <div class="flex gap-3">
      <label for="state">State:</label>
      <select
        id="state"
        v-model="userDetails.state"
        required
        class="bg-inherit border-b"
      >
        <option
          v-for="state in states"
          :value="state"
          class="text-black border-b"
        >
          {{ state }}
        </option>
      </select>
    </div>
    <div class="flex gap-3 items-center">
      <label for="privacy">Privacy Policy:</label>
      <input
        type="checkbox"
        id="privacy"
        v-model="userDetails.privacy"
        required
      />
    </div>
    <div class="flex flex-col">
      <label for="message">Message:</label>
      <textarea
        rows="8"
        cols="10"
        id="message"
        v-model="userDetails.message"
        class="resize-y rounded-md bg-transparent border border-slate-100"
        required
      ></textarea>
    </div>
    <div class="flex items-center justify-center mx-auto">
      <button
        type="submit"
        class="p-2 rounded-2xl border border-whute w-40 font-bold"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import states from "../states.json";

const userDetails = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  state: "",
  privacy: false,
  message: "",
});

const store = useStore();
const submitForm = () => {
  store.commit("addUser", { ...userDetails });
  Object.keys(userDetails).forEach((key) => (userDetails[key] = ""));
};
</script>
