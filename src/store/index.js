import { createStore } from "vuex";

export default createStore({
  state: {
    yks: {
      hour: 10,
      minute: 15,
      month: 6,
      day: 17,
      year: 2023,
      title: "YKS 2023'e son"
    },
    lgs: {
      hour: 9,
      minute: 30,
      month: 6,
      day: 6,
      year: 2023,
      title: "LGS 2023'e son"
    },
    msu: {
      hour: 10,
      minute: 15,
      month: 4,
      day: 2,
      year: 2023,
      title: "MSÜ 2023'e son"
    },
    secim: {
      hour: 8,
      minute: 0,
      month: 5,
      day: 14,
      year: 2023,
      title: "2023 Seçimlerine Son"
    },
  },
});
