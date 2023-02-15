import { createRouter, createWebHashHistory } from "vue-router";
const Layout = () => import(`../views/home/a.vue`);
const routes = [
  {
    path: "/a",
    name: "home",
    component: Layout,
    children: [
      {
        path: "",
        name: "a",
        component: () => import(`../views/home/index.vue`),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
