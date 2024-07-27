import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ViewChildSummary from "../views/ViewChildSummary.vue";
import ViewChildCalcStructure from "../views/ViewChildCalcStructure.vue";
import ViewChildScenarious from "../views/ViewChildScenarious.vue";
import ViewChildAboutProject from "../views/ViewChildAboutProject.vue";
import ViewChildProjectPurpose from "../views/ViewChildProjectPurpose.vue"

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
      children: [
        { path: '', component: ViewChildSummary },
        { path: 'kalkulatora-uzbuve', component: ViewChildCalcStructure},
        { path: 'scenariju-izveide', component: ViewChildScenarious}
      ]
    },
    {
      path: "/par-projektu",
      name: "par-projektu",
      component: () => import("../views/AboutView.vue"),
      children: [
        { path: '', component: ViewChildAboutProject },
        { path: 'projekta-merki', component: ViewChildProjectPurpose }
      ]
    }
  ],
});

export default router;
