import { createRouter, createWebHistory } from "vue-router";

import Layout from "@/Layout/Index.vue";
import BlankLayout from "@/Layout/BlankLayout.vue";
// : Array<RouteRecordRaw>
export const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home.vue"),
        name: "Home",
        meta: { title: "首页", icon: "hero-full-screen" },
      },
      {
        path: "/data",
        component: BlankLayout,
        // component: { render (h: any) { return h('router-view'); } },
        name: "Data",
        redirect: "table",
        meta: { title: "数据", icon: "el-icon-s-data" },
        children: [
          {
            path: "table",
            component: () => import("@/views/Home.vue"),
            name: "Table",
            meta: { title: "表格" },
          },
          {
            path: "form",
            component: () => import("@/views/Home.vue"),
            name: "Form",
            meta: { title: "表单" },
          },
          {
            path: "test",
            name: "Test",
            component: BlankLayout,
            meta: { title: "测试" },
            children: [
              {
                path: "test1",
                component: () => import("@/views/Home.vue"),
                name: "Test1",
                meta: { title: "测试1" },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
