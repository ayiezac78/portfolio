import './assets/styles/main.css'
import 'floating-vue/dist/style.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './routes/'
import App from './App.vue'
import VueProgressBar from "@aacassandra/vue3-progressbar";
import { createHead, CapoPlugin } from '@unhead/vue'
import { useDark } from "@vueuse/core";
import { computed } from "vue";
import FloatingVue from 'floating-vue'

const isDark = useDark({
  selector: "html",
  attribute: "data-theme",
  valueDark: "dark",
  valueLight: "light",
});

const mode = computed(() => (isDark.value ? "#FFA34D" : "#2A4647"));

const options = {
  color: mode,
  failedColor: "#bf4153",
  thickness: "2.5px",
  transition: {
    speed: "0.3s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,

}

const app = createApp(App);
const head = createHead({
  plugins: [
    CapoPlugin({ track: true })
  ]
});
app.use(VueProgressBar, options)
app.use(router);
app.use(head);
app.use(createPinia());
app.use(FloatingVue, {
  shift: true,
  themes: {
    tooltip: {
      placements: 'auto'
    }
  }
})
app.mount('#app');
