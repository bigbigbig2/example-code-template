import { createRouter, createWebHistory } from "vue-router";

import home from "./../components/home.vue";
import startPage from "./../views/startPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      redirect: "/startPage", //重定向到某个子路由
      meta: {
        title: "首页",
      },
      children: [
        {
          name: "startPage",
          path: "/startPage",
          meta: {
            title: "开始页",
          },
          component: startPage,
        },
      ],
    },
  ],
});

export default router;
