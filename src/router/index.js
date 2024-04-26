import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/SiteHome.vue";
import Support from "../views/SupportView.vue";
import Privacy from "../views/PrivacyView.vue";
import Cookie from "../views/CookieView.vue";
import Terms from "../views/TermsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/support",
    name: "about",
    component: Support,
  },
  {
    path: "/privacy",
    name: "privacy",
    component: Privacy,
  },
  {
    path: "/cookie",
    name: "cookie",
    component: Cookie,
  },
  {
    path: "/terms",
    name: "terms",
    component: Terms,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
