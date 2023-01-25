import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "kalkulators",
      component: HomeView,
    },
    {
      path: "/ka-lietot",
      name: "ka-lietot",
      component: () => import("../views/HowToUseView.vue"),
    },
    {
      path: "/par-kalkulatoru",
      name: "par-kalkulatoru",
      component: () => import("../views/AboutView.vue"),
    }
  ],
});

export default router;
