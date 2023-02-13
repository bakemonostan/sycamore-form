<template>
  <div class="flex justify-between flex-col">
    <router-link to="/" class="font-bold"
      ><button
        class="bg-[#43B97F] text-white py-2 px-4 w-36 mt-1 rounded-3xl hover:shadow-md"
      >
        Go back
      </button></router-link
    >
    <div class="px-3">
      <h2>Users by State</h2>
      <div class="flex gap-10 flex-col">
        <div
          v-for="(users, state) in usersByState"
          :key="state"
          class="bg-[#43B97F] w-[300px] text-white font-semibold px-3 py-7 rounded-xl"
        >
          <h3>{{ state }}</h3>
          <div>
            <div v-for="user in users" :key="user.id">
              <p v-if="!user.editing">{{ user.firstName }}</p>
              <input v-model="user.firstName" v-else />
              <p v-if="!user.editing">{{ user.email }}</p>
              <input v-model="user.email" v-else />
              <p v-if="!user.editing">{{ user.phone }}</p>
              <input v-model="user.phone" v-else />
              <p v-if="!user.editing">{{ user.message }}</p>
              <input v-model="user.message" v-else />
              <button
                v-if="!user.editing"
                @click="editUser(user)"
                class="mt-3 mr-3 border py-[1px] px-5"
              >
                Edit
              </button>
              <button
                v-else
                @click="saveUser(user)"
                class="mt-3 mr-3 border py-[1px] px-5"
              >
                Save
              </button>
              <button
                @click="deleteUser(user.phone)"
                class="mt-3 mr-3 border py-[1px] px-5"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-16 space-y-8">
      <h1>Users</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.firstName }} {{ user.lastName }}
        </li>
      </ul>
      <button @click="clearUsers">clear</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const users = computed(() => {
  return store.getters.allUsers;
});

const usersByState = computed(() => {
  return store.getters.usersByState;
});

const editUser = (user) => {
  user.editing = true;
};
const clearUsers = () => {
  store.commit("clearUsers");
  localStorage.removeItem("users");
};

const saveUser = (user) => {
  user.editing = false;
  store.commit("updateUser", { userId: user.phone, updatedUser: user });
};

const deleteUser = (userId) => {
  store.commit("deleteUser", userId);
};
</script>
