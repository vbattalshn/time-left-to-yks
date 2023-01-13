import { createStore } from "vuex";

export default createStore({
  state: {
    yks: {
      hour: 10,
      minute: 15,
      month: 6,
      day: 17,
      year: 2023,
      title: "YKS 2023'e kalan zaman"
    },
    lgs: {
      hour: 9,
      minute: 30,
      month: 6,
      day: 6,
      year: 2023,
      title: "LGS 2023'e kalan zaman"
    },
    msu: {
      hour: 10,
      minute: 15,
      month: 3,
      day: 19,
      year: 2023,
      title: "MSÜ 2023'e kalan zaman"
    },
  },
});
