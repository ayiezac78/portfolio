import { defineStore } from "pinia";

export const useNavLinks = defineStore('navLinks', {
  state: () => ({
    links: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Posts",
        path: "/posts",
      },
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