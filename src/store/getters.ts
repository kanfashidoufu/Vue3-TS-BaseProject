/*
 * @Date: 2021-03-22 16:03:38
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2021-03-22 16:04:16
 * @Description:
 */
const getters = {
  sidebar: (state: any) => state.app.sidebar,
  routes: (state: any) => state.permission.routes,
};
export default getters;
