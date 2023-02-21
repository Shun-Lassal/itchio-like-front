import App from "@/App.vue";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import router from "@/utils/router";
import "virtual:windi.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(autoAnimatePlugin);

app.mount("#app");
