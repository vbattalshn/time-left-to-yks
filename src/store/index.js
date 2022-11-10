import { createStore } from "vuex";

export default createStore({
  state: {
    api: "https://general-api.test/timelefttoyks/",
    yks: {
      hour: 10,
      minute: 15,
      month: 6,
      day: 17,
      year: 2023,
    },
    msu: {
      hour: 10,
      minute: 15,
      month: 3,
      day: 26,
      year: 2023,
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
