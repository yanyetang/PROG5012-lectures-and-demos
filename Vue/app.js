import {
  createApp,
  ref,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const app = createApp({
  setup() {
    const name = ref("Yanye");
    const count = ref(0);

    return { name, count };
  },
});

app.mount("#app");
