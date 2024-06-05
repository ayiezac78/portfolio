import { defineStore } from "pinia";
import { shallowRef } from "vue";
import AwrClinicLogo from "@/assets/svg/AwrClinicLogo.vue";
import FlowerplicityLogo from "@/assets/svg/FlowerplicityLogo.vue";
import MusicPlayerLogo from "@/assets/svg/MusicPlayerLogo.vue";

const getIcon = (icon) => {
  return shallowRef(icon);
};

export const useRepoData = defineStore('repoData', {
  state: () => ({
    repos: [
      {
        id: 0,
        title: "Music Player",
        description:
          "It's a client side application written in vanilla JavaScript using AudioContext API, which allows you to listen to your favorite music.",
        external_link: "https://ayiezac78.github.io/mp3-player/",
        logo: getIcon(MusicPlayerLogo),
        last_updated: 'Updated on Feb 17',
        icon: [
          "devicon:javascript",
          "devicon:html5",
          "devicon:css3",
          "devicon:tailwindcss",
        ],
      },
      {
        id: 1,
        title: "AWR cLinic",
        description:
          "It's a front-end API-driven web application that focuses on setting patient's online appointment schedule to the clinic.",
        external_link: "https://clinicmp2.netlify.app/",
        logo: getIcon(AwrClinicLogo),
        last_updated: 'Updated on Apr 29, 2023',
        icon: [
          "devicon:javascript",
          "devicon:html5",
          "devicon:css3",
          "vscode-icons:file-type-reactjs",
          "devicon:tailwindcss",
        ],
      },
      {
        id: 2,
        title: "Flowerplicity",
        description:
          "It's a static web application that focuses on providing a one-stop-shop for flowers.",
        external_link: "https://flowerplicity.netlify.app/",
        logo: getIcon(FlowerplicityLogo),
        last_updated: 'Updated on Mar 16, 2023',
        icon: [
          "devicon:javascript",
          "devicon:html5",
          "devicon:css3",
          "logos:bootstrap",
        ],
      },
    ]
  }),
  getters: {
    getRepos: (state) => state.repos
  }
});