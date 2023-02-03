import App from "@/App.vue";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "@/utils/router";
import "virtual:windi.css";

const pinia = createPinia();
const app = createApp(App);

// Middlewares
app.use(pinia);
app.use(router);

app.mount("#app");
