import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/pages/HomePage.vue";
import AuthPage from "@/components/pages/AuthPage.vue";
import JorisPage from "@/components/pages/JorisPage.vue";
import ShunPage from "@/components/pages/ShunPage.vue";
import ThomasPage from "@/components/pages/ThomasPage.vue";
import ProfilPage from "@/components/pages/ProfilPage.vue";
import CredentialsPage from "@/components/pages/CredentialsPage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/auth", name: "auth", component: AuthPage },
  { path: "/joris", name: "joris", component: JorisPage },
  { path: "/shun", name: "shun", component: ShunPage },
  { path: "/thomas", name: "thomas", component: ThomasPage },
  { path: "/profil", name: "profil", component: ProfilPage },
  { path: "/credentials", name: "credentials", component: CredentialsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
