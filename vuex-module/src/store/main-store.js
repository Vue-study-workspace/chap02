export default {
  namespaced: true,
  state: {
    // 現在の時刻で初期化
    updated: (new Date()).toTimeString()
  },
  mutations: {
    // updatedを現在時刻で更新
    setUpdated(state) {
      state.updated = (new Date()).toTimeString();
    }
  },
  actions: {
    globalAction: {
      handler(state) {
        console.log('globalAction is called');
        console.log(state);
      },
      root: true
    },
  }
}
