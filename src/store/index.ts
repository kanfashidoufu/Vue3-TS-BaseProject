/*
 * @Date: 2021-03-19 11:19:59
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2021-03-22 16:03:53
 * @Description:
 */
import { createStore } from "vuex";
import app from "./modules/app";
import permission from "./modules/permission";
import getters from "./getters";
export default createStore({
  getters,
  modules: {
    app,
    permission,
  },
});
