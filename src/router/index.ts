import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "",
    name: "home",
    component: () => import(`../views/layout/layout.vue`),
    children: [
      {
        path: "custom/layout",
        name: "layoutComponent",
        component: () => import(`../views/home/layout.vue`),
      },
      {
        path: "custom/query",
        name: "queryComponent",
        component: () => import(`../views/home/query.vue`),
      },
      {
        path: "custom/table",
        name: "tableComponent",
        component: () => import(`../views/home/table.vue`),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
