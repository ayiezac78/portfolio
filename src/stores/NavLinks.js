import { defineStore } from "pinia";

export const useNavLinks = defineStore('navLinks', {
  state: () => ({
    links: [
      {
        name: "Projects",
        path: "/projects",
      },
    ]
  }),
  getters: {
    getLinks: (state) => state.links
  }
});