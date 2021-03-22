/*
 * @Date: 2021-03-22 16:04:37
 * @LastEditors: 看法是豆腐
 * @LastEditTime: 2021-03-22 16:05:16
 * @Description:
 */
interface State {
  sidebar: {
    opened: boolean;
  };
}

const state: State = {
  sidebar: {
    opened: true,
  },
};

const mutations = {
  TOGGLE_SIDEBAR: (state: State) => {
    state.sidebar.opened = !state.sidebar.opened;
    // console.log(state.sidebar.opened)
  },
};

const actions = {
  toggleSideBar(context: any) {
    context.commit("TOGGLE_SIDEBAR");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
