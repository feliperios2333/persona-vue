import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Comunas from "@/views/Comunas.vue";
import EditarComuna from "../components/comunas/EditarComuna.vue";
import NewComuna from "../components/comunas/NewComuna.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/comunas",
    name: "comunas",
    component: Comunas,
  },
  {
    path: "/editar-comuna/:id",
    name: "editarComuna",
    component: EditarComuna,
  },
  {
    path: "/add-comuna/",
    name: "newComuna",
    component: NewComuna,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
