/*
 * @Date: 2021-03-19 11:19:59
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2021-03-22 15:24:55
 * @Description: vue3入口TS文件
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "@/assets/css/common.less";
import locale from "element-plus/lib/locale/lang/zh-cn";
createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { size: "small", locale })
  .mount("#app");
