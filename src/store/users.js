import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    // Check if user data exists in local storage
    const userData = localStorage.getItem("users");
    return {
      users: userData ? JSON.parse(userData) : [],
    };
  },
  mutations: {
    addUser(state, user) {
      const existingUser = state.users.find((u) => u.phone === user.phone);
      if (existingUser) {
        throw new Error(`User with phone ${user.phone} already exists`);
      }
      state.users = [...state.users, user];
      // Save user data to local storage
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    updateUser(state, { userId, updatedUser }) {
      state.users = state.users.map((user) =>
        user.phone === userId ? { ...user, ...updatedUser } : user
      );
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    deleteUser(state, userId) {
      state.users = state.users.filter((user) => user.phone !== userId);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    clearUsers(state) {
      state.users = [];
    },
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
    usersByState(state) {
      const usersByState = {};
      state.users.forEach((user) => {
        const { state } = user;
        if (!usersByState[state]) {
          usersByState[state] = [];
        }
        usersByState[state].push(user);
      });
      return usersByState;
    },
  },
});
export default store;
