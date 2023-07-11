import { createStore } from "vuex";

export default createStore({
  state: {
    yks: {
      hour: 10,
      minute: 15,
      month: 6,
      day: 22,
      year: 2024,
      title: "YKS 2024'e son"
    },
    lgs: {
      hour: 9,
      minute: 30,
      month: 6,
      day: 2,
      year: 2024,
      title: "LGS 2024'e son"
    },
    msu: {
      hour: 10,
      minute: 15,
      month: 3,
      day: 24,
      year: 2024,
      title: "MSÜ 2024'e son"
    }
  },
});
