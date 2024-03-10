import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useauthStore } from "./stores/auth";

(async () => {
  const app = createApp(App);
  app.use(createPinia());

  const auth = useauthStore();
  await auth.getDataUser();

  app.use(router);
  app.mount("#app");
})();
