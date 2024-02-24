import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/categories",
      name: "categories",
      component: () => import("../views/CategoriesView.vue"),
    },
    {
      path: "/pricing",
      name: "pricing",
      component: () => import("../views/PricingView.vue"),
    },
    {
      path: "/success",
      name: "success",
      component: () => import("../views/SuccessView.vue"),
    },
    {
      path: "/product/:id",
      name: "product",
      component: () => import("../views/DetailView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
