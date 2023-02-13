import { createRouter, createWebHashHistory } from "vue-router";
import UserGroups from "../components/UserGroups.vue";
import HomeView from "../Views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/users",
    name: "Users",
    component: UserGroups,
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
